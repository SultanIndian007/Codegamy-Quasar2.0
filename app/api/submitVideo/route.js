import path from "path";
import { writeFile } from "fs/promises";
const { v4: uuidv4 } = require('uuid');
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";
import dbConnect from '@/utils/dbConnect';
import {Queue} from "@/models/Queue.js";
import {peerVideo} from "@/models/PeerVideo.js";
import {Question} from "@/models/Question.js";
import {peerVideoReview} from "@/models/PeerVideoReview.js";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

async function QueueCheck(peerVideo, user){
    const oguserdata = await UserInfo.findById(user.userInfo)

    const newQueue = new Queue({
        user: user._id,
        peerVideo: peerVideo._id,
        userRating: oguserdata.rating
    });
    await newQueue.save();

    const queue = await Queue.find({assigned:{$size: 0}}).populate('user')
    const bands = [0, 20, 30, 40,50, 60, 70,80,90, 100];
    const queueSize = [5,5,5,2,2,2,2,2,2,2];

    function findQueueSize(score) {
        for (let i = 0; i < bands.length; i++) {
            if (score < bands[i]) {
                return queueSize[i];
            }
        }
        return queueSize[queueSize.length - 1];
    }
    
    const filteredQueue = queue.filter((video) => { 
        return video.userRating >= (Math.floor(oguserdata.rating / 10) * 10) && video.userRating <= Math.ceil(oguserdata.rating / 10) * 10;
    });

    if (filteredQueue.length >= findQueueSize(oguserdata.rating)) {
        for (let i = 0; i < filteredQueue.length; i++) {
            for (let j = 0; j < filteredQueue.length; j++) {
                if (filteredQueue[i].user._id !== filteredQueue[j].user._id) {
                    const userinfo = await UserInfo.findById(filteredQueue[j].user.userInfo);
                    console.log(filteredQueue[j])
                    await userinfo.assigned.push(filteredQueue[i]._id);
                    await userinfo.assignedTime.push(Date.now())
                    await userinfo.save();
                    await filteredQueue[i].assigned.push(filteredQueue[j]._id);
                    await filteredQueue[i].save();
                }
            }
        }
        
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
            await QueueCheck(temp, user)
            
            return Response.json({ Message: "Success, Video Saved", status: 201 });
        } catch (error) {
            console.log("Error occured ", error);
            return Response.json({ Message: "Failed", status: 500 });
        }
    }  
}