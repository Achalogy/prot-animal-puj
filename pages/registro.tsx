import DefaultSeo from "src/SEO/defaultSeo"
import IconHuellita from "src/icons/IconHuellita"

export default () => {
  return (
    <div className="flex h-screen w-full bg-[#FFD97E]">
      <DefaultSeo title="¿Quieres ser parte?" description="¡Únete a la Protectora de Animales de la Pontificia Universidad Javeriana para cambiar vidas, una huellita a la vez! Tendremos Jornadas de adopción, donación, cuidaremos de nuestros pontigatitos y mucho más." image="https://pub-4270cc2cbd0b47709feb53a0a8dc6023.r2.dev/363885654_1221910001760222_1318770034695331587_n.jpg" />
      <div className="flex items-center justify-center flex-1 huellitas-bg p-6">
        <div className="flex flex-col gap-6 xl:gap-8 xl:w-1/3 p-8 bg-white rounded-md items-center">
          <h1 className="font-semibold text-xl xl:text-4xl text-center">¿Quieres ser parte de la Protección de Animales de la Universidad?</h1>
          <IconHuellita size={55} svgProps={{
            stroke: "rgb(129 140 248)"
          }} />
          <a target="_blank" href="https://forms.office.com/r/368BAMMLxL" className="p-4 bg-indigo-400 w-3/4 xl:w-1/2 text-xl xl:text-2xl font-semibold text-white rounded-md no-underline text-center">
            Únete :D
          </a>
        </div>
      </div>
    </div>
  )
}