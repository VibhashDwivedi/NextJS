import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/posts";

const API_KEY = process.env.API_KEY;

export async function GET(request) {
    const response = await fetch(DATA_URL);
    const posts = await response.json();
    return NextResponse.json(posts);
}

export async function POST(request) {
    try{
    const { title, body, userId } = await request.json();
    const response = await fetch(DATA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({ title, body, userId }),
    });
    
    if (response.status === 201)
    {
        const newPost = await response.json();
        return NextResponse.json(newPost);
    }
    else
    {
        return NextResponse.json({message:'Post request failed'}, {status:500});
    }
}
catch(e){
    return NextResponse.json({message:'Error',error:e}, {status:500});
}
}

export async function PUT(request) {
    try{
    const { title, body, userId ,id} = await request.json();
    const response = await fetch(`${DATA_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({ title, body, userId, id }),
    });

    
    if (response.status === 200)
    {
        const newPost = await response.json();
        return NextResponse.json(newPost);
    }
    else
    {
        return NextResponse.json({message:'Put request failed'}, {status:500});
    }
}
catch(e){
    return NextResponse.json({message:'Error',error:e}, {status:500});
}
}


export async function DELETE(request) {
    try{
    const { id } = await request.json();
    const response = await fetch(`${DATA_URL}/${id}`, {
        method: "DELETE",
    });

    
    if (response.status === 200)
    {
        return NextResponse.json({message:'Post deleted'});
    }
    else
    {
        return NextResponse.json({message:'Delete request failed'}, {status:500});
    }
}
catch(e){
    return NextResponse.json({message:'Error',error:e}, {status:500});
}
}