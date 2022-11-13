const Photogallery = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:w-[300px] md:w-[700px] lg:w-[1350px] ml-auto mr-auto">
        {[Array(16).fill(0).map((el, key) => {
            let klic = key + 1

            return (
              <div key={key} className="w-[300px] h-[300px]">
                  <img src={`/assets/photogallery/foto${klic}.jpg`} alt="" className="p-4 w-full h-full object-cover" />
              </div>
            )
        })]}
    </div>
  )
}

export default Photogallery