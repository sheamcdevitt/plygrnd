import { useEffect, useState } from 'react';
import { charToString, chromaSegmented, chromaSolid } from '../fontPaths';

const getRandomChar = () => {
  const chars = Object.keys(chromaSegmented);
  return chars[Math.floor(Math.random() * chars.length)];
};

const WIDTH = 35;
const HEIGHT = WIDTH * 2;

type CharProps = {
  fontType: 'segmented' | 'solid';
  fill?: string;
  stroke?: string;
  letterWidth?: number;
};

type LetterProps = {
  char: string;
} & CharProps;

export const Letter = (props: LetterProps) => {
  const font = props.fontType === 'solid' ? chromaSolid : chromaSegmented;
  const height = (props.letterWidth ?? 0) * 2 || HEIGHT;
  return (
    <svg
      width={props.letterWidth || WIDTH}
      height={height}
      viewBox='0 0 1024 900'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d={font[charToString(props.char)] || ''}
        stroke={props.stroke || '#fc3112'}
        strokeWidth='2'
        fill={props.fill || '#fc3112'}
        transform='scale(1, -1) translate(0, -1024)'
      />
    </svg>
  );
};

type AnimatedLetterProps = {
  targetChar: string;
  animationDuration: number;
} & CharProps;

export const AnimatedLetter = (props: AnimatedLetterProps) => {
  const [currentChar, setCurrentChar] = useState(getRandomChar());

  useEffect(() => {
    const startTime = Date.now();

    const animationInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed < props.animationDuration) {
        setCurrentChar(getRandomChar());
      } else {
        setCurrentChar(props.targetChar);
        clearInterval(animationInterval);
      }
    }, 50);

    return () => clearInterval(animationInterval);
  }, [props.targetChar, props.animationDuration]);

  return <Letter char={currentChar} {...props} />;
};
type WordProps = {
  word: string;
  animationDuration: number;
} & CharProps;

export const Word = (props: WordProps) => {
  const { word, animationDuration, ...rest } = props;
  const [duration, setDuration] = useState(animationDuration);
  return (
    <div
      className='flex flex-row items-center justify-center py-0 cursor-pointer'
      onMouseEnter={() => setDuration(Infinity)}
      onMouseLeave={() => setDuration(0)}
    >
      {word.split('').map((char, index) => (
        <AnimatedLetter
          key={index}
          targetChar={char}
          animationDuration={duration}
          {...rest}
        />
      ))}
    </div>
  );
};

type SequentialLetterProps = {
  targetChar: string;
  index: number;
  currentStep: number;
} & CharProps;

export const SequentialLetter = (props: SequentialLetterProps) => {
  const { targetChar, index, currentStep, ...rest } = props;
  if (currentStep < index) {
    return <Letter char=' ' {...rest} />;
  } else if (currentStep === index) {
    return <Letter char='-' {...rest} />;
  } else {
    return (
      <AnimatedLetter
        targetChar={targetChar}
        animationDuration={1000}
        {...rest}
      />
    );
  }
};

type SequentialWordProps = {
  word: string;
} & CharProps;

export const SequentialWord = (props: SequentialWordProps) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const { word, ...rest } = props;

  useEffect(() => {
    const totalSteps = word.length * 2;
    const stepDuration = 500 / totalSteps;

    const intervalId = setInterval(() => {
      setCurrentStep((step) => {
        if (step < totalSteps - 1) {
          return step + 1;
        }
        clearInterval(intervalId);
        return step;
      });
    }, stepDuration);

    return () => clearInterval(intervalId);
  }, [word]);

  return (
    <div className='flex flex-row items-center justify-center py-1'>
      {word.split('').map((char, index) => (
        <SequentialLetter
          key={index}
          targetChar={char}
          index={index}
          currentStep={currentStep}
          {...rest}
        />
      ))}
    </div>
  );
};
