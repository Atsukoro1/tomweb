import { motion } from "framer-motion"

const Main = () => {
  return (
    <div 
      style={{ backgroundImage: 'url("/assets/background.webp")' }}
      className="bg-cover bg-center bg-no-repeat h-[93vh] w-full"
    >
      <div>.</div>

      <motion.header className="w-[500px] mr-auto ml-auto text-center">
        <motion.p 
          className="font-serif text-white text-2xl mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h1 
          className="font-serif text-white text-[130px] mr-auto ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lorem
        </motion.h1>

        <div className="flex justify-center mt-[-25px]">
          {
            [0, 1, 2].map((el: number, _: number) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 * el }}
                  className="m-8 bg-white w-[90px] h-[90px] rounded-lg">
                </motion.div>
              )
            })
          }
        </div>
      </motion.header>
    </div>
  )
}

export default Main