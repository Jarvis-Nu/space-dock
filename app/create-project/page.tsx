import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <div className="flex flex-col items-center w-full h-full">
        <div className="min-h-screen w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat object-cover">
          <Navbar />
          <div className="flex justify-center flex-1 w-full h-full mt-8 md:mt-14 lg:mt-24">
            <div className="w-full h-full px-4 space-y-20 sm:max-w-xl lg:max-w-4xl sm:px-0">
              <div className="w-full space-y-5">
                <div className="flex flex-col w-full sm:flex-row sm:justify-between space-y-1.5">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold text-dark">Project Info</h2>
                    <p className="text-lightestAsh">Input your project information and details here.</p>
                  </div>
                  <div className="space-x-2.5">
                    <Button className="text-black bg-white border-2 hover:bg-white active:bg-white border-lightAsh">Cancel</Button>
                    <Button className="text-white bg-purple hover:bg-purple active:bg-purple">Save</Button>
                  </div>
                </div>
                <div className="w-full bg-lightestAsh h-[0.5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
