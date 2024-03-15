import dbConnect from '@/utils/dbConnect';
import {Problem} from "@/models/Problem";
import {SolvedProblem} from "@/models/SolvedProblem";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

export async function POST(req) {
    await dbConnect();
    // const session = await getServerSession(authOptions);
    // console.log(session)
    const {code,problem,language,contest} = await req.json()
    const prob = await Problem.findOne({id: problem})


    const res = await fetch('https://jdoodle2.p.rapidapi.com/v1',{
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
          },
        body: JSON.stringify({
            language: language,
            version: "latest",
            code: code,
            input: prob.testCases[0].input[0],
          }),
      })
    const data = await res.json()
    let tcPass;
    let isAccepted;
    if (data.output===prob.testCases[0].output[0]){
        tcPass = 1
        isAccepted = "accepted"
    }
    else{
        tcPass = 0
        isAccepted = "rejected"

    }
    const newSolve = new SolvedProblem(
        {
            contest: contest !== null ? contest : undefined,
            problem: prob._id,
            solution: [
                {
                    code: code,
                    complexity: [data.cpuTime, data.memory],
                    status: isAccepted,
                    passedTestCases: tcPass

                }

            ]
            
        }
    )
    await newSolve.save()
    // to-do associate the solution with UserInfo
    // to-do check for submission, if exists, insert the solution in existing SolvedProblem
    return new Response('Solution Saved',{status: 201})
}