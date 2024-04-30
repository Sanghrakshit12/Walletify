import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export const POST = async () => {
    try {
        await client.user.create({
            data: {
                Username: "Sangha@gmail.com",
                firstnName: "Sanghrakshit",
                lastName:"gautam",
                password:"123456789"
            }
        })
        return NextResponse.json({ message: "User created successfully" })
    } catch (error) {
        console.error("Error creating user:", error)
        return NextResponse.json({ message: "User Failed" })
    } finally {
        await client.$disconnect()
    }
}
