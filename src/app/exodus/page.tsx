'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll, { ScrollToTarget } from 'locomotive-scroll';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { ColoredShape } from './ColoredShape';

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
    });

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          scroll.scrollTo(target as ScrollToTarget);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (scroll) scroll.destroy();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main
      ref={scrollRef}
      className='bg-gradient-to-b from-yellow-100 to-orange-900'
    >
      <Section id='home'>
        <motion.h1
          className='text-6xl md:text-8xl font-[500] text-orange-800'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EXODUS
        </motion.h1>
      </Section>

      <Section id='journey'>
        <ColoredShape
          color='bg-pink-500'
          shape='rounded-full'
          size='w-64 h-64'
        />
        <motion.h2
          className='text-4xl md:text-6xl font-[500] text-orange-100 mt-8'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Journey Through the Desert
        </motion.h2>
      </Section>

      <Section id='oasis'>
        <ColoredShape
          color='bg-orange-500'
          shape='rounded-lg'
          size='w-96 h-64'
        />
        <motion.h2
          className='text-4xl md:text-6xl font-[700] text-purple-200 mt-8'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the Oasis
        </motion.h2>
      </Section>

      <Section id='night'>
        <ColoredShape
          color='bg-blue-700'
          shape='rounded-full'
          size='w-80 h-80'
        />
        <motion.h2
          className='text-4xl md:text-6xl font-[700] text-blue-200 mt-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Embrace the Night
        </motion.h2>
      </Section>

      <nav className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2'>
        <ul className='flex space-x-4'>
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className='text-orange-800 hover:text-orange-600'
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('journey')}
              className='text-orange-800 hover:text-orange-600'
            >
              Journey
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('oasis')}
              className='text-orange-800 hover:text-orange-600'
            >
              Oasis
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('night')}
              className='text-orange-800 hover:text-orange-600'
            >
              Night
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}
