'use client'

import React from 'react'
import { AiOutlineSolution } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { useRouter } from 'next/navigation';
import { mockProblemsData } from '@/constants';

const Problems = () => {

    const router = useRouter();
    const problems = [...mockProblemsData];
    const difficultyColors = [
        {
            type: 'Hard',
            color: 'text-red-500',
        },
        {
            type: 'Medium',
            color: 'text-orange-500',
        },
        {
            type: 'Easy',
            color: 'text-green-500',
        }
    ];

    return (
        <div>
            <div className="p-10">
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs text-gray-500 uppercase bg-light-3">
                            <tr>
                                <th scope="col" className="p-4">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Problem Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Difficulty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Solution
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Video Solution
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {problems.map((problem, index) => (
                                <tr key={index} className="bg-light-2 hover:bg-light-4">
                                    <td className="w-4 p-4">
                                        {/* status show */}
                                        <div>
                                            <ImCheckboxChecked size={20} color={'green'}/>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 hover:text-blue-500 hover:cursor-pointer font-medium whitespace-nowrap">
                                        <div onClick={() => {
                                            router.push(`/problems/${problem.id}`);
                                        }}>
                                            {problem.order}. {problem.title}
                                        </div>
                                    </th>
                                    <td className={`px-6 py-4 ${difficultyColors.map((difficultyTypes) => {
                                        if (difficultyTypes.type === problem.difficulty) {
                                            return " " + difficultyTypes.color + " ";
                                        }
                                    })}`}>
                                        <div className='hover:cursor-pointer'>
                                            {problem.difficulty}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {problem.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        <AiOutlineSolution color={'blue'} size={24} />
                                    </td>
                                    <td className="px-6 py-4 flex justify-between">
                                        <a href={`https://www.youtube.com/${problem.videoId}`}><ImYoutube2 color={'red'} size={35} /></a>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Problems
