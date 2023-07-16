import Link from "next/link"
import { AiFillInstagram } from "react-icons/ai"
import FullImage from "src/components/FullImage"
import IconHuesito from "src/iconts/IconHuesito"
import Logo from '../../assets/icon.jpg'

export default ({ children }: {
  children: any
}) => {
  return <div className="relative flex flex-col">
    <div className="flex flex-col h-[10vh] xl:h-[15vh] w-full p-4 gap-2 z-10 bg-[#FFD97E]">
      <div className="flex-1 flex justify-between xl:justify-center items-center gap-2 xl:gap-4">
        <div className="xl:flex-1" />
        <div className="flex gap-2 items-center justify-center">
          <div className="relative h-8 xl:h-12 aspect-square rounded-full bg-white overflow-hidden">
            <FullImage src={Logo} cover />
          </div>
          <h1 className="text-lg xl:text-xl font-semibold tracking-wide text-slate-800">Protección Animal Javeriana</h1>
        </div>
        <div className="flex xl:flex-1">
          <div className="flex xl:pl-[25%]">
            <a href="https://www.instagram.com/proteccionanimaljaveriana/" target="_blank">
              <AiFillInstagram size={25} className="opacity-60 hover:opacity-100 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden xl:flex justify-around xl:w-2/3 items-center text-gray-600 mx-auto xl:text-lg">
        <Link href={"/"} className="no-underline font-semibold text-[#38A251]">Inicio</Link>
        <Link href={""} className="no-underline font-semibold">Nuestra Historia</Link>
        <Link href={""} className="no-underline font-semibold">Gatos del Campus</Link>
        <Link href={""} className="no-underline font-semibold">Adopciones</Link>
        <Link href={""} className="no-underline font-semibold">Apadrinamiento</Link>
        <Link href={""} className="no-underline font-semibold">Directorio Fundaciones</Link>
        <Link href={""} className="no-underline font-semibold">Contacto</Link>
      </div>
    </div>

    { children }

    <footer className="flex flex-col p-8 items-center justify-center h-[30vh] bg-[#FFD97E] gap-2">
        <h4 className="flex gap-2 items-center font-semibold text-lg xl:text-3xl truncate"><span className="flex gap-2 items-center text-indigo-600 font-semibold">
          <IconHuesito className="hidden xl:flex" svgProps={{
            stroke: "rgb(79 70 229)"
          }} size={25} />
          <IconHuesito className="xl:hidden flex" svgProps={{
            stroke: "rgb(79 70 229)"
          }} size={15} />
          {new Date().getFullYear()}</span> Protección Animal Javeriana</h4>
        <p className="opacity-25 text-center">Creado por acha {"<3"} - PÁGINA NO OFICIAL</p>
      </footer>
  </div>
}