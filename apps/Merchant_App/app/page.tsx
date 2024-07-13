import { PrismaClient } from "@Walletify/db"
const client=new PrismaClient()
export default function Home(){
  return <div className="text-4xl">Merchant Page</div>
}