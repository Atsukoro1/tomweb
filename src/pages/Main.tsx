import Shade from "../components/Shade"
import { motion } from "framer-motion"
import ReactPlayer from "react-player"

const Main = () => {
  return (
    <div 
      style={{ backgroundImage: 'url("/assets/background.webp")', fontFamily: "Lora" }}
      className="bg-cover bg-center bg-no-repeat h-[93vh] w-full bg-fixed"
    >
      {
        [1].map((el, _) => {
          return (
            <Shade
              src={`/assets/shade${el}.png`}
              position={el}
            />
          )
        })
      }

      <motion.header className="relative z-10 w-[1000px] mr-auto ml-auto text-center mt-[-750px]">
        <motion.p 
          className="text-white tracking-[4px] text-[30px] mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h1 
          className="tracking-[14px] text-white text-[130px] mt-[-30px] mr-auto ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lorem
        </motion.h1>

        <div className="flex justify-center mt-[-25px]">
          {
            [0, 1, 2]
            .map((el: number, key: number) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: key === 2 ? 1 : 0.3 * el
                  }}
                  className="m-8 bg-white w-[120px] h-[120px] rounded-lg">
                </motion.div>
              )
            })
          }
        </div>

        <motion.div 
          className="w-fit mr-auto ml-auto mt-[140px] border-[15px] border-white"
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

      <motion.section className="text-[#857e71] mr-auto ml-auto w-[900px] text-center mt-20 mb-20">
        <motion.h1 className="text-6xl">Lorem Ipsum</motion.h1>
        <motion.div className="bg-[#857e71] inline-block w-[60px] h-1 mt-10">&nbsp;</motion.div>
        <motion.p className="mt-3 w-[700px] mr-auto ml-auto text-lg font-helvetica">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Ducimus deleniti dicta corrupti eligendi, minima, ipsum eos id assumenda illo
          laudantium perspiciatis molestias asperiores numquam modi, laborum corporis 
          earum nostrum repellendus? Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dignissimos dicta at accusantium iste nulla enim, reprehenderit perferendis 
          ex deleniti expedita ducimus voluptates natus quis, quos, non accusamus. Ut, autem
          reiciendis!
        </motion.p>

        <motion.h3 className="text-4xl mt-16">Lorem Ipsum</motion.h3>
        <motion.p className="mt-4 w-[700px] ml-auto mr-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus deleniti dicta corrupti eligendi, minima, ipsum eos id assumenda illo
          la udantium perspiciatis molestias asperiores numquam modi, laborum corporis
          earum nostrum repellendus? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos dicta at accusantium iste nulla enim, reprehenderit perferendis
          ex deleniti expedita ducimus voluptates natus quis, quos, non accusamus. Ut, autem
          reiciendis!
        </motion.p>
      </motion.section>

      <motion.section 
        style={{ backgroundImage: 'url("/assets/background.webp")', fontFamily: "Lora" }}
        className="bg-center bg-no-repeat h-[93vh] w-full bg-fixed bg-cover"
      >
        <span>&nbsp;</span>

        <motion.h1 className="text-center text-6xl mt-5 text-white">
          Recenze
        </motion.h1>

        <motion.div className="flex justify-center">
          {[
            {

            },
            {

            }, 
            {

            }
          ].map((el, key) => {
            return (
              <motion.div key={key} className="flex justify-center text-center p-2">
                <motion.div className="w-[300px] h-fit bg-white mr-10 ml-10 mt-10 mb-10">
                  <motion.div className="w-[300px] h-fit p-2 bg-white">
                    <motion.p className="text-2xl mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </motion.p>

                    <span className="bg-[#857e71] inline-block w-[60px] h-1 mt-5">&nbsp;</span>

                    <p>Neco tady</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ) 
          })}
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Main