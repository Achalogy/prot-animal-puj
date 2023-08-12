import { Canvas } from "canvas"
import { useEffect } from "react"

export default () => {

  useEffect(() => {
    const canvas = new Canvas(2448, 3435)
  }, [])

  return <div className="flex w-screen h-screen bg-red-500">
    {/* <canvas width={2448} height={3435} className="bg-white h-2/3 aspect-[1/1.4031] m-auto">

    </canvas> */}
  </div>
}