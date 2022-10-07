import Shade from "../components/Shade"
import { motion } from "framer-motion"
import ReactPlayer from "react-player"

const Main = () => {
  return (
    <div 
      style={{ backgroundImage: 'url("/assets/background.webp")' }}
      className="bg-cover bg-center bg-no-repeat h-[93vh] w-full"
    >
              <Shade src="/assets/shade1.png"/>
              <Shade src="/assets/shade1.png"/>

      <motion.header className="w-[1000px] mr-auto ml-auto text-center">
        <motion.p 
          className="font-serif text-white text-[40px] mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h1 
          className="font-serif text-white text-[160px] mt-[-30px] mr-auto ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lorem
        </motion.h1>

        <div className="flex justify-center mt-[-25px]">
          {
            [0, 1, 2]
            .map((el: number, _: number) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 * el }}
                  className="m-8 bg-white w-[120px] h-[120px] rounded-lg">
                </motion.div>
              )
            })
          }
        </div>

        <motion.div 
          className="w-fit mr-auto ml-auto mt-[140px]"
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            height={500}
            width={900}
            loop={true}
          />
        </motion.div>
      </motion.header>
    </div>
  )
}

export default Main