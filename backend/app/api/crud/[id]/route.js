import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const id = req.url.split("crud/")[1];
        console.log(id);
        console.log(users)
        const user = users.find(user => user.id == id);
        return NextResponse.json(user);

    } catch (e) {
        return NextResponse.json({ message: 'Error', error: e }, { status: 500 });
    }
}



export async function DELETE(req) {
    try {
        const id = req.url.split("crud/")[1];
        const userIndex = users.findIndex(user => user.id == id);
        if (userIndex == -1) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        users.splice(userIndex, 1);
        console.log(users);
        return NextResponse.json({ message: 'User deleted' });
        
    } catch (e) {
        return NextResponse.json({ message: 'Error', error: e }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const id = req.url.split("crud/")[1];
        const userIndex = users.findIndex(user => user.id == id);
        if (userIndex == -1) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        const newUser = await req.json();
        users[userIndex] = newUser;
        return NextResponse.json(newUser);
    } catch (e) {
        return NextResponse.json({ message: 'Error', error: e }, { status: 500 });
    }
}