import { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
};

export const Section = ({ id, children }: Props) => (
  <section
    id={id}
    className='h-screen flex flex-col items-center justify-center'
    data-scroll-section
  >
    {children}
  </section>
);
