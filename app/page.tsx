import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { users } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl px-4 space-y-20 md:-mt-10 sm:px-0">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center w-full max-w-xl space-y-5">
        <Badge className="bg-purple hover:bg-purple">ETH Global Hackathon - Superhack 2023</Badge>
        <h1 className="text-3xl font-bold text-center sm:text-6xl text-dark">Retroactive Public Good Funding</h1>
        <p className="text-center text-dark">
          Secure funding for collaborative building with your communities while actively
          monitoring your favorite projects and individuals.
        </p>
        <div className="flex flex-col w-full space-y-2.5 sm:flex-row sm:space-y-0 sm:space-x-5">
          <Button className="w-full p-6 bg-white text-purple hover:bg-white">Learn more</Button>
          <Button className="w-full p-6 text-white bg-purple hover:bg-purple">Create a project</Button>
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
          <p className="font-medium text-ash">Over $1M+ funded</p>
        </div>
      </div>
      {/* Explore */}
      <div className="flex flex-col items-center w-full max-w-xl space-y-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-darkGray">Explore Public Goods</h2>
        <div className="w-full">
          <Tabs defaultValue="projects" className="w-full space-y-5">
            <div className="flex flex-col w-full space-y-2.5 md:justify-between md:flex-row md:items-center md:space-y-0 items-center">
              <TabsList className="w-full py-5 md:w-fit bg-dark/5">
                <TabsTrigger value="projects" className="!text-lightPurple focus:!text-purple data-[state=active]:!text-purple
                w-full md:w-fit">Projects</TabsTrigger>
                <TabsTrigger value="individuals" className="!text-lightPurple focus:!text-purple w-full md:w-fit">Individuals</TabsTrigger>
              </TabsList>
              <div className="flex items-center bg-white px-3 py-2.5 space-x-1.5 rounded-lg h-full w-full md:w-80 border border-ash">
                <div>
                  <Search />
                </div>
                <input type="text" placeholder="Search" className="w-full outline-none" />
              </div>
            </div>
            <TabsContent value="projects">Make changes to your account here.</TabsContent>
            <TabsContent value="individuals">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
