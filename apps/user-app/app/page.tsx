import { PrismaClient } from "@trader/db/client"
const client = new PrismaClient();


export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-gray-500">
      Hello world!
    </h1>
  )
}
