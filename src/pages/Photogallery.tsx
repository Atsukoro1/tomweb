import { useState } from "react"

const Photogallery = () => {
    const [imageOpen, setImageOpen] = useState<boolean>(false);
    const [image, setImage] = useState<number>(0);

    return (
      <>
        <div className={`${imageOpen ? "fixed" : "hidden"} w-full fixed top-0 h-full`}>
            <div className="bg-white h-fit m-auto mx-auto inset-x-0 w-[700px] rounded-lg fixed top-40 z-10">
                <img 
                    src={`/assets/photogallery/foto${image}.jpg`}
                    alt="focused-image" 
                    className="object-cover"
                />
            </div>

            <div 
                className="bg-black w-full h-full opacity-50"
                onClick={() => setImageOpen(false)}
            />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-[300px] md:w-[700px] lg:w-[1000px] ml-auto mr-auto">
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
                          className="p-4 w-full h-full object-cover hover:cursor-pointer hover:opacity-50 rounded-lg" 
                      />
                  </div>
                )
            })]}
        </div>
      </>
    )
}

export default Photogallery