import {User} from "@/models/User";
import bcrypt from "bcrypt";
import dbConnect from '@/utils/dbConnect';

export async function POST(req) {
  const body = await req.json();
  await dbConnect();
  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error('password must be at least 5 characters');
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}