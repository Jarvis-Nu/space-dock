import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { users } from "@/lib/utils";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl -mt-40">
      <div className="flex flex-col items-center justify-center w-full max-w-xl space-y-5">
        <Badge className="bg-purple hover:bg-purple">ETH Global Hackathon - Superhack 2023</Badge>
        <h1 className="text-3xl font-bold text-center sm:text-6xl text-dark">Retroactive Public Good Funding</h1>
        <p className="text-center text-dark">
          Secure funding for collaborative building with your communities while actively
          monitoring your favorite projects and individuals.
        </p>
        <div className="space-x-5">
          <Button className="p-6 bg-white text-purple hover:bg-white">Learn more</Button>
          <Button className="p-6 text-white bg-purple hover:bg-purple">Create a project</Button>
        </div>
        <div className="flex">
          {
            users.map(user => (
              <div className="-mr-4 rounded-full">
                <Image src={user.icon} width={35} height={35} alt="avatar" />
              </div>
            ))
          }
        </div>
        <div>
          <p className="text-ash">Over $1M+ funded</p>
        </div>
      </div>
    </div>
  )
}
