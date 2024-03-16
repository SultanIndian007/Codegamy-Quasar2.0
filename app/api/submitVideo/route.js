import path from "path";
import { writeFile } from "fs/promises";
const { v4: uuidv4 } = require('uuid');
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";
import dbConnect from '@/utils/dbConnect';
import {Queue} from "@/models/Queue.js";
import { peerVideoReview } from "@/models/PeerVideoReview.js";
import {peerVideo} from "@/models/PeerVideo.js";
import {Question} from "@/models/Question.js";
import {peerVideoReview} from "@/models/PeerVideoReview.js";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

async function Queue(peerVideo, user){
    const queue = await Queue.find({assigned:{$size: 0}})
    const bands = [0, 20, 30, 40,50, 60, 70,80,90, 100];
    const queueSize = [5,5,5,5,2,2,4,3,2,2];

    function findQueueSize(score) {
        for (let i = 0; i < bands.length; i++) {
            if (score < bands[i]) {
                return queueSize[i];
            }
        }
        return queueSize[queueSize.length - 1];
    }
    const filteredQueue = queue.filter((video) => { 
        return video.UserRating >= Math.floor(user.rating / 10) * 10 && video.UserRating < Math.ceil(user.rating / 10) * 10 + 10;
    });


    if (filteredQueue.length >= findQueueSize(user.rating)) {
        filteredQueue.push({user: user._id, peerVideo: peerVideo._id});
        for (let i = 0; i < filteredQueue.length; i++) {
            for (let j = 0; j < filteredQueue.length; j++) {
                if (filteredQueue[i].user._id !== filteredQueue[j].user._id) {
                    const userinfo = await UserInfo.findById(filteredQueue[j].user._id);
                    await userinfo.assigned.push(filteredQueue[i]._id);
                    await userinfo.save();
                    await filteredQueue[i].assigned.push(filteredQueue[j]._id);
                    await filteredQueue[i].save();
                }
            }
        }
        
    }
    else{
        const newQueue = new Queue({
            user: user._id,
            peerVideo: peerVideo._id,
            UserRating: user.rating
        });
        await newQueue.save();
    }
}

export async function POST(request) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userID = session?.user?._id;
    if (userID){
        const formData = await request.formData()
        const questionID = formData.get('id')
        const file = formData.get('video')
        if (!file) {
            return Response.json({ error: "No files received." }, { status: 400 });
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename =  uuidv4() + path.extname(file.name);;
        try {
            await writeFile(
            path.join(process.cwd(), "public/assets/" + filename),
            buffer
            );
            const user = await User.findById(userID)
            const userdata = await UserInfo.findById(user.userInfo)
            const question = await Question.findOne({id: questionID})
            const newPeerVideo = new peerVideo(
                {
                    question: question._id,
                    videoUrl:  filename,
                }
            )
            const temp = await newPeerVideo.save()
            userdata.peerVideo.push(temp.id)
            userdata.save()
            await Queue(temp, user)
            
            return Response.json({ Message: "Success, Video Saved", status: 201 });
        } catch (error) {
            console.log("Error occured ", error);
            return Response.json({ Message: "Failed", status: 500 });
        }
    }  
}