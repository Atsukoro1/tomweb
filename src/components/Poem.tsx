import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface PropsI {
    title: string;
    text: string;
    variants: Variants;
}

export default ({ text, title, variants }: PropsI) => {
    const [full, setFull] = useState<boolean>(false);

    return (
        <motion.div
            className="flex justify-center text-center mb-32 p-2"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
        >
            <div className="w-[300px] h-fit mr-10 ml-10 lg:mt-10 lg:mb-10">
                <div className="w-[300px] h-fit p-5">
                    <p className="text-xl mt-2 text-[#857e71]">
                        {text.length < 100 && <i>{text}</i>}
                        {text.length > 100 &&
                            <>
                                <i>{text.slice(0, full ? text.length : 100)}</i>

                                {!full && <>
                                    <br />

                                    <button
                                        className="bg-[#857e71] text-white mt-3 pr-4 pl-4 p-2 rounded-md"
                                        onClick={() => setFull(true)}
                                    >
                                        Vice
                                    </button>
                                </>}
                            </>
                        }
                    </p>

                    <span className="inline-block w-[60px] h-1 mt-5">&nbsp;</span>

                    <p>{title}</p>
                </div>
            </div>
        </motion.div>
    );
};
