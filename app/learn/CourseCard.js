'use client';
import react from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Progress } from 'reactstrap';
import { useRouter } from 'next/navigation';


const CourseCard = ({ name, title, desc, progress, button, image }) => {
    const router = useRouter();

    return (
        <Card style={{backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            width: '300px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            borderColor:"#f8f9fa",
            margin: '15px 20px'
        }}
        >
            <CardBody className='flex flex-col p-4 justify-between gap-4 h-full'>
                <CardTitle 
                    tag="h2"
                >{title}</CardTitle>
                <CardText
                    className='text-sm flex-grow'
                >{desc}</CardText>
                {/* <Progress value={50}  style={{height: '10px', borderRadius: '5px'}}/> */}
                <img
                    src={image}
                    alt={title}
                    className='w-24 h-24 mb-2 object-contain rounded-lg mx-auto'
                />
                <Button
                    className='w-full hover:bg-blue-800 hover:border-blue-900  text-light-1 p-2 rounded-lg bg-blue-600 border-blue-700 text-sm font-thin transition-all'
                    onClick={() => router.push(`/courses/${name}`)}
                >Read More</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard