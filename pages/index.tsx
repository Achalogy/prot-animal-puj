import FullImage from "src/components/FullImage"
import IconHuellita from "src/iconts/IconHuellita"
import Perro1 from 'assets/perro1.webp'
import { StaticImageData } from "next/image"
import GatosDelCampus from '../assets/gatos-del-campus.png'
import ComiteActividades from '../assets/actividades.webp'
import HomeLayout from "src/layouts/HomeLayout"
import Logo from '../assets/icon.jpg'
import DefaultSeo from "src/SEO/defaultSeo"

export default () => {

  const ComiteComponent = ({ img, title, text }: {
    img: string | StaticImageData, title: string, text: string
  }) => {
    return <div className="flex flex-col flex-1 gap-4">
      <div className="relative w-1/2 aspect-square bg-indigo-300 rounded-full mx-auto overflow-hidden">
        <FullImage src={img} cover priority />
      </div>
      <div className="flex flex-col gap-2 px-8">
        <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  }

  return (
    <HomeLayout>
      <DefaultSeo />
      <div className="relative flex flex-col xl:flex-row justify-center min-h-[90vh] xl:h-[85vh] xl:min-h-[85vh] bg-[#FFD97E] overflow-hidden">
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
    </HomeLayout>
  )
}