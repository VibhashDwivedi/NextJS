import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(req)
{

    const { fullName, email, message } = await req.json();
    
        await connectDB();
        await Contact.create({ fullName, email, message });

        console.log({ fullName, email, message });
        return NextResponse.json({ message: "Contact form submitted" });
   

}