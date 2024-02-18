"use client"
import { Card, Divider, Input } from "@nextui-org/react";
import {EyeFilledIcon} from "../app/Auth/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../app/Auth/EyeSlashFilledIcon";
import Link from "next/link";
import React from 'react';

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
    <Input
      isDisabled
      type="email"
      label="Email"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
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
      className="max-w-xs"
    />
    </>
  )
}

