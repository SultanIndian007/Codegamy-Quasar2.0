import CourseCard  from '@/app/learn/CourseCard';

const page = () => {

    const courses = [
        {
            name : "cpp",
            title: "Introduction to C++",
            desc: "C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.",
            progress: 50
        },
        {
            name: "python",
            title: "Introduction to Python",
            desc: "Python is an interpreted, high-level and general-purpose programming language.",
            progress: 70
        },
        {
            name: "javascript",
            title: "Introduction to JavaScript",
            desc: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
            progress: 30
        },
        {
            name: "java",
            title: "Introduction to Java",
            desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
            progress: 90
        },
        {
            name: "c",
            title: "Introduction to C",
            desc: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
            progress: 80
        }
    ]

    return (
        <div style={{
            width: '100%',
            justifyContent: "center",
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {courses.map((course, index) => (
                <CourseCard
                    key={index}
                    name = {course.name}
                    title={course.title}
                    desc={course.desc}
                    progress={course.progress}
                />
            ))}

        </div>
    )
}

export default page