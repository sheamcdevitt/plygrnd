import { motion } from 'framer-motion';

type Props = {
  color: string;
  shape: string;
  size: string;
};

export const ColoredShape = ({ color, shape, size }: Props) => (
  <motion.div
    className={`${color} ${shape} ${size}`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, type: 'spring' }}
    data-scroll
    data-scroll-speed='2'
  />
);
