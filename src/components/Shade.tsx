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
        transition={{ duration: 4, delay: 0.3, repeat: Infinity }}
        className={
          `
          h-full w-[2400px] z-0 relative
          `
        }
    />
  )
}

export default Shade