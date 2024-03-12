import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";


const ProblemDesc = ({ problems }) => {

    const params = useParams();
    const [clickedProblems, setClickedProblems] = useState();
    const [clickedProblemsId, setClickedProblemId] = useState();
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [difficultyColors, setDifficultyColor] = useState([
        {
            type: 'Hard',
            textColor: 'text-red-200',
            bgColor: 'bg-red-500',
        },
        {
            type: 'Medium',
            textColor: 'text-orange-200',
            bgColor: 'bg-orange-500',
        },
        {
            type: 'Easy',
            textColor: 'text-green-200',
            bgColor: 'bg-green-500',
        },
    ]);

    useEffect(() => {
        if (problems) {
            problems.forEach((problem, index) => {
                if (problem.id === params.id) {
                    setClickedProblems(problem);
                    setClickedProblemId(problem._id);
                }
            })
        }

    }, [problems]);

    const handelLikedproblems = async () => {

    }

    const handelDisLikedproblems = async () => {

    }

    const handelFavoritesproblems = async () => {
    
    }

    return (
        <div className='w-full flex flex-col overflow-x-hidden overflow-y-auto px-1'>
            <div className='flex h-11 w-full items-center pt-2 bg-light-3 rounded-t-lg px-2'>
                <div className='bg-light-2 rounded-t-md px-5 py-[10px] text-xs cursor-pointer'>
                    Description
                </div>
            </div>
            <div className='bg-light-2 rounded-b-lg flex-grow'>
                <div className='text-lg p-5'>
                    {clickedProblems?.order}. {clickedProblems?.title}
                </div>
                {/* section 1 */}
                <div className='flex items-center justify-start m-2'>
                    <div className={`mx-4 px-4 py-1 w-15 rounded-full backdrop-blur-smtext-base
                    ${difficultyColors.map((difficultyTypes) => {
                        if (difficultyTypes.type === clickedProblems?.difficulty) {
                            return " " + difficultyTypes.bgColor + " " + difficultyTypes.bgColor + " "
                        }
                    })}
                     `} >
                        {clickedProblems?.difficulty}
                    </div>
                    {/*  Solved Section  */}
                    <div className='mx-2 cursor-pointer' >
                        <TiInputChecked size={30} color={'green'} />
                    </div>
                    {/* Liked Section */}
                    <div className='mx-2 flex cursor-pointer' >
                        <div onClick={handelLikedproblems} >
                            {like ? <AiFillLike size={20} color={'blue'} /> : <AiOutlineLike size={20} color={'blue'} />}
                        </div>
                        <span className='ml-2 cursor-pointer'>123</span>
                    </div>
                    {/* Disliked Section */}
                    <div className='mx-2 flex cursor-pointer'>
                        <div onClick={handelDisLikedproblems} >
                            {disLike ? <AiFillDislike size={20} color={'red'} /> : <AiOutlineDislike size={20} color={'red'} />}
                        </div>

                        <span className='ml-2'>123</span>
                    </div>
                    {/* Favorite Section */}
                    <div className='mx-3 cursor-pointer'>
                        <div onClick={handelFavoritesproblems}>
                            {favorite ? <FaStar size={20} color={'yellow'} /> : < FaRegStar size={20} color={'yellow'} />}
                        </div>
                    </div>
                </div>
                {/* section 2 */}
                <div className='px-5 py-2'>
                    {/* For HTML content Rendering */}
                    <div dangerouslySetInnerHTML={{ __html: clickedProblems?.problemStatement || '' }} />
                </div>
                {/* section 3 */}
                <div className='mt-4 px-5'>
                    <h2 className='font-bold'>Input Format</h2>
                    <div dangerouslySetInnerHTML={{ __html: clickedProblems?.inputFormat || '' }} />
                </div>
                <div className='mt-4 px-5'>
                    <h2 className='font-bold'>Output Format</h2>
                    <div dangerouslySetInnerHTML={{ __html: clickedProblems?.outputFormat || '' }} />
                </div>
                <div className='mt-4 px-5'>
                    <h2 className='font-bold'>Sample Input</h2>
                    <div className='bg-light-4 font-mono mt-1 py-2 px-3 rounded-lg'>
                        <div dangerouslySetInnerHTML={{ __html: clickedProblems?.sampleInput || '' }} />
                    </div>
                </div>
                <div className='mt-4 px-5'>
                    <h2 className='font-bold'>Sample Output</h2>
                    <div className='bg-light-4 font-mono mt-1 py-2 px-3 rounded-lg'>
                        <div dangerouslySetInnerHTML={{ __html: clickedProblems?.sampleOutput || '' }} />
                    </div>
                </div>
                <div className='mt-2 px-5 py-2'>
                    {clickedProblems?.constraints && (
                        <>
                            <b>Constraints:</b><br />
                            <strong>
                                <div className='m-5' dangerouslySetInnerHTML={{ __html: clickedProblems?.constraints || '' }} />
                            </strong>
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ProblemDesc
