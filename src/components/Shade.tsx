import { motion } from "framer-motion"

interface IProps {
    src: string
}

const Shade = ({ src }: IProps) => {
  return (
    <motion.img
        src={src}
        className="w-full h-full object-cover"
    />
  )
}

export default Shade