import dbConnect from "@/utils/dbConnect";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route.js"
import { UserInfo } from "@/models/UserInfo.js";
import {User} from "@/models/User";

export async function GET() {
    await dbConnect();

    try {
      const session = await getServerSession(authOptions);
      if (session?.user?._id){
        const user = await User.findById(session?.user?._id)
        const data = await UserInfo.findById(user.userInfo )
        console.log("User Data:", data);
        return new Response(JSON.stringify(data), {status: 200})
      } 
    }catch (error) {  
        console.error(error);
        return new Response(error,{status: 500})
      }
}