'use client';
import react from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Progress } from 'reactstrap';
import { useRouter } from 'next/navigation';


const CourseCard = ({ name, title, desc, progress, button }) => {
    const router = useRouter();

    const handleCompile = () => {
        router.push(`/courses/${name}`);
    }

    return (
        <Card style={{backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            width: '300px',
            height: '250px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            borderColor:"#f8f9fa",
            margin: '20px'
        }}
        >
            <CardBody style={{display: 'flex', flexDirection: 'column', padding:"20px", justifyContent: 'space-between', flexWrap: 'wrap', gap:"10px"}}>
                <CardTitle 
                    tag="h3"
                >{title}</CardTitle>
                <CardText
                    style={{
                        fontSize: '12px'
                    }}
                >{desc}</CardText>
                <Progress value={50}  style={{height: '10px', borderRadius: '5px'}}/>
                <Button
                    className='hover:bg-blue-800 hover:border-blue-900  hover:text-white p-2 w-24 rounded-lg bg-blue-600 border-blue-700 text-xs font-thin text-gray-300'
                    onClick={handleCompile}
                >Read More</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard