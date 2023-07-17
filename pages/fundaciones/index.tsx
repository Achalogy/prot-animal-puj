import FullImage from "src/components/FullImage"
import HomeLayout from "src/layouts/HomeLayout"
import { StaticImageData } from "next/image"

import InsDistrital from '../../assets/fundaciones/InsDistrital.webp'
import DogPack from '../../assets/fundaciones/DogPack.webp'
import ElGatio from '../../assets/fundaciones/ElGatio.webp'
import AmigosDelPlaneta from '../../assets/fundaciones/AmigosDelPlaneta.webp'
import DogsAndHugs from '../../assets/fundaciones/DogsAndHugs.webp'
import AlmaPerruna from '../../assets/fundaciones/AlmaPerruna.webp'
import DameVida from '../../assets/fundaciones/DameVida.webp'
import Tepa from '../../assets/fundaciones/Tepa.webp'
import DefaultSeo from "src/SEO/defaultSeo"

export default () => {
  const FundationComponent = ({ img, title, texts }: {
    img: string | StaticImageData,
    title: string,
    texts: any[]
  }) => <div className="flex flex-col xl:flex-row gap-4 items-center bg-slate-200 rounded-md drop-shadow-md px-6 p-4 w-[85vw]">
      <div className="w-full xl:h-[15vh] xl:w-[20%] mr-auto">
        <FullImage src={img} contain />
      </div>
      <div className="flex flex-col flex-1 w-[80%]">
        <p className="font-semibold">{title}</p>
        {texts}
      </div>
    </div>

  return (
    <HomeLayout>
      <DefaultSeo title="Fundaciones" />
      <div className="bg-[#A97BFD]">
        <div className="flex flex-col gap-2 p-8 huellitas-bg text-center text-white">
          <h2 className="font-black text-4xl xl:text-6xl">Directorio de Fundaciones</h2>
          <p className="text-lg">En este espacio podrás encontrar algunas fundaciones que se dedican al rescate y entrega en adopción responsable de perros y gatos callejeros.</p>
          <p className="text-lg">Existen muchas fundaciones en Colombia que se dedican a esta labor, te invitamos también a que realices una búsqueda personal de más organizaciones de este tipo para que conozcas más de este medio.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-8 xl:w-2/3 mx-auto">
        <FundationComponent img={InsDistrital} title="Instituto Distrital de Bienestar y Protección Animal" texts={[
          <p className="truncate">Teléfono conmutador: +57(601) 647 71 17</p>,
          <p className="truncate">Línea gratuita contra el maltrato: 018000115161</p>,
          <a className="truncate" href="https://www.animalesbog.gov.co/">https://www.animalesbog.gov.co/</a>
        ]} />
        <FundationComponent img={DogPack} title="Dogpack Fundación" texts={[
          <a className="truncate" href="https://www.instagram.com/dogpackoficial/">https://www.instagram.com/dogpackoficial/</a>,
          <a className="truncate" href="https://linktr.ee/fundaciondogpack">https://linktr.ee/fundaciondogpack</a>,
        ]} />
        <FundationComponent img={ElGatio} title="Fundación El Gatio" texts={[
          <a className="truncate" href="https://linktr.ee/fundaciondogpack">https://linktr.ee/fundaciondogpack</a>
        ]} />
        <FundationComponent img={AmigosDelPlaneta} title="Fundación Amigos del Planeta" texts={[
          <a className="truncate" href="https://www.amigosdelplaneta.com/">https://www.amigosdelplaneta.com/</a>,
          <a className="truncate" href="https://www.amigosdelplaneta.com/contactanos/">https://www.amigosdelplaneta.com/contactanos/</a>,
          <p className="truncate">WhatsApp 3213303104</p>
        ]} />
        <FundationComponent img={DogsAndHugs} title="Dogs and hugs" texts={[
          <a className="truncate" href="https://instagram.com/dogsandhugs">https://instagram.com/dogsandhugs</a>,
          <a className="truncate" href="https://onx.la/4e548">https://onx.la/4e548</a>
        ]} />
        <FundationComponent img={AlmaPerruna} title="Fundación alma perruna" texts={[
          <a className="truncate" href="https://instagram.com/fundacionalmaperruna">https://instagram.com/fundacionalmaperruna</a>,
          <a className="truncate" href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=6504&utm_source=IG&utm_ medium=ST&utm_campaign=FAP">https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=6504&utm_source=IG&utm_ medium=ST&utm_campaign=FAP</a>,
        ]} />
        <FundationComponent img={DameVida} title="Fundación dame vida rescate animal" texts={[
          <a className="truncate" href="https://instagram.com/fundacion_damevida">https://instagram.com/fundacion_damevida</a>
        ]} />
        <FundationComponent img={Tepa} title="Fundación Tepa" texts={[
          <a className="truncate" href="https://instagram.com/fundacion_tepa">https://instagram.com/fundacion_tepa</a>,
          <a className="truncate" href="https://linktr.ee/fundacion_tep">https://linktr.ee/fundacion_tep</a>
        ]} />
      </div>
    </HomeLayout>
  )
}