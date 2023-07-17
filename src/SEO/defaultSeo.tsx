import Head from "next/head";

const Title = "Proteccion Animal Javeriana";
const Description = `Descubre la pasión por la protección animal en la Pontificia Universidad Javeriana. Nuestro grupo de estudiantes comprometidos se dedica desde 2008 a cuidar y proteger a los adorables gatos del campus y generar conciencia sobre la importancia de preservar la vida animal. Únete a nuestra comunidad y conoce más sobre nuestro trabajo en la protección del medio ambiente y la fauna.`;

const DefaultSeo = ({
  children,
  title,
  description,
  image,
}: {
  children?: any;
  title?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <Head>
      <title>{title ?? Title}</title>
      <meta name="description" content={description ?? Description} />

      <meta itemProp="name" content={title ?? Title} />
      <meta itemProp="description" content={description ?? Description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? Title} />
      <meta property="og:description" content={description ?? Description} />

      <meta name="twitter:title" content={title ?? Title} />
      <meta name="twitter:description" content={description ?? Description} />
      {children}

      {image && <>
        <meta itemProp="image" content={image} />
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </>}
    </Head>
  );
};

export default DefaultSeo;
