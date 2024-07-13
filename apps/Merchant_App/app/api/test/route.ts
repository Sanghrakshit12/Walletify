import { prisma } from "@Walletify/db";
import { NextResponse } from "next/server";

export const POST = async () => {
    console.log("Creating user...");
    await prisma.user.create({
        data: {
            Name: "Sanghrakshit2",
            username: "Sexaaa2A@gmail.com",
            password: "1234567891"
        }
    });
    console.log("User created successfully");
    return NextResponse.json({
        message: "hi there"
    });
} 
