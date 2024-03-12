'use client';
import react from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Progress } from 'reactstrap';


const CourseCard = ({ title, desc, progress, button }) => {

    const handleCompile = () => {
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
                    style={{
                        backgroundColor: '#007bff',
                        borderColor: '#007bff',
                        fontSize: '12px',
                        width: '100px',
                        padding: '5px',
                        borderRadius: '5px',
                    
                    }}
                    onClick={handleCompile}
                >Read More</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard