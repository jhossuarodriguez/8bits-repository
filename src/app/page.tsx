"use client";

import { useRef } from 'react';
import Image from 'next/image'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (

    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-10 ">
      <header className="text-4xl font-bold uppercase ">En desarrollo...</header>
      <div className='flex justify-center items-center relative w-[300px] h-[300px] md:w-[512px] md:h-[380px] mx-auto'>
        <Image
          src="/sprites/back_sprites.webp"
          alt="Jhossua's Back Sprites"
          width={100}
          height={100}
          className='w-24 md:w-32 animate-pulse absolute left-0'
        />

        <Image
          src="/avatar.png"
          alt="Jhossua's Avatar"
          width={150}
          height={150}
          className='w-36 md:w-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />

        <Image
          src="/sprites/front_sprites.webp"
          alt="Jhossua's Front Sprites"
          width={100}
          height={100}
          className='w-24 md:w-32 animate-pulse absolute right-0'
        />
      </div>
      <div className='text-center'>
        <button className='cursor-pointer text-5xl hover:text-red-500 transition duration-200' onClick={() => audioRef.current?.play()}>Start Game</button>
      </div>
      <span className="flex justify-center items-end">
        <a href="https://portfolio-jhossua.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline">Version anterior</a>
      </span>
      <audio ref={audioRef} autoPlay loop className="hidden">
        <source src="/theme.ogg" type="audio/ogg" />
      </audio>
    </div >
  );
}
