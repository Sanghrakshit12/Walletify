import { prisma } from "@Walletify/db";
import { NextResponse } from "next/server";

export const POST = async () => {
    console.log("Creating user...");
    await prisma.user.create({
        data: {
            Name: "Sanghrakshit",
            username: "SexaaaA@gmail.com",
            password: "123456789"
        }
    });
    console.log("User created successfully");
    return NextResponse.json({
        message: "hi there"
    });
} 
