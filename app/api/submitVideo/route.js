import path from "path";
import { writeFile } from "fs/promises";
const { v4: uuidv4 } = require('uuid');
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";
import dbConnect from '@/utils/dbConnect';

import {PeerViedo} from "@/models/PeerVideo.js";
import {PeerViedoReview} from "@/models/PeerVideoReview.js";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"


export async function POST(request) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userID = session?.user?._id;
    if (userID){
        const formData = await request.formData()
        const questionID = formData.get('questionid')
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
            const newPeerVideo = new PeerViedo(
                {
                        // question: questionID,
                    videoUrl:  filename,
                }
            )
            const temp = await newPeerVideo.save()
            userdata.peerVideo.push(temp.id)
            userdata.save()
            

            
            return Response.json({ Message: "Success, Video Saved", status: 201 });
        } catch (error) {
            console.log("Error occured ", error);
            return Response.json({ Message: "Failed", status: 500 });
        }
    }  
}