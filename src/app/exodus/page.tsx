'use client';
import './style.css';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current ?? undefined,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <main
      ref={scrollRef}
      className='bg-gradient-to-b from-yellow-100 to-orange-900'
    >
      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <h1
          className='text-6xl md:text-8xl font-bold text-orange-800'
          data-scroll
          data-scroll-speed='2'
        >
          EXODUS
        </h1>
      </section>

      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <div
          className='w-64 h-64 bg-pink-500 rounded-full'
          data-scroll
          data-scroll-speed='1'
        ></div>
      </section>

      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <h2
          className='text-4xl md:text-6xl font-bold text-orange-100'
          data-scroll
          data-scroll-speed='3'
        >
          Journey Through the Desert
        </h2>
      </section>

      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <div
          className='w-96 h-64 bg-orange-500 rounded-lg'
          data-scroll
          data-scroll-speed='2'
        ></div>
      </section>

      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <h2
          className='text-4xl md:text-6xl font-bold text-purple-200'
          data-scroll
          data-scroll-speed='1'
        >
          Discover the Oasis
        </h2>
      </section>

      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <div
          className='w-80 h-80 bg-blue-700 rounded-full'
          data-scroll
          data-scroll-speed='3'
        ></div>
      </section>

      <section
        className='h-screen flex items-center justify-center'
        data-scroll-section
      >
        <h2
          className='text-4xl md:text-6xl font-bold text-blue-200'
          data-scroll
          data-scroll-speed='2'
        >
          Embrace the Night
        </h2>
      </section>
    </main>
  );
}
