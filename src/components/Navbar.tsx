const Navbar = () => {
  return (
    <div className='w-full relative z-30 text-slate-500 h-15 shadow-md bg-white'>
        <div className="p-5 w-full">
            <ul className='flex flex-row w-fit ml-auto mr-auto'>
                <li className="mr-6 text-lg">
                    <a href='/'>Domů</a>
                </li>

                <li className="mr-6 text-lg">
                    <a href='/zahrady'>Zahrady</a>
                </li>

                <li className="mr-6 text-lg">
                    <a href='/orezstromu'>Ořez stromů</a>
                </li>

                <li className="mr-6 text-lg">
                    <a href='/prace'>Tvorba</a>
                </li>

                <li className="mr-6 text-lg">
                    <a href='/fotogalerie'>Fotogalerie</a>
                </li>

                <li className="mr-6 text-lg">
                    <a href='/kontakt'>Kontakt</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar