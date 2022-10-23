import { motion } from "framer-motion"

interface IProps {
    src: string,
    position: number,
}

const Shade = ({ src }: IProps) => {
  return (
    <motion.img
        src={src}
        animate={{ x: [-100, 0, -100] }}
        transition={{ duration: 2.5, delay: 0.3, repeat: Infinity }}
        className={
          `
          h-full w-[2400px] z-0 opacity-25
          `
        }
    />
  )
}

export default Shade