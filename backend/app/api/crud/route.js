import {users} from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async( req, res) => {
 try{
    return NextResponse.json(users);
 }
 catch(e){
    return NextResponse.json({message:'Error',error:e}, {status:500});
 }
}

export const POST = async( req, res) => {
    try{
        const newUser = await req.json();
        users.push(newUser);
        return NextResponse.json((newUser));
    }
    catch(e){
        return NextResponse.json({message:'Error',error:e}, {status:500});
    }
}

