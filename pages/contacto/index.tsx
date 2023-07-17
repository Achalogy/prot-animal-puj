import HomeLayout from "src/layouts/HomeLayout"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import DefaultSeo from "src/SEO/defaultSeo"

export default () => {
  return (
    <HomeLayout>
      <DefaultSeo title="Contacto" />
      <div className="flex flex-1 xl:h-[85vh] bg-[#007664]">
        <div className="flex flex-col items-center gap-6 xl:gap-10 justify-center flex-1 huellitas-bg text-white text-center px-6">
          <h2 className="font-black text-4xl xl:text-6xl">Contáctanos</h2>
          <p className="text-xl xl:text-3xl">Nuestro principal canal de información es instagram, escríbenos por mensaje directo DM</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/proteccionanimaljaveriana" target="_blank">
              <AiFillInstagram size={55} />
            </a>
            <a href="https://facebook.com/ProteccionAnimalJaveriana/" target="_blank">
              <AiFillFacebook size={55} />
            </a>
            <a href="https://twitter.com/JaverianaAnimal" target="_blank">
              <AiFillTwitterCircle size={55} />
            </a>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}