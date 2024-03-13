'use client'
import Split from "react-split";
import Modules from '@/components/courses/modules'
import ModulesData from '@/constants/courses/modules'
import Content from '@/components/courses/content'
import ContentData from '@/constants/courses/index'
import { useState } from "react";
import { useParams } from 'next/navigation'

const page = () => {

    const params = useParams();
    const courseId = params.id;
    const moduledata = ModulesData[courseId];
    const contentdata = ContentData[courseId];
    const [data, setData] = useState(contentdata[0].content);

    return (
        <div className="w-full px-1 h-[92vh] flex gap-3 pr-5">
            <Modules modules={moduledata} setData={setData} data={contentdata} />
            <Content content={data} />
        </div>
    )
}

export default page
