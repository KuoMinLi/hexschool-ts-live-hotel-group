import React from "react"
import Image from "next/image"
import Banner from "../../assets/image/desktop/banner.png"

const langing = () => (
  <div className="min-h-screen relative">
    <Image
      src={Banner}
      alt="Banner Image"
      layout="fill"
      objectFit="cover"
      className="filter brightness-[.6]"
    />
    <div className="absolute inset-0 pt-[120px] flex items-center justify-between mx-20">
      <div className="w-[48%] text-primary pb-10 border-b-2 border-primary">
        <p className="h2">享樂酒店</p>
        <p className="h5">Enjoyment Luxury Hotel</p>
      </div>
      <div className="w-[48%] border-[1px] rounded-[80px] relative h-[500px]">
        <div className="absolute mx-[96px] mr-[200px] text-white z-10">
          <h2 className="h1 text-[100px]">高雄</h2>
          <h2 className="h1 text-[100px]">豪華住宿之選</h2>
        </div>
      </div>
      
    </div>
  </div>
)

export default langing
