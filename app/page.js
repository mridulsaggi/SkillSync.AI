"use client"
import Typewriter from 'typewriter-effect';
import React, { useState } from 'react';
import {
  BotMessageSquare, Fingerprint, ShieldHalf,
  BatteryCharging, PlugZap, GlobeLock, Menu, X,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
// import codeImg from '../public/code.jpg';
import { Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { chatSession } from "../util/generateQuestions";

export default function Home() {

  const [loading, setloading] = useState(false);
  const [content, setcontent] = useState("");
  const [OpenDialog, setOpenDialog] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  const submithandler = async () => {
    setloading(true);
    const prompt = `Please generate a nice motivational message to boost my energy for the day and work harder for my goals and achieve them. The message should reflect motivation and encourage the reader to be more happier and work hard.The reader is a student learning to code and practice new skills. The response must be in json format in this manner:
      {
        message:""
      }
    `
    const res = await chatSession.sendMessage(prompt);
    const temp = res.response.text()
    const result = JSON.parse(temp)
    console.log(result)
    setcontent(result?.message)
    setloading(false)
  }
  const handleClose = () => {
    setOpenDialog(false)
  }
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Dashboard", href: "#" },
    { label: "AI Interview", href: "#" },
    { label: "Study", href: "#" },
  ];

  const features = [
    {
      icon: <BotMessageSquare />,
      text: "AI-Powered Skill DNA",
      description:
        "Dynamic, blockchain-verified Skill DNA that evolves with each course completed, project worked on, and skills developed. A robust professional identity card replacing traditional resumes.",
    },
    {
      icon: <Fingerprint />,
      text: "Real-Time Competitor Analysis",
      description:
        "Compares users' skills with job descriptions, competitor profiles, and industry trends in real-time, guiding them towards the most in-demand skills.",
    },
    {
      icon: <ShieldHalf />,
      text: "Blockchain-Verified SkillTokens",
      description:
        "Skills are tokenized using blockchain, creating transparent, tamper-proof credentials and turning skills into tradable, certified assets.",
    },
    {
      icon: <BatteryCharging />,
      text: "One Subscription Model",
      description:
        "Access all courses with one subscription fee. Payments are fairly distributed among creators based on actual watch time, incentivizing quality content.",
    },
    {
      icon: <PlugZap />,
      text: "Decentralized Learning Exchange (DLX)",
      description:
        "A peer-to-peer marketplace for learners and educators. Smart contracts ensure fair compensation, fostering a gig economy for knowledge transfer.",
    },
    {
      icon: <GlobeLock />,
      text: "AI Career Navigator & Interview Simulation",
      description:
        "Personalized career paths based on evolving Skill DNA and market trends. Includes AI-powered interview simulations for real-world practice.",
    },
  ];

  const checklistItems = [
    {
      title: "Subscription Model",
      description:
        "One flat subscription fee grants access to all content on the platform, making learning affordable.",
    },
    {
      title: "Watchtime-Based Tutor Payment",
      description:
        "Tutors are compensated based on the actual watch time of their courses, rewarding content quality and engagement.",
    },
    {
      title: "SkillToken Marketplace",
      description:
        "Verified skills are tokenized using blockchain, creating a marketplace for verified skills that employers can access.",
    },
    {
      title: "B2B Corporate Partnerships",
      description:
        "Companies can partner with SkillSync to upskill employees, validate skills via blockchain, and use AI to benchmark talent.",
    },
    {
      title: "Smart Contracts for Payments",
      description:
        "Ethereum smart contracts ensure transparent, automated transactions for payments and subscriptions.",
    },
  ];
  return (
    <>
      <div>

        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
          <div className='text-5xl text-center p-10 flex gap-[1rem] flex-col items-center'>
            <h1>Welcome to <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              SkillSync
            </span></h1>
            <Typewriter
              options={{
                strings: ['AI generated Roadmaps', 'Personlaized Tutor', 'Real Time Progress analysis'],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Decentralized Platform')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            />
            <div className="w-full text-2xl flex justify-center p-5">
              <div className="bg-[grey] text-white flex items-center justify-center font-bold hover:cursor-pointer w-[15rem] h-[4rem] p-2 rounded-lg" onClick={() => setOpenDialog(!OpenDialog)}>Daily Motivavation</div>
              <Dialog open={OpenDialog} onOpenChange={handleClose}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Daily Dose of Motivation :)</DialogTitle>
                    <DialogDescription className="p-4">
                      <Button onClick={() => submithandler()} disabled={loading}>
                        {loading ?
                          <>
                            <Loader2 className='animate-spin' />Just a sec..
                          </>
                          : "Daily Motivation"
                        }
                      </Button>
                      {
                        content == "" ? "" :
                          <div className="m-2">{content}</div>
                      }
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Discover{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                SkillSync
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="flex">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mt-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Revolutionize{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              your learning
            </span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
              {/* <img src={codeImg} alt="Coding" />*/}
              <img src="/code.jpg" alt="Coding" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                  <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
