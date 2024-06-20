"use client"
import Image from "next/image";
import React from "react";
import {useState, useEffect} from 'react';


export default function Home() {
    const [Yes,setYes] = useState(false)
  
    return (
    <main className="bg-pink-100 flex relative h-screen flex-col items-center justify-center p-32">
      <h1 className="w-full text-center text-pink-500 font-bold text-3xl">
        {Yes ? "Maaciii ehehe, see u on the 22nd!" : "Will you have a date with me?"}
      </h1>
      <video
          autoPlay
          muted
          loop
          className={`m-10  ${Yes ? "hidden opacity-0" : "opacity-100"}`}
          width = {280}
        >
          <source src="/shy0.webm" type="video/webm"/>
      </video>
      <video
          autoPlay
          muted
          loop
          className={`m-10 ${Yes ? "opacity-100" : "hidden opacity-0"}`}
          width = {280}
        >
          <source src="/shy1.webm" type="video/webm"/>
      </video>

      <div>
        <button onClick={() => setYes(true)} className="bg-pink-500 rounded-3xl px-12 py-1 text-white m-10">
          Yes
        </button>
        <button className="bg-pink-100 rounded-3xl px-12 py-1 text-pink-500 outline m-10">
          No
        </button>
      </div>
        
    </main>
    );
  }