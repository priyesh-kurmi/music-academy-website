import { div } from "motion/react-client"
import Link from "next/link"
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
    return (
        <div
        className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >
            <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
            />
            <div className="mt-40 p-4 relative z-10 w-full text-center flex flex-col gap-10" >
                <h1
                className="mt-25 md:mt-0 text-5xl md:text-8xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >
                Master the art of music
                </h1>
                <p
                className="mt-4 font-normal text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto"
                >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:font-semibold"
                        >
                        Explore courses
                        </Button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
  

export default HeroSection