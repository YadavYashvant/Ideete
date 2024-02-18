"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-960 bg-dot-white/[0.6]"  >
      <section className="bg-gradient-to-r from-transparent to-gray-950">
        <Card className="w-[420px] h-[500px] bg-gray-900">
      <CardHeader className="flex gap-3 items-center justify-center" >
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-lg text-default-100">Ideete</p>
          <p className="text-small text-default-300">Login or SignUp</p>
        </div>
      </CardHeader>
      <Divider className="bg-white/50"/>
      <CardBody>
      <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      // defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs mt-5 ml-4 text-white"
    />
      <Input
      label="Password"
      variant="bordered"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs mt-5 ml-4 text-white"
    />
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-between">
      <Button color="default" className="bg-gray-300 border-none" variant="faded">
        Sign in
      </Button>
      <Link color="primary" href="#">
        Forgot password?
      </Link>
      </CardFooter>
      <Divider className="bg-white/30 my-5"/>
      <CardFooter className="flex justify-between"> 
      <p className="text-sm w-24 text-white/60">Don&apos;t have an account?</p>
      <Button color="default" className="bg-gray-300 border-none" variant="faded"> 
        Sign up
      </Button>
      </CardFooter>
    </Card>
    </section>
      </div>
    
  );
}
