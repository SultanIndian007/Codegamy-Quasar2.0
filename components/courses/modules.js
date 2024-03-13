const Modules = ({modules, setData, data}) => {

    const handleModuleClick = (module) => {
        data.map((content) => {
            if(content.title === module) {
                setData(content.content)
            }
        }
        )
    }

    return (
        <div className="w-full flex flex-col px-1">
            <div className="px-5 py-[10px] text-lg cursor-pointer">
                Modules
            </div>
            {modules.map((module, index) => (
                <div key={index} className="rounded-2xl m-2 border-2 border-gray-50">
                    <div className="bg-gray-100 rounded-t-2xl p-2 h-32 flex flex-col justify-center gap-2">
                        <h1 className=" text-base font-semibold ml-3">{module.title}</h1>
                        <p className="ml-3 text-sm">{module.desc}</p>
                    </div>
                    <div className="flex flex-col ml-4">
                        {module.lessons.map((lesson, index) => (
                            <div key={index} className=" p-2 flex flex-row items-center gap-3">
                                <span className="text-xs font-semibold">Lesson {index + 1}</span>
                                <span onClick={() => handleModuleClick(lesson)} className=" text-xs cursor-pointer text-blue-500">{lesson}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default Modules