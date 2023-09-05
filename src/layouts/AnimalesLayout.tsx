import IconHuellita from "src/icons/IconHuellita"
import HomeLayout from "./HomeLayout"
import { useRouter } from "next/router"
import Link from "next/link"
import IconHuesito from "src/icons/IconHuesito"
import { CgBee } from "react-icons/cg"
import { RiBearSmileLine } from "react-icons/ri"

export default ({ children }: {
  children: any
}) => {
  const { pathname } = useRouter()

  return <HomeLayout>
    <nav className="flex gap-4 justify-center bg-[#FFD97E] p-2 text-gray-600">
      <Link href={"/animales-del-campus/gatos"} className={`flex gap-2 no-underline font-semibold items-center ${pathname.includes("/animales-del-campus") ? "text-[#38A251]" : ""}`}>
        <IconHuellita size={10} svgProps={{
          stroke: pathname == "/animales-del-campus/gatos" ? "rgb(56 162 81)" : "rgb(75 85 99)",
          strokeWidth: 7
        }} />
        Gatos
      </Link>
      <Link href={"/animales-del-campus/perros"} className={`flex gap-2 no-underline font-semibold items-center ${pathname == "/animales-del-campus/perros" ? "text-[#38A251]" : ""}`}>
        <IconHuesito size={10} svgProps={{
          stroke: pathname == "/animales-del-campus/abejas" ? "rgb(56 162 81)" : "rgb(75 85 99)",
          strokeWidth: 7
        }} />
        Perros
      </Link>
      <Link href={"/animales-del-campus/abejas"} className={`flex gap-2 no-underline font-semibold items-center ${pathname == "/animales-del-campus/abejas" ? "text-[#38A251]" : ""}`}>
        <CgBee size={25} stroke={pathname == "/animales-del-campus/cuys" ? "rgb(56 162 81)" : "rgb(75 85 99)"} />
        Abejas
      </Link>
      <Link href={"/animales-del-campus/cuys"} className={`flex gap-2 no-underline font-semibold items-center ${pathname == "/animales-del-campus/cuys" ? "text-[#38A251]" : ""}`}>
        <RiBearSmileLine size={25} stroke={pathname == "/animales-del-campus/cuys" ? "rgb(56 162 81)" : "rgb(75 85 99)"} />
        Cuys
      </Link>
    </nav>
    {children}
  </HomeLayout>
}