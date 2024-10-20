import { HTMLAttributes } from "react"

interface ImgProps extends HTMLAttributes<HTMLImageElement>{
    props: string[]
}

function Photogrid({props, ...rests}: ImgProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {props.map((imagePath: string, index: string) => (
        <div key={index}>
          <img src={imagePath} alt="user-upload" {...rests}/>
        </div>
      ))}
    </div>

  )
}

export default Photogrid
