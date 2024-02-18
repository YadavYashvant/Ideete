"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";
import { Container } from "@nextui-org/react";


export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (

    <div className="flex justify-center items-center h-screen bg-black/35"  >
        <Card className="w-96 h-96 bg-white">
      <CardHeader className="flex gap-3 items-center justify-center" >
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Ideete</p>
          <p className="text-small text-default-500">Login or SignUp</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      // defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs mt-5 ml-4"
    />
      <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
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
      className="max-w-xs mt-5 ml-4"
    />
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-between">
      <Button color="primary" variant="faded">
        Sign in
      </Button>
      <Link color="primary" href="#">
        Forgot password?
      </Link>
      </CardFooter>
      <Divider/>
      <CardFooter className="flex justify-between"> 
      <p className="text-sm w-24">Don&apos;t have an account?</p>
      <Button color="primary" variant="faded"> 
        Sign up
      </Button>
      </CardFooter>
    </Card>
      </div>
    
  );
}
