import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function HomePage() {
  return (
    <>
      <div className="bg-gray-50 border-t border-b border-gray-200">
        <div className="container flex flex-col gap-4 justify-center py-4 px-4 text-center md:flex-row md:gap-6 md:px-6 lg:gap-8">
          <Link
            className="flex items-center justify-center space-x-2 text-2xl font-extrabold tracking-tighter rounded-full bg-gray-900 w-12 h-12 text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="flex items-center justify-center space-x-4 flex-1 min-h-[40px]">
            <Link
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              About
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Features
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center justify-center space-x-4 min-[300px]:ml-auto">
            <Link
              className="inline-block text-sm font-medium underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Log in
            </Link>
            <Link
              className="inline-block text-sm font-medium underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:flex-row md:px-6 lg:gap-16">
          <div className="space-y-4 md:mr-10 lg:mr-16 md:space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find your next big idea</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                The platform for discovering untapped potential. Enter your ideas below to see if they've already been
                explored.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="w-full max-w-[300px]">
                <div className="relative">
                  <Input className="w-full peer h-10" placeholder="Enter your idea" type="email" />
                  <Button className="absolute top-0 right-0 h-10 translate-y-[-50%]">Submit</Button>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-video"
            height="300"
            src="/placeholder.svg"
            width="500"
          />
        </div>
      </section>
      <div className="container flex flex-col gap-4 py-8 px-4 md:gap-10 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:gap-8">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How it works</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Our AI-powered platform scans the web for related content and returns a comprehensive report on the
              originality of your idea.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key features</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="flex space-x-4">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Real-time analysis</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get instant feedback on the originality of your idea.
                  </p>
                </div>
              </li>
              <li className="flex space-x-4">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Comprehensive search</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our platform scours the web to find similar concepts.
                  </p>
                </div>
              </li>
              <li className="flex space-x-4">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Collaboration tools</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Share your findings with team members and experts.
                  </p>
                </div>
              </li>
              <li className="flex space-x-4">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Customizable alerts</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Set up notifications for new developments in your field.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="w-full py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Sign up today and unlock the power of idea detection.
            </p>
          </div>
          <div className="w-full max-w-[400px] space-y-2">
            <Input placeholder="Enter your email" type="email" />
            <Button className="w-full h-10">Sign Up</Button>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-200">
        <div className="container flex flex-col gap-4 py-4 px-4 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 lg:gap-8">
          <p className="text-sm text-center text-gray-500 md:text-left dark:text-gray-400">
            © 2023 Acme Inc. All rights reserved.
          </p>
          <nav className="flex items-center justify-center space-x-4 md:ml-auto">
            <Link
              className="inline-block text-xs font-medium underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="inline-block text-xs font-medium underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 7v11a2 2 0 1-2 2H5a2 1-2-2z" />
      <polyline points="9 22 12 15" />
    </svg>
  )
}


function CheckCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
