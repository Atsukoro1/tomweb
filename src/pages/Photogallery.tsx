import { useState } from "react"

const Photogallery = () => {
    const [imageOpen, setImageOpen] = useState<boolean>(false);
    const [image, setImage] = useState<number>(0);

    return (
      <>
        <div className={`${imageOpen ? "fixed" : "hidden"} w-full fixed top-0 h-full`}>
            <img 
                className="w-[500px] fixed z-10 h-[300px] object-cover"
                src={`/assets/photogallery/foto${image}.jpg`}
                alt="Foto" 
            />

            <div className="bg-black w-full h-full opacity-50"/>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:w-[300px] md:w-[700px] lg:w-[1350px] ml-auto mr-auto">
            {[Array(16).fill(0).map((el, key) => {
                let klic = key + 1
                return (
                  <div 
                      key={key} 
                      className="w-[300px] h-[300px]"
                      onClick={() => {
                          setImageOpen(true);
                          setImage(klic);
                      }}
                  >
                      <img 
                          src={`/assets/photogallery/foto${klic}.jpg`} 
                          alt="" 
                          className="p-4 w-full h-full object-cover hover:cursor-pointer hover:opacity-50" 
                      />
                  </div>
                )
            })]}
        </div>
      </>
    )
}

export default Photogallery