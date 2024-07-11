import { PrismaClient } from "@Walletify/db/client";
import { NextResponse } from "next/server";

let prisma: PrismaClient;

try {
    if (process.env.NODE_ENV === "production") {
        prisma = new PrismaClient();
    } else {
        if (!(global as any).prisma) {
            (global as any).prisma = new PrismaClient();
        }
        prisma = (global as any).prisma;
    }
} catch (error) {
    console.error("Error initializing PrismaClient:", error);
}

export const GET = async () => {
    try {
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
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            error: "An error occurred"
        }, { status: 500 });
    }
};
