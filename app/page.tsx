import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { individuals, projects, truncateString, users } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { PlayCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl px-4 space-y-20 sm:px-0">
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
              <TabsList className="w-full py-6 md:w-fit bg-dark/5">
                <TabsTrigger value="projects" className="!text-lightPurple focus:!text-purple data-[state=active]:!text-purple
                w-full md:w-fit py-2.5">Projects</TabsTrigger>
                <TabsTrigger value="individuals" className="!text-lightPurple focus:!text-purple w-full md:w-fit py-2.5">Individuals</TabsTrigger>
              </TabsList>
              <div className="flex items-center bg-white px-3 py-2.5 space-x-1.5 rounded-lg h-full w-full md:w-80 border border-ash">
                <div>
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </div>
                <input type="text" placeholder="Search" className="w-full outline-none" />
              </div>
            </div>
            <TabsContent value="projects">
              <div className="flex justify-center w-full">
                <div className="grid gap-8 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
                  {
                    projects.map(project => (
                      <Card className="w-full max-w-xs rounded-xl" key={project.key}>
                        <CardContent className="w-full p-0">
                          <div className="relative w-full h-48 max-w-xs">
                            <Image src={project.avatar} layout="fill" alt="Card image" />
                          </div>
                        </CardContent>
                        <CardHeader className="p-2.5">
                          <CardTitle className="text-xl">{project.name}</CardTitle>
                          <CardDescription className="text-base">{truncateString(project.description, 100)}</CardDescription>
                        </CardHeader>
                        <div className="px-2.5">
                          <div className="w-full h-[1px] bg-lightAsh" />
                        </div>
                        <CardFooter className="px-2.5 py-2.5">
                          <p className="text-lightestAsh"><span className="font-semibold text-darkGray">{project.numberOfAttestations}</span> Attestations</p>
                        </CardFooter>
                      </Card>
                    ))
                  }
                </div>
              </div>
            </TabsContent>
            <TabsContent value="individuals">
              <div className="flex justify-center w-full">
                <div className="grid gap-8 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
                  {
                    individuals.map(individual => (
                      <Card className="w-full max-w-xs rounded-xl" key={individual.key}>
                        <CardContent className="w-full p-0">
                          <div className="relative w-full h-48 max-w-xs">
                            <Image src={individual.avatar} layout="fill" alt="Card image" />
                          </div>
                        </CardContent>
                        <CardHeader className="p-2.5">
                          <CardTitle className="text-xl">{individual.name}</CardTitle>
                          <CardDescription className="text-base">{truncateString(individual.description, 100)}</CardDescription>
                        </CardHeader>
                        <div className="px-2.5">
                          <div className="w-full h-[1px] bg-lightAsh" />
                        </div>
                        <CardFooter className="px-2.5 py-2.5">
                          <p className="text-lightestAsh"><span className="font-semibold text-darkGray">{individual.numberOfAttestations}</span> Attestations</p>
                        </CardFooter>
                      </Card>
                    ))
                  }
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* Join us & Footer */}
      <div className="flex flex-col items-center w-screen px-4 bg-transAsh">
        {/* Join us */}
        <div className="w-full max-w-xl pt-16 pb-8 space-y-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <div className="flex flex-col items-center w-full space-y-4">
            <div>
              <Image src={"/logo.png"} width={75} height={75} alt="logo" />
            </div>
            <h2 className="w-full text-2xl font-semibold md:text-3xl text-lightGray text-start sm:text-center">Create your public good project </h2>
            <h4 className="w-full text-base md:text-xl text-lightestAsh text-start sm:text-center">Join over 4,000+ projects to get funded.</h4>
            <div className="flex flex-col items-center justify-center w-full space-y-2.5 sm:flex-row sm:space-y-0 sm:space-x-5">
              <Button className="w-full p-6 text-white bg-purple hover:bg-purple sm:w-80">Create a project</Button>
              <Button className="w-full p-6 text-black bg-white border-2 border-gray hover:bg-white sm:w-80">
                <div className="flex items-center space-x-0.5">
                  <div>
                    <PlayCircleIcon className="w-6 h-6 text-gray" />
                  </div>
                  <div>
                    <p>View demo</p>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="w-screen px-4 py-5 lg:px-20 xl:px-24 bg-transAsh">
          <div className="w-full h-[1px] bg-darkGray/10" />
          <div className="flex flex-col-reverse items-start justify-between py-5 sm:flex-row sm:items-center sm:justify-between text-lightestGray">
            <p className="pt-2.5">© 2023 Space Dock. All rights reserved.</p>
            <div>
              <div className="space-x-5 mt-2.5">
                <Link href={"/"}>Terms</Link>
                <Link href={"/"}>Privacy</Link>
                <Link href={"/"}>Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
