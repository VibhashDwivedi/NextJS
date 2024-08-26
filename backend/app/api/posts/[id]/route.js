import { NextResponse } from "next/server";

export async function GET(req) {
    const id = req.url.split("posts/")[1];
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return NextResponse.json(post);
}

export async function PUT(req) {
    const id = req.url.split("posts/")[1];
    const { title, body, userId } = await req.json();
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, userId }),
    });
    const updatedPost = await res.json();
    return NextResponse.json(updatedPost);
}

export async function DELETE(req) {
    const id = req.url.split("posts/")[1];
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    });
    return NextResponse.json({ message: "Post deleted" });
}