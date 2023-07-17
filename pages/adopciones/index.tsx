import FullImage from "src/components/FullImage"
import HomeLayout from "src/layouts/HomeLayout"
import Gatito1 from '../../assets/gatito1.png'
import DefaultSeo from "src/SEO/defaultSeo"

export default () => {
  return (
    <HomeLayout>
      <DefaultSeo title="Adopciones" />
      <div className="bg-[#ed6d61]">
        <div className="flex xl:h-[85vh] huellitas-bg">
          <div className="flex gap-16 items-center justify-center mx-auto h-full">
            <div className="hidden xl:flex w-[55%] h-full">
              <FullImage src={Gatito1} cover />
            </div>
            <div className="flex flex-col gap-8 xl:w-[45%] text-center p-[10%] xl:p-0">
              <h2 className="text-5xl xl:text-9xl font-black text-[#FFD97E]">ADOPTA UN PELUDO</h2>
              <h3 className="text-3xl xl:text-5xl font-semibold tracking-wider text-[#005ED0]">Ellos cuentan con tu amor</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3 mx-auto p-8">
        <p className="text-lg">En Colombia existe una gran cantidad de animales callejeros que viven en condiciones inaceptables para cualquier ser vivo. Los animales son seres sintientes y muchas ONGs,  fundaciones y personas están dedicadas a rescatar y rehabilitar estos animales, así mismo, la idea es que cada perro y gato rescatado sea entregado en adopción responsable con el fin de brindarle los cuidados desde una familia que asuma su alimentación, cuidado, salud y demás requerimientos del animal, de esta manera, cada organización puede rescatar más animales que se encuentren en condición de calle para darlos en adopción posteriormente y así sucesivamente, pues la cantidad de animales es bastante elevada en el país.</p>

        <p className="text-lg">Te invitamos a que leas el catálogo de adopción responsable que recopila la información de distintas fundaciones que tienen estos animales en adopción.</p>

        <p className="text-lg"><b>IMPORTANTE:</b> Si deseas realizar el proceso de adopción, comunícate a través de los datos de contacto directamente con la fundación, pues Protección Animal Javeriana se encarga de difundir únicamente, no realizamos procesos de adopción.</p>
      </div>
    </HomeLayout>
  )
}