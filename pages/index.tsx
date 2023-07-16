import FullImage from "src/components/FullImage"
import Logo from '../assets/icon.jpg'
import IconHuellita from "src/iconts/IconHuellita"
import Perro1 from 'assets/perro1.png'
import { StaticImageData } from "next/image"
import GatosDelCampus from '../assets/gatos-del-campus.png'
import ComiteActividades from '../assets/actividades.webp'
import { AiFillInstagram } from 'react-icons/ai'
import IconHuesito from "src/iconts/IconHuesito"

export default () => {

  const ComiteComponent = ({ img, title, text }: {
    img: string | StaticImageData, title: string, text: string
  }) => {
    return <div className="flex flex-col flex-1 gap-4">
      <div className="relative w-1/2 aspect-square bg-indigo-300 rounded-full mx-auto overflow-hidden">
        <FullImage src={img} cover />
      </div>
      <div className="flex flex-col gap-2 px-8">
        <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  }

  return (
    <div className="relative flex flex-col">
      <div>
        <div className="flex flex-col h-[10vh] xl:h-[15vh] w-full absolute p-4 gap-2 z-10">
          <div className="flex-1 flex justify-between xl:justify-center items-center gap-2 xl:gap-4">
            <div className="xl:flex-1" />
            <div className="relative h-8 xl:h-12 aspect-square rounded-full bg-white overflow-hidden">
              <FullImage src={Logo} cover />
            </div>
            <h1 className="text-lg xl:text-xl font-semibold tracking-wide text-slate-800">Protección Animal Javeriana</h1>
            <div className="flex xl:flex-1">
              <div className="flex xl:pl-[25%]">
                <a href="https://www.instagram.com/proteccionanimaljaveriana/" target="_blank">
                  <AiFillInstagram size={25} className="opacity-60 hover:opacity-100 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden xl:flex justify-around xl:w-2/3 items-center text-gray-700 mx-auto">
            <p className="font-semibold text-[#38A251]">Inicio</p>
            <p className="font-semibold">Nuestra Historia</p>
            <p className="font-semibold">Gatos del Campus</p>
            <p className="font-semibold">Adopciones</p>
            <p className="font-semibold">Apadrinamiento</p>
            <p className="font-semibold">Directorio Fundaciones</p>
            <p className="font-semibold">Contacto</p>
          </div>
        </div>
        <div className="relative flex flex-col xl:flex-row justify-center h-screen pt-[10vh] xl:pt-[15vh] bg-[#FFD97E]">
          <div className="absolute flex w-full xl:w-2/3 py-[10vh] z-20">
            <div className="rotate-45 opacity-10 m-auto xl:ml-0">
              <IconHuellita className="hidden xl:flex" size={325} svgProps={{
                "strokeWidth": 5,
              }} />
              <IconHuellita className="xl:hidden flex" size={225} svgProps={{
                "strokeWidth": 5,
              }} />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row flex-1 px-8">
            <div className="flex flex-col gap-2 items-center justify-center flex-1 text-6xl pb-[5%] xl:pl-[10%]">
              <div className="flex flex-col text-[#007664] z-[50]">
                <h3>Cambiando vidas</h3>
                <h3 className="font-black">Una huellita a la vez</h3>
              </div>
            </div>
            <div className="relative xl:w-[45%] ml-auto">
              <FullImage src={Perro1} contain />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center xl:w-2/3 xl:h-[35vh] text-center mx-auto p-6">
        <h2 className="flex gap-2 justify-center items-center text-2xl xl:text-4xl font-black mb-8 truncate">
          <IconHuellita className="hidden xl:flex" size={25} svgProps={{ strokeWidth: 6 }} />
          <IconHuellita className="xl:hidden flex" size={15} svgProps={{ strokeWidth: 6 }} />
          ¿Quienes somos?
        </h2>
        <p className="xl:text-lg">
          ¡Bienvenidos a nuestro sitio web de Protección Animal de la Pontificia Universidad Javeriana! Somos un apasionado grupo de estudiantes comprometidos con el medio ambiente, la fauna y la flora en nuestro campus universitario. Desde <b>2008</b>, nos hemos dedicado a cuidar y proteger a los animales que conviven con nosotros, incluidos los <b>adorables gatos del campus</b>. Nuestra misión es difundir casos, brindar atención y generar conciencia sobre la importancia de respetar y preservar la vida animal. ¡Únete a nuestra comunidad y ayudanos a cambiar vidas <b>Una huellita a la vez</b>!</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-2 justify-center xl:w-2/3 xl:h-[40vh] text-center mx-auto p-6">
        <ComiteComponent img={GatosDelCampus} title="Comité de gatos de la U" text="Encargado del cuidado y alimentación de los gatos que viven en la universidad" />
        <ComiteComponent img={Logo} title="Comité de redes" text="Encargado de difundir contenido relacionado con el grupo por redes sociales, difusión de casos, actividades, etc." />
        <ComiteComponent img={ComiteActividades} title="Comité de actividades" text="Encargado de organizar y convocar activivdades de alimentación, baño, donaciones y adopciones de animales." />
      </div>
      <footer className="flex flex-col p-8 items-center justify-center h-[30vh] bg-[#FFD97E]">
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
  )
}