import HomeLayout from "src/layouts/HomeLayout"
import IconHuellita from "src/icons/IconHuellita"
import DefaultSeo from "src/SEO/defaultSeo"
import IconHuesito from "src/icons/IconHuesito"
import Link from "next/link"
import { CgBee } from 'react-icons/cg'
import { RiBearSmileLine } from 'react-icons/ri'

export default () => {
  const AnimalComponent = ({ nombre, Icon, id, size }: {
    nombre: string,
    Icon: any,
    id: string,
    size: number
  }) => {
    return <Link href={`/animales-del-campus/${id}`} className="flex flex-col bg-slate-200 aspect-square h-[25vh] rounded-md items-center justify-center gap-6 text-center no-underline cursor-pointer text-opacity-70 text-orange-900">
      <Icon size={size} svgProps={{
        strokeWidth: 6,
        stroke: "rgb(124 45 18)",
        opacity: 0.7
      }} />
      <p className="text-2xl font-semibold">{nombre}</p>
    </Link>
  }

  return (
    <HomeLayout>
      <DefaultSeo title="Gatos del Campus" />
      <div className="bg-[#007664]">
        <div className="flex flex-col gap-4 p-8 py-12 huellitas-bg text-center text-white">
          <p className="font-semibold text-3xl xl:text-4xl">Conoce a los animales del campus</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 p-4 xl:p-8">
        <AnimalComponent nombre="Gatos" Icon={IconHuellita} id="gatos" size={25} />
        <AnimalComponent nombre="Perros" Icon={IconHuesito} id="perros" size={25} />
        <AnimalComponent nombre="Abejas" Icon={CgBee} id="abejas" size={45} />
        <AnimalComponent nombre="Cuys" Icon={RiBearSmileLine} id="cuys" size={45} />
      </div>
    </HomeLayout>
  )
}