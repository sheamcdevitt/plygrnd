import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({ id, children, className }: Props) => (
  <section
    id={id}
    className={clsx(
      'h-screen flex flex-col items-center justify-center',
      className
    )}
    data-scroll-section
  >
    {children}
  </section>
);
