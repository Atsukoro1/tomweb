import { motion, Variants } from "framer-motion"
import Reward from "../components/Reward"
import Shade from "../components/Shade"
import ReactPlayer from "react-player"

const Main = () => {
  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const describeVariants: Variants = {
    offscreen: {
      translateY: -150, 
      opacity: 0,
    },
    onscreen: {
      translateY: 0,
      opacity: 1,
      transition : {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
  };

  return (
    <div 
      style={{ backgroundImage: 'url("/assets/background.jpg")', fontFamily: "Lora" }}
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

      <header className="relative z-20 w-[400px] md:w-[700px] lg:w-[1000px] mr-auto ml-auto text-center mt-[-750px]">
        <motion.p 
          className="text-black tracking-[4px] text-15px md:text-[20px] lg:text-[30px] mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h1 
          className="tracking-[14px] text-black text-[50px] md:text-[70px] lg:text-[130px] md:mt-[0px] lg:mt-[-30px] mr-auto ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lorem
        </motion.h1>

        <div className="flex justify-center md:mt-0 lg:mt-[-25px]">
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
                >
                    <Reward/>
                </motion.div>
              )
            })
          }
        </div>
      </header>

      <motion.section 
        className={`
          text-[#857e71] mr-auto ml-auto
          w-[300px] md:w-[500px] lg:w-[900px] text-center mt-[500px] mb-20
        `}
        initial="offscreen"
        whileInView="onscreen"
        variants={describeVariants}
        viewport={{ once: false, amount: 0.8 }}
      >
        <h1 className="text-4xl lg:text-6xl">Lorem Ipsum</h1>
        <div className="bg-[#857e71] inline-block w-[60px] h-1 mt-10">&nbsp;</div>
        <p className="mt-3 w-[300px] md:w-[500px] lg:w-[700px] mr-auto ml-auto md:text-md lg:text-lg font-helvetica">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Ducimus deleniti dicta corrupti eligendi, minima, ipsum eos id assumenda illo
          laudantium perspiciatis molestias asperiores numquam modi, laborum corporis 
          earum nostrum repellendus? Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Dignissimos dicta at accusantium iste nulla enim, reprehenderit perferendis 
          ex deleniti expedita ducimus voluptates natus quis, quos, non accusamus. Ut, autem
          reiciendis!
        </p>

        <h3 className="text-3xl lg:text-4xl mt-16">Lorem Ipsum</h3>
        <p className="mt-4 lg:w-[700px] w-[300px] md:w-[500px] md:text-md lg:text-lg ml-auto mr-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus deleniti dicta corrupti eligendi, minima, ipsum eos id assumenda illo
          la udantium perspiciatis molestias asperiores numquam modi, laborum corporis
          earum nostrum repellendus? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos dicta at accusantium iste nulla enim, reprehenderit perferendis
          ex deleniti expedita ducimus voluptates natus quis, quos, non accusamus. Ut, autem
          reiciendis!
        </p>
      </motion.section>

      <motion.div 
          className="w-fit mb-20 mr-auto ml-auto mt-[140px] border-[5px] lg:border-[15px] border-white"
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            height={window.innerHeight / 2}
            width={window.innerWidth < 2000 ? window.innerWidth / 1.75 : 900}
            loop={true}
          />
        </motion.div>

      <section 
        style={{ backgroundImage: 'url("/assets/background.jpg")', fontFamily: "Lora" }}
        className="bg-center bg-no-repeat w-full bg-fixed bg-cover"
      >
        <span>&nbsp;</span>

        <h1 className="text-center text-6xl mt-20 lg:mt-32 mb-[40px] lg:mb-0 text-[#857e71]">
          Recenze
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {[
            {
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
              "title": "Lorem Ipsum",
            },
            {
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
              "title": "Lorem Ipsum",
            }, 
            {
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
              "title": "Lorem Ipsum",
            }
          ].map((el, key) => {
            return (
              <motion.div 
                key={key} 
                className="flex justify-center text-center mb-32 p-2"
                variants={describeVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="w-[300px] h-fit bg-white mr-10 ml-10 lg:mt-10 lg:mb-10">
                  <div className="w-[300px] h-fit p-5 bg-white">
                    <p className="text-2xl mt-2 text-[#857e71]">
                      { el.text }
                    </p>

                    <span className="bg-[#857e71] inline-block w-[60px] h-1 mt-5">&nbsp;</span>

                    <p>
                      { el.title }
                    </p>
                  </div>
                </div>
              </motion.div>
            ) 
          })}
        </div>
      </section>

      <section className="bg-sky-900">
        <div className="grid grid-cols-2 w-[1100px] ml-auto mr-auto">
          <span>&nbsp;</span>

          <div className="float-right text-right">
            <button onClick={backToTop} className="bg-sky-700 text-sky-300 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        <h1 className="text-white text-center text-4xl mt-10">Lorem Ipsum</h1>

        <div className="mt-3 mb-20 w-[500px] mr-auto ml-auto text-center outline-none">
          <div className="inline">
            <input 
              type="text"
              className="bg-sky-800 border-white outline-none border-solid border-3 w-[300px] text-white p-2 mt-5"
              placeholder="Lorem Ipsum"
            />

            <button className="ml-3 bg-white text-sky-800 h-[40px] w-[90px]">Send</button>
          </div>
        </div>

        <span className="h-30 w-full">&nbsp;</span>
      </section>
    </div>
  )
}

export default Main