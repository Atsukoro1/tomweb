import { motion, Variants } from "framer-motion";
import Reward from "../components/Reward";
import ReactPlayer from "react-player";
import ContactForm from "../components/ContactForm";
import Poem from "../components/Poem";

const Main = () => {
	const describeVariants: Variants = {
		offscreen: {
			translateY: -150,
			opacity: 0,
		},
		onscreen: {
			translateY: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				type: "spring",
				stiffness: 100,
				damping: 20,
			},
		},
	};

	return (
		<div
			style={{
				backgroundImage: 'url("/assets/background.jpg")',
				fontFamily: "Lora",
			}}
			className="bg-cover bg-center bg-no-repeat h-full w-full bg-fixed"
		>
			<br />
			<header className="relative z-20 bg-transparent w-[400px] md:w-[700px] lg:w-[1000px] mr-auto ml-auto text-center mt-[50px]">
				<motion.p
					className="text-gray-400 tracking-[4px] text-15px md:text-[17px] lg:text-[25px] mt-15"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					S vědomím jednotlivostí a s úctou k celku
				</motion.p>

				<motion.h1
					className="tracking-[14px] text-gray-500 text-[40px] md:text-[60px] lg:text-[90px] md:mt-[0px] lg:mt-[-30px] mr-auto ml-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					Hlasy Země
				</motion.h1>

				<div className="flex justify-center md:mt-0 lg:mt-[-25px]">
					{["Propojení", "Živost", "Přirozenost"].map(
						(el: String, key: number) => {
							return (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: key === 2 ? 1 : 0.3 * key,
									}}
								>
									<Reward text={el} />
								</motion.div>
							);
						},
					)}
				</div>
			</header>

			<motion.section
				className={`
          text-[#857e71] mr-auto ml-auto
          w-[300px] md:w-[500px] lg:w-[900px] text-center mt-[300px] mb-20
        `}
				initial="offscreen"
				whileInView="onscreen"
				variants={describeVariants}
				viewport={{ once: false, amount: 0.8 }}
			>
				<h1 className="text-4xl lg:text-5xl text-gray-600">
					<i>K nám lidem</i>
				</h1>
				<div className="inline-block w-[60px] mb-0 h-1">&nbsp;</div>
				<p className="font-medium text-gray-600 w-[300px] md:w-[500px] lg:w-[700px] mr-auto ml-auto md:text-md lg:text-lg font-helvetica">
					Vše co kolem nás nazýváme přírodou, nás vybízí vždy k zamyšlení.
					Vidíme v ní nejširší paletu barev, odstínů a tónů, které se vzájemně
					doplňují. Každá část se pojí s druhou a společně hrají krásnou píseň
					Harmonie. Vše je tak přirozeně a prostě viditelné a my máme tu čest
					být její součástí. Příroda je snad jediným našim opravdovým vzorem,
					odkud můžeme čerpat inspirace ke spolupráci, k vytváření lidských
					zákonů a ke správnému používání symbiózy práv a povinností – k
					rovnováze.
					<div className="mt-5 mb-5" />
					<i>Naučme se vyvíjet toto umění k dokonalosti</i>
				</p>
			</motion.section>

			<motion.div
				className="w-fit mb-20 mr-auto ml-auto z-10 mt-[140px] mb-[120px]"
				initial={{ opacity: 0, translateY: 100 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<ReactPlayer
					url='https://www.youtube.com/watch?v=3NycM9lYdRI'
					height={window.innerHeight / 2}
					width={window.innerWidth < 2000 ? window.innerWidth / 2 : 900}
					loop={true}
				/>
			</motion.div>

			<section
				style={{
					backgroundImage: 'url("/assets/background.jpg")',
					fontFamily: "Lora",
				}}
				className="bg-center bg-no-repeat w-full mt-[-200px] bg-fixed bg-cover mt-[50px]"
			>
				<span className="mt-[200px] w-full mb-[200px]">&nbsp;</span>

				<h1 className="text-center text-5xl mt-[200px] lg:mt-32 mb-[40px] lg:mb-0 text-[#857e71]">
					<i>Poetická tvorba</i>
				</h1>

				<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
					{[
						{
							text: `
                V nitru krás, prostě se skvoucí sad,
                živost plodí a kvete v obyčejích,
                tiše dává slabé spát
                co v zákonech harmonie nezní
                V místě malého ptáčka
                Tam malebný úděl kouska této země,
                v obrazech zahrad domovů,
                přísný v tichu, aby shnilé sémě
                nerušilo tento kraj,
                kraj svrchovaný laskavostí.
                Vlahý a skoupý na slovo je,
                prostor malého ptáčka,
                zahrádkou zní harmonie,
                když ptáček zpívá sloku svou,
                radostí si poskočil, s radostí
                On s vděčností…
                očekává člověka,
                v srdcích, kde svou ryzostí teď protéká
                tak krásné jméno Harmonie
              `,
							title: "Lorem Ipsum",
						},
						{
							text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
							title: "Lorem Ipsum",
						},
						{
							text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
							title: "Lorem Ipsum",
						},
					].map((el, key) => {
						return (
							<Poem
								key={key}
								title={el.title}
								text={el.text}
								variants={describeVariants}
							/>
						);
					})}
				</div>
			</section>

			<ContactForm />
		</div>
	);
};

export default Main;
