'use client';

import React, { useEffect, useState } from 'react';
import { chromaSegmented, chromaSolid } from './fontPaths';
import { SequentialWord, Word } from './components/Words';

export default function BicepPage() {
  return (
    <div
      className='min-h-screen w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(rola-bg.jpg)` }}
    >
      <div className='flex p-4 bg-black justify-between px-40'>
        <div className='flex flex-row justify-start gap-8'>
          <Word
            word='BICEP'
            animationDuration={1000}
            fontType='solid'
            letterWidth={30}
            stroke='white'
            fill='white'
          />
        </div>
        <div className='flex flex-row justify-end gap-8'>
          <Word
            word='STORE'
            animationDuration={1000}
            fontType='solid'
            letterWidth={30}
            stroke='white'
            fill='white'
          />
          <Word
            word='DISCORD'
            animationDuration={1000}
            fontType='solid'
            letterWidth={30}
            stroke='white'
            fill='white'
          />
          <Word
            word='TOUR'
            animationDuration={1000}
            fontType='solid'
            letterWidth={30}
            stroke='white'
            fill='white'
          />
        </div>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-black  p-8 rounded-lg '>
          <SequentialWord word='CHROMA 004 - ROLA' fontType='segmented' />
          <SequentialWord word='LISTEN NOW' fontType='segmented' />
        </div>
      </div>
    </div>
  );
}
