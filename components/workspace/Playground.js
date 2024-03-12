"use client";
import React, { useEffect, useState } from "react";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";
import CodeEditorWindow from "./CodeEditorWindow";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import Split from "react-split";
import { languagesData } from "@/constants";
import { defineTheme } from "@/lib/defineTheme";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import Timer from "./Timer";
import axios from "axios";
import Loader from "../shared/Loader";
import { toast } from 'react-toastify';
import { useParams } from "next/navigation";

const Playground = ({ problems, isForSubmission = true, setSubmitted }) => {
  
  const params = useParams();
  const [code, setCode] = useState('print("Hello world!!")');
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [isCodeSubmitting, setIsCodeSubmitting] = useState(false);
  const [theme, setTheme] = useState({ value: "cobalt", label: "Cobalt" });
  const [language, setLanguage] = useState(
    languagesData[languagesData.length - 18]
  );
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [clickedProblem, setClickedProblem] = useState();

  useEffect(() => {
    if (problems) {
        problems.forEach((problem, index) => {
            if (problem.id === params.id) {
                setClickedProblem(problem);
                setCustomInput(problem.testCase.input[0]);
            }
        })
    }

}, [problems]);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    function exitHandler(e) {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, [isFullScreen]);

  function handleThemeChange(th) {
    const theme = th;
    // console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = async (input, forSubmisssion=false) => {
    if (!forSubmisssion) setIsCodeRunning(true);
    const options = {
      method: "POST",
      url: "https://jdoodle2.p.rapidapi.com/v1",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      },
      data: {
        language: language.id,
        version: "latest",
        code: code,
        input: input,
      },
    };

    try {
      const response = await axios.request(options);
      if (!forSubmisssion) {
        setOutputDetails(response.data)
        setIsCodeRunning(false);
      };
      return response.data.output;
    } catch (error) {
      setIsCodeRunning(false);
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    setIsCodeSubmitting(true); 
    try {
      const testcases = { ...clickedProblem.testCase };
      let allCorrect = true;
      for (let i=0; i<testcases.input.length; i++) {
        const ans = await handleCompile(testcases.input[i], true);
        if (ans.toLowerCase()!==testcases.output[i]) {
          allCorrect = false;
          break;
        }
      }
      if (allCorrect) {
        setOutputDetails({
          submitted: true, accepted: true
        });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setOutputDetails({
          submitted: true, accepted: false
        })
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsCodeSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex px-4 gap-2 justify-between">
        <div className="flex gap-2">
          <LanguagesDropdown onSelectChange={(lang) => setLanguage(lang)} />
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
        <div className="flex gap-2 items-center">
          <Timer />
          <button onClick={handleFullScreen}>
            <div className="h-6 w-6 font-bold text-2xl text-dark-4">
              {!isFullScreen ? (
                <AiOutlineFullscreen />
              ) : (
                <AiOutlineFullscreenExit />
              )}
            </div>
          </button>
        </div>
      </div>

      <Split
        className="!w-full flex-grow flex flex-col items-start px-4 py-4"
        direction="vertical"
        minSize={100}
      >
        <CodeEditorWindow
          code={code}
          onChange={onChange}
          language={language.id}
          theme={theme.value}
        />

        <div className="!w-full min-h-[30%] flex flex-col">
          <div className="flex justify-end items-center gap-3">
            <button
              onClick={() => handleCompile(customInput)}
              disabled={!code}
              className={`px-4 py-2 bg-dark-4 text-light-1 mt-2 rounded-lg text-sm`}
            >
              {isCodeRunning ? <Loader /> : "Run"}
            </button>
            {isForSubmission && (
              <button
                onClick={handleSubmit}
                disabled={!code}
                className={`px-4 py-2 bg-green-600 text-light-1 mt-2 rounded-lg text-sm`}
              >
                {isCodeSubmitting ? <Loader /> : "Submit"}
              </button>
            )}
          </div>

          <div className="flex gap-5 flex-grow">
            <div className="!w-full flex flex-col">
              <h1 className="font-bold text-lg">Custom Input</h1>
              <CustomInput
                customInput={customInput}
                setCustomInput={setCustomInput}
              />
            </div>
            <OutputWindow outputDetails={outputDetails} />
          </div>
        </div>
      </Split>
    </div>
  );
};

export default Playground;
