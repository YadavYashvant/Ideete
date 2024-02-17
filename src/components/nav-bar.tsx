import { Button } from "@nextui-org/react"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export function NavBar() {
  return (
    <div className="bg-gray-900 border-t border-b border-gray-900 dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-7xl">
        <nav className="flex flex-row items-center justify-between px-4 h-14 md:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Link className="flex items-center font-bold" href="#">
              Acme Inc
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link className="font-medium" href="#">
              Home
            </Link>
            <Link className="font-medium" href="#">
              Features
            </Link>
            <Link className="font-medium" href="#">
              Pricing
            </Link>
            <Link className="font-medium" href="#">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" color="primary">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Toggle search bar</span>
            </Button>
            <Button variant="ghost">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <Button variant="ghost">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 1 12 0c0 7 3 9 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 3.4" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
