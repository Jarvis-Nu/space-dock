"use client"

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import connectProjectContract from "@/lib/createProjectContract";
import { truncateString, types } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";
import { Web3Storage } from 'web3.storage'

export default function page() {
  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  const dropRef: RefObject<HTMLInputElement> = useRef(null)
  const [file, setFile] = useState<File>()
  const [message, setMessage] = useState<string>()
  const [status, setStatus] = useState<string>()
  const [name, setName] = useState<string>()
  const [logo, setLogo] = useState<string>()
  const [about, setAbout] = useState<string>()
  const [website, setWebsite] = useState<string>()
  const [twitter, setTwitter] = useState<string>()
  const [github, setGithub] = useState<string>()
  const [blog, setBlog] = useState<string>()
  const [address, setAddress] = useState<string>()
  useEffect(() => {
    dropRef.current?.addEventListener('dragover', handleDragOver)
    dropRef.current?.addEventListener('drop', handleDrop)
    return () => {
      dropRef.current?.removeEventListener('dragover', handleDragOver);
      dropRef.current?.removeEventListener('drop', handleDrop);
    };
  }, [file])
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setMessage("Drop it!!!")
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer
    if (types.find(type => type == files[0].type)) {
      setFile(files[0])
      setMessage(`${truncateString(files[0]?.name, 10)} selected`)
    }
    else {
      setMessage("Invalid file type")
    }
  };

  const handleChange = (e: any) => {
    const { files } = e.target
    if (types.find(type => type == files[0].type)) {
      setFile(files[0])
      setMessage(`${truncateString(files[0]?.name, 10)} selected`)
    }
    else {
      setMessage("Invalid file type")
    }
  }

  const router = useRouter()

  const createProject = async () => {
    setStatus("Uploading data to IPFS...")
    const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_API_KEYS || "" })
    const projectLogo = new Blob([file || ""], { type: file?.type })
    const files = [new File([projectLogo], file?.name || "", { type: file?.type })]
    let cid = await client.put(files)
    if (cid) {
      try {
        const createProjectContract = connectProjectContract();

        if (createProjectContract) {

          const txn = await createProjectContract.createVenture(
            {
              name: name,
              hash: cid,
              about: about,
              profiles: {
                website: website,
                twitter: twitter,
                github: github,
                blog: blog
              },
              op_multisig: address
            },
            { gasLimit: 900000 }
          );
          if (txn.hash != "") {
            setStatus("Project created")
          }
        } else {
          setStatus("Project creation failed")
        }
      } catch (error) {
        setStatus("Project creation failed")
      }
    }
    else {
      setStatus("Error uploading data to IPFS")
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center w-full h-full">
        <div className="min-h-screen w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat object-cover">
          <Navbar />
          <div className="flex justify-center flex-1 w-full h-full mt-8 md:mt-14 lg:mt-24">
            <div className="w-full h-full px-4 space-y-20 sm:max-w-xl md:max-w-2xl lg:max-w-4xl sm:px-0">
              <div className="w-full space-y-5">
                <div className="flex flex-col w-full sm:flex-row sm:justify-between space-y-1.5">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold text-dark">Project Info</h2>
                    <p className="text-lightestAsh">Input your project information and details here.</p>
                  </div>
                  <div className="space-x-2.5">
                    <Button className="text-black bg-white border hover:bg-white active:bg-white border-lightAsh"
                      onClick={() => router.push("/")}>Cancel</Button>
                    <Button className="text-white bg-purple hover:bg-purple active:bg-purple"
                      onClick={createProject}>{status || "Create project"}</Button>
                  </div>
                </div>
                <div className="w-full bg-lightestAsh h-[0.5px]" />
                <div className="space-y-5">
                  <div className="flex flex-col space-y-1.5 sm:flex-row sm:space-y-0 w-full md:space-x-2.5">
                    <div className="flex-1">
                      <h3 className="font-semibold text-darkGray">Project name</h3>
                    </div>
                    <div className="flex-1">
                      <input type="text" placeholder="Space Dock" className="w-full border border-lightAsh p-2.5 rounded-md outline-none"
                        onChange={e => setName(e.target.value)} />
                    </div>
                  </div>
                  <div className="w-full bg-lightestAsh h-[0.5px]" />
                  <div className="flex flex-col w-full space-y-5 md:flex-row md:space-y-0 md:space-x-2.5">
                    <div className="flex-1">
                      <h3 className="font-semibold text-darkGray">Logo</h3>
                      <p className="text-lightestAsh">This will be displayed on your project dashboard.</p>
                    </div>
                    <div className="flex flex-col flex-1 w-full h-full space-y-5 md:p-5 lg:p-0 sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div>
                        <Image src={"/avatar.png"} width={75} height={75} alt="logo" />
                      </div>
                      <div className="flex-1">
                        <div className="w-full bg-white border rounded-md min-h-40 border-lightAsh hover:cursor-pointer"
                          ref={dropRef} onClick={() => inputRef.current?.click()}>
                          <div className="flex flex-col items-center justify-center w-full h-full p-5">
                            <div>
                              <Image src={"/upload.png"} width={60} height={60} alt="upload icon" />
                            </div>
                            <p><span className="font-medium text-purple">Click to upload </span>or drag and drop</p>
                            <p>SVG, PNG, JPG, WEBP or GIF</p>
                            <p>{message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input type="file" className="hidden" onChange={handleChange} ref={inputRef} />
                  </div>
                </div>
                <div className="w-full bg-lightestAsh h-[0.5px]" />
                <div className="flex flex-col w-full space-y-5 md:flex-row md:space-y-0">
                  <div className="flex-1">
                    <h3 className="font-semibold text-darkGray">About project</h3>
                    <p className="text-lightestAsh">Write a description about this project</p>
                  </div>
                  <div className="flex-1">
                    <textarea placeholder="Building the next generation of public funded projects."
                      className="w-full h-40 p-2.5 rounded-md border border-lightAsh outline-none"
                      onChange={e => setAbout(e.target.value)} />
                  </div>
                </div>
                <div className="w-full bg-lightestAsh h-[0.5px]" />
                <div className="flex flex-col w-full space-y-5 md:flex-row md:space-y-0 md:space-x-2.5">
                  <div className="flex-1">
                    <h3 className="font-semibold text-darkGray">Social profiles</h3>
                    <p className="text-lightestAsh">Input links to your social media, so the public can reach out to you.</p>
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <div className="flex">
                      <button className="bg-white border border-r-0 rounded-l-lg rounded-r-0 border-lightAsh p-2.5 text-purple w-28">Website</button>
                      <input type="text" placeholder="https://www.spacedork.xyz" className="w-full border outline-none border-lightAsh px-2.5"
                        onChange={e => setWebsite(e.target.value)} />
                    </div>
                    <div className="flex">
                      <button className="bg-white border border-r-0 rounded-l-lg rounded-r-0 border-lightAsh p-2.5 text-purple w-28">Twitter</button>
                      <input type="text" placeholder="https://twitter.com/spacedork" className="w-full border outline-none border-lightAsh px-2.5"
                        onChange={e => setTwitter(e.target.value)} />
                    </div>
                    <div className="flex">
                      <button className="bg-white border border-r-0 rounded-l-lg rounded-r-0 border-lightAsh p-2.5 text-purple w-28">Github</button>
                      <input type="text" placeholder="https://github.com/spacedork" className="w-full border outline-none border-lightAsh px-2.5"
                        onChange={e => setGithub(e.target.value)} />
                    </div>
                    <div className="flex">
                      <button className="bg-white border border-r-0 rounded-l-lg rounded-r-0 border-lightAsh p-2.5 text-purple w-28">Blog</button>
                      <input type="text" placeholder="https://medium.com/spacedork" className="w-full border outline-none border-lightAsh px-2.5"
                        onChange={e => setBlog(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="w-full bg-lightestAsh h-[0.5px]" />
                <div className="flex flex-col space-y-1.5 sm:flex-row sm:space-y-0 w-full md:space-x-2.5">
                  <div className="flex-1">
                    <h3 className="font-semibold text-darkGray">Project OP Multisig</h3>
                  </div>
                  <div className="flex-1">
                    <input type="text" placeholder="0xd4ebc61981e5B9AB392b68f2638012E2346D534C"
                      className="w-full border border-lightAsh p-2.5 rounded-md outline-none"
                      onChange={e => setAddress(e.target.value)} />
                  </div>
                </div>
                <div className="w-full bg-lightestAsh h-[0.5px]" />
                <div className="space-x-2.5 pb-5 flex justify-end">
                  <Button className="text-black bg-white border hover:bg-white active:bg-white border-lightAsh"
                    onClick={() => router.push("/")}>Cancel</Button>
                  <Button className="text-white bg-purple hover:bg-purple active:bg-purple"
                    onClick={createProject}>{status || "Create project"}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
