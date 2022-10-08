import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div 
      className="w-fit ml-auto mr-auto text-center"
      style={{ fontFamily: "Lora" }}
    >
      <motion.h1 className="text-4xl text-[#857e71] mb-7 mt-20">Kontakt</motion.h1>

      <div className="grid grid-cols-3 grid-gap-2 w-[800px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#857e71] text-xl ">Telefon</p>
          <p>123 456 789</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[#857e71] text-xl">Email</p>
          <a href="mailto:tomas.dornicak@seznam.cz">
            tomas.dornicak@seznam.cz
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-[#857e71] text-xl">Adresa</p>
          <p>Lorem ipsum dolor sit amet</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact