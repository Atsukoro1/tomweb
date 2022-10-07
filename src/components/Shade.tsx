import { motion } from "framer-motion"

interface IProps {
    src: string,
    position: number,
}

const Shade = ({ src, position }: IProps) => {
  return (
    <motion.img
        src={src}
        className={
          `
          w-full h-full object-cover
          `
        }
    />
  )
}

export default Shade