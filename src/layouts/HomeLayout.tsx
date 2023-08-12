import Link from "next/link"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import FullImage from "src/components/FullImage"
import IconHuesito from "src/icons/IconHuesito"
import Logo from '../../assets/icon.jpg'
import { useRouter } from "next/router"
import { IoReorderThree } from 'react-icons/io5'
import { MdOutlineReportProblem } from 'react-icons/md'
import { useState } from "react"

export default ({ children }: {
  children: any
}) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const toggleMobileMenu = () => setMobileMenu(prev => !prev)

  const { pathname } = useRouter()

  const MenusComps = () => <>
    <Link href={"/"} className={`no-underline font-semibold ${pathname == "/" ? "text-[#38A251]" : ""}`}>Inicio</Link>
    <Link href={"/nuestra-historia"} className={`no-underline font-semibold ${pathname == "/nuestra-historia" ? "text-[#38A251]" : ""}`}>Nuestra Historia</Link>
    <Link href={"gatos-del-campus"} className={`no-underline font-semibold ${pathname == "/gatos-del-campus" ? "text-[#38A251]" : ""}`}>Gatos del Campus</Link>
    <Link href={"/adopciones"} className={`no-underline font-semibold ${pathname == "/adopciones" ? "text-[#38A251]" : ""}`}>Adopciones</Link>
    {/* <Link href={"/apadrinamiento"} className={`no-underline font-semibold ${pathname == "/apadrinamiento" ? "text-[#38A251]" : ""}`}>Apadrinamiento</Link> */}
    <Link href={"/fundaciones"} className={`no-underline font-semibold ${pathname == "/fundaciones" ? "text-[#38A251]" : ""}`}>Directorio Fundaciones</Link>
    <Link href={"/contacto"} className={`no-underline font-semibold ${pathname == "/contacto" ? "text-[#38A251]" : ""}`}>Contacto</Link>
    <Link href={"/reportar"} className={`flex gap-2 no-underline font-semibold items-center ${pathname == "/reportar" ? "text-[#38A251]" : ""}`}>
      <MdOutlineReportProblem size={20} />
      Reportar</Link>
  </>

  return <div className="relative flex flex-col min-h-screen">
    <div className="flex flex-col h-[10vh] xl:h-[15vh] w-full p-4 gap-2 z-10 bg-[#FFD97E]">
      <div className="flex-1 flex justify-between xl:justify-center items-center gap-2 xl:gap-4">
        <div className="xl:flex-1">
          <div className="flex xl:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <IoReorderThree size={35} />
          </div>
        </div>
        <Link href={"/"} className="flex flex-1 gap-2 items-center justify-center no-underline">
          <div className="flex relative h-8 xl:h-12 aspect-square rounded-full bg-white overflow-hidden">
            <FullImage src={Logo} cover />
          </div>
          <h1 className="hidden xs:flex xl:text-xl font-semibold tracking-wide text-slate-800 no-underline">Protección Animal Javeriana</h1>
        </Link>
        <div className="flex xl:flex-1">
          <div className="flex xl:pl-[25%]">
            <a href="https://www.instagram.com/proteccionanimaljaveriana/" target="_blank">
              <AiFillInstagram size={25} className="opacity-60 hover:opacity-100 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden xl:flex justify-around xl:w-2/3 items-center text-gray-600 mx-auto xl:text-lg">
        <MenusComps />
      </div>
    </div>


    <div className="relative flex flex-col flex-1">
      {/* <div className="text-xs xl:text-base bg-[#5261b1] p-2 px-4 w-full z-50">
        <p className="font-semibold text-white text-center">¡Tenemos Inscripciones abiertas! <Link className="font-semibold" href={"https://forms.office.com/r/wt55a2QC1U"}>Regístrate en este formulario.</Link></p>
      </div> */}
      {children}
    </div>

    <footer className="flex flex-col p-8 items-center justify-center h-[30vh] bg-[#FFD97E] gap-3">
      <h4 className="flex gap-2 items-center font-semibold text-lg xl:text-3xl truncate"><span className="flex gap-2 items-center text-indigo-600 font-semibold">
        <IconHuesito className="hidden xl:flex" svgProps={{
          stroke: "rgb(79 70 229)"
        }} size={25} />
        <IconHuesito className="xl:hidden flex" svgProps={{
          stroke: "rgb(79 70 229)"
        }} size={15} />
        {new Date().getFullYear()}</span> Protección Animal Javeriana</h4>
      <p className="opacity-25 text-center">Creado por acha {"<3"} - PÁGINA NO OFICIAL</p>
      <div className="flex gap-4 opacity-50">
        <a href="https://www.instagram.com/proteccionanimaljaveriana" target="_blank">
          <AiFillInstagram size={35} />
        </a>
        <a href="https://facebook.com/ProteccionAnimalJaveriana/" target="_blank">
          <AiFillFacebook size={35} />
        </a>
        <a href="https://twitter.com/JaverianaAnimal" target="_blank">
          <AiFillTwitterCircle size={35} />
        </a>
      </div>
    </footer>

    { /* Mobile menu */}

    {mobileMenu && <div className="flex flex-col fixed h-screen bg-[#5261b1] w-[65%] drop-shadow-xl z-50 p-6 py-8 text-white gap-8">
      <div className="flex items-center gap-2 xl:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <IoReorderThree size={35} />
        <p className="font-semibold text-lg">Menú</p>
      </div>
      <div className="flex flex-col gap-2">
        <MenusComps />
      </div>
    </div>}
  </div>
}