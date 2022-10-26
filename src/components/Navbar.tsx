const Navbar = () => {
  return (
    <div className='w-full relative z-30 text-slate-500 h-15 shadow-md bg-white'>
        <div className="p-5 w-full">
            <ul className='flex flex-row w-fit ml-auto mr-auto'>
                <li className="mr-6">
                    <a href='/'>Domů</a>
                </li>

                <li className="mr-6">
                    <a href='/kontakt'>Kontakt</a>
                </li>

                <li className="mr-6">
                    <a href='/tvorba'>Tvorba</a>
                </li>

                <li className="mr-6">
                    <a href='/kontakt'>Lorem</a>
                </li>

                <li className="mr-6">
                    <a href='/kontakt'>Lorem</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar