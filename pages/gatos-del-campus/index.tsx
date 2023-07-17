import FullImage from "src/components/FullImage"
import HomeLayout from "src/layouts/HomeLayout"
import { BiMap } from 'react-icons/bi'
import IconHuellita from "src/iconts/IconHuellita"
import { StaticImageData } from "next/image"

import GatitaAleli from '../../assets/gatos-del-campus/aleli.webp'
import GatitaNany from '../../assets/gatos-del-campus/nany.webp'
import GatitaSarita from '../../assets/gatos-del-campus/sarita.webp'
import GatitaLola from '../../assets/gatos-del-campus/lola.webp'
import GatitoNacho from '../../assets/gatos-del-campus/nacho.webp'

export default () => {

  const GatitoComponent = ({ img, name, place, text, gender, i }: {
    img: string | StaticImageData,
    name: string,
    place: string,
    text: string,
    gender: "male" | "female",
    i: number
  }) => {
    return <div className="flex flex-col xl:flex-row xl:h-[55vh]">
      <div className={`relative flex-1 ${i % 2 != 0 ? "xl:order-2" : ""}`}>
        <FullImage src={img} cover />
      </div>
      <div className="flex flex-1 text-center items-center justify-center">
        <div className="flex flex-col items-center p-4 py-[15%] xl:px-[15%] gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-6xl text-[#007664]">{name}</h2>
            <p className="flex gap-2 items-center justify-center text-2xl font-semibold">
              <BiMap size={25} />
              {place}
            </p>
          </div>
          <p className="text-lg">{text}</p>
          <IconHuellita svgProps={{
            stroke: gender == "male" ? "#0084B0" : "#FF8EBF"
          }} size={25} />
        </div>
      </div>
    </div>
  }

  return (
    <HomeLayout>
      <div className="bg-[#007664]">
        <div className="flex flex-col gap-4 p-8 huellitas-bg text-center text-white">
          <p className="font-semibold text-4xl">Conoce a nuestros</p>
          <h2 className="font-black text-6xl">Gatos del Campus</h2>
        </div>
      </div>
      <GatitoComponent i={0} gender="female" img={GatitaNany} name="Nany" place="La Frutera" text="Yo soy Nany, una gata muy tímida, no me siento muy a gusto con tanta gente y no me gusta que me miren mientras como, tampoco soy fan de las caricias, pero si me dejas comidita ¡te lo agradezco!" />
      <GatitoComponent i={1} gender="female" img={GatitaSarita} name="Sarita" place="Básicas" text="Yo soy Sarita, soy una señora muy tímida que ama la comida húmeda, me llevo muy bien con el personal de seguridad que me cuida en el lugar donde habito, no me gusta que me toquen, consiénteme dándome comidita" />
      <GatitoComponent i={2} gender="female" img={GatitaAleli} name="Alelí" place="Playita de Artes" text="Yo soy Alelí, una gata tímida pero amorosa, mi mejor amiga es Florecita, del personal de seguridad, soy consentida dependiendo de la persona, si ves que no estoy a gusto prefiero evitar que me toquen, vivo un poco enfermita, cuídame mucho, ¡gracias!" />
      <GatitoComponent i={3} gender="female" img={GatitaLola} name="Lola" place="Arquidiseño" text="Yo soy Lola, soy tímida y no soy fan de la gente, si me das mi espacio te lo agradezco, me gusta estar entre los árboles y al igual que mis compañeros gatunos de la U te pido que me cuides y respetes mi lugar, ¡Gracias!" />
      <GatitoComponent i={4} gender="male" img={GatitoNacho} name="Nacho" place="Escaleras eléctricas" text="Yo soy Nacho, me dicen El Casanovas y el título me lo gano porque me encanta que me consientan, primero déjame reconocerte, olfatearte y cuando me acerque puedes acaríciame, soy mimado y amo la comida" />
    </HomeLayout>
  )
}