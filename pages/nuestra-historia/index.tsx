import HomeLayout from "src/layouts/HomeLayout"
import Logo from '../../assets/icon.jpg'
import FullImage from "src/components/FullImage"
import IconHuellita from "src/iconts/IconHuellita"
import IconHuesito from "src/iconts/IconHuesito"

export default () => {
  return (
    <HomeLayout>
      <div className="bg-[#FFD97E]">
        <div className="flex xl:h-[85vh] huellitas-bg py-[5vh] xl:py-0">
          <div className="flex gap-16 items-center justify-center xl:w-2/3 mx-auto h-full">
            <div className="hidden xl:flex w-[45%]">
              <FullImage src={Logo} className="rounded-full" />
            </div>
            <div className="flex flex-col gap-8 xl:w-[55%] text-center text-[#ed6d61]">
              <h2 className="text-5xl xl:text-9xl font-black">Nuestra historia</h2>
              <h3 className="text-3xl xl:text-5xl font-semibold tracking-wider">Conócenos</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-8 xl:w-2/3 mx-auto">
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          <IconHuellita size={25} />
          <h2 className="font-semibold text-3xl xl:text-5xl">¿Quiénes somos?</h2>
        </div>
        <div className="flex flex-col gap-4 xl:w-2/3 mx-auto">
          <p className="xl:text-lg">Somos un grupo de estudiantes de la Pontificia Universidad Javeriana que tiene la misión de representar la protección del medio ambiente, la fauna y la flora, especialmente, de aquella que se encuentra en el campus. En nuestra universidad ha variedad de plantas y animales que conviven con nosotros, entre ellos, los 5 gatos de la U que viven allí y que nosotros alimentamos y cuidamos. Ayudamos también a difundir casos que las personas de la universidad o externas conozcan y requieran de atención, difundimos y orientamos en lo que podemos a las personas.</p>
          <p className="xl:text-lg">Somos un grupo de estudiantes de la Pontificia Universidad Javeriana que tiene la misión de representar la protección del medio ambiente, la fauna y la flora, especialmente, de aquella que se encuentra en el campus. En nuestra universidad ha variedad de plantas y animales que conviven con nosotros, entre ellos, los 5 gatos de la U que viven allí y que nosotros alimentamos y cuidamos. Ayudamos también a difundir casos que las personas de la universidad o externas conozcan y requieran de atención, difundimos y orientamos en lo que podemos a las personas.</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          <IconHuesito size={25} />
          <h2 className="font-semibold text-3xl xl:text-5xl">¿Cómo nace el grupo?</h2>
        </div>
        <div className="flex flex-col gap-4 xl:w-2/3 mx-auto">
          <p className="xl:text-lg">El grupo de Protección Animal de la Universidad Javeriana nace en 2008 a partir de una situación particular: un grupo de estudiantes rescataron a un perro que llegó al campus universitario y a raíz de dicha acción y de acuerdo con la política que existía en ese entonces en vicerrectoría del medio se forma el grupo que con el paso del tiempo fue ganando integrantes y más apoyo.</p>
          <p className="xl:text-lg">Los ideales, misión, visión y objetivos del grupo se han mantenido con el paso del tiempo: Medio ambiente, protección, difusión de casos de animales que requieren ayuda e intervención cuando es posible.</p>
          <p className="xl:text-lg">En toda la trayectoria del grupo ha habido por lo menos 5 generaciones de estudiantes que han liderado la comunidad de protección animal en la universidad y el trabajo se mantiene, es decir, se ha continuado con el legado.</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          <IconHuellita size={25} />
          <h2 className="font-semibold text-3xl xl:text-5xl">Y... ¿Por qué hay gatos en la universidad?</h2>
        </div>
        <div className="flex flex-col gap-4 xl:w-2/3 mx-auto">
          <p className="xl:text-lg">Por otro lado, les contamos un poco de la historia del comité de gatos de la U, primero deben saber que existen varios tipos de gatos: los salvajes, foráneos y domésticos, los primeros son gatos que no tienen contacto con el ser humano, los foráneos son aquellos que conviven en el mismo espacio que los humanos, pero viven libremente y por último los domésticos que viven con nosotros en nuestras casas. Independientemente del tipo de gato siempre debemos respetar su espacio, pues los gatos tienen personalidades distintas y no a todos les gusta el contacto físico o las caricias, lo mejor que podemos hacer es cuidar su entorno y garantizarles un espacio seguro donde puedan resguardarse y tener comida.</p>
          <p className="xl:text-lg">El programa de gatos nace alrededor de 2010 porque llegaron gatos a la universidad que se quedaron a vivir, los estudiantes en primer momento fueron los que decidieron acogerlos, posyeriormente la universidad creó el programa para garantizarles un espacio seguro que puedan habitar y alimento, además siempre que requieran servicio veterinario la universidad se encarga de brindarlo a través del programa. Cuando llegan otros gatos y se evidencia que no son foráneos o pueden vivir en un hogar, se les hace la captura, se les lleva al veterinario para vacunarlos y esterilizarlos y se entregan en adopción responsable.</p>
        </div>
      </div>
    </HomeLayout>
  )
}