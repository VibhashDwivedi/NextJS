import{users} from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, par) {
    const singleUser = users.filter((user) => user.id == par.params.id)
    if(singleUser.length == 0){
        return NextResponse.json({message: 'User not found'}, {status: 404})
    }
    return  NextResponse.json(singleUser)
}