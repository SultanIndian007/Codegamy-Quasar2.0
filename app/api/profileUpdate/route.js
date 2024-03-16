import dbConnect from '@/utils/dbConnect';
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo.js";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"

export async function POST(req) {
    await dbConnect();

    try {
        const session = await getServerSession(authOptions);
        const userID = session?.user?.id;
        if (userID){
            const user = await User.findById(userID)
            const userinfo = await UserInfo.findByIdAndUpdate(user.userInfo,req )
            return new Response('User Data Updated',{status: 201})
        }
        else{
            return new Response('User Not Found',{status: 500})
        }
        
      } catch (error) {
        console.error(error);
        return new Response(error,{status: 500}) // Handle any errors
      }
}
