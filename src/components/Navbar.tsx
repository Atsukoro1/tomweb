const Navbar = () => {
  return (
    <div
        className='w-full text-slate-500 h-15 shadow-inner bg-white'
    >
        <div className="p-5 w-[900px] mr-auto ml-auto grid grid-cols-2">
            <div>
                <h1 className="text-[18px] font-serif tracking-widest font-normal">
                    Tomáš Dorničák
                </h1>
            </div>

            <ul className='flex w-fit ml-auto'>
                <li className="mr-6">
                    <a href='/'>Domů</a>
                </li>

                <li className="mr-6">
                    <a href='/prace'>Práce</a>
                </li>

                <li className="">
                    <a href='/kontakt'>Kontakt</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar