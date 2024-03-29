// import Dropzone from "react-dropzone"
// import IconPAJ from "../../icons/IconPAJ"
// import IconHuellita from "../../icons/IconHuellita"
// import { IconCross, IconPlus } from "@tabler/icons-react"
// import { useEffect, useState } from "react"
// import { render } from "react-dom"

export default () => {
  // const [files, setFiles] = useState<File[]>([])
  // const [description, setDescription] = useState<string>()

  // const [uploading, setUploading] = useState<boolean>();
  // const [error, setError] = useState<boolean>();

  // const upload = async () => {
  //   if (!description || uploading) return;
  //   setUploading(true)
  //   setError(false)

  //   const fileURLs = Promise.all(files.map(async f => {
  //     let body = new FormData()
  //     body.append("media", f)

  //     const response = await fetch('/api/upload', {
  //       method: "POST",
  //       body
  //     })
  //     return await response.text()
  //   }))

  //   const body = {
  //     files: await fileURLs,
  //     description
  //   }

  //   const response = await fetch('/api/submit/report', {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })

  //   console.log(response.status)

  //   if (response.status == 200) {
  //     setDescription("")
  //     setFiles([])
  //   } else {
  //     setError(true)
  //   }

  //   setUploading(false)
  // }

  // useEffect(() => {
  //   const wrapper = document.getElementById('block-dropzone')

  //   render(<Dropzone onDrop={acceptedFiles => setFiles(prev => [...prev, ...acceptedFiles])} accept={{
  //     'image/*': [],
  //     'video/*': []
  //   }} >
  //     {({ getRootProps, getInputProps }) => (
  //       <section>
  //         <div {...getRootProps()} className="flex justify-between items-center bg-slate-100 px-3 p-2 text-slate-800 cursor-pointer">
  //           <input {...getInputProps()} />
  //           Añadir archivos
  //           <IconPlus size={20} />
  //         </div>
  //       </section>
  //     )}
  //   </Dropzone>, wrapper)
  // }, [])

  return <div className="flex gap-8 h-screen w-screen items-center justify-center bg-[#FFD97E]">
    {/* <div className="flex-1 flex h-screen w-screen flex-col huellitas-bg p-4 items-center justify-center gap-24">
      <a href={"/"}><IconPAJ size={80} /></a>
      <div className="flex flex-col gap-4 xl:gap-8 w-full xl:w-1/3 mx-auto bg-white px-8 p-4 xl:p-8 xl:px-12 rounded-md max-w-[95%]">
        <h1 className="font-semibold text-xl xl:text-2xl text-center">¿Quieres reportar algo?</h1>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-8">
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="bg-slate-200 outline-none rounded-md w-full resize-none p-2" placeholder="Me gustaría reportar..." />
          <IconHuellita className="hidden xl:flex" size={40} svgProps={{
            stroke: "#007664"
          }} />
        </div>
        <div className="flex flex-col gap-2 overflow-scroll max-h-[30vh]">
          <div id="block-dropzone">

          </div>
          {files.map((f, i) => (
            <div className="flex justify-between bg-yellow-100 px-3 p-2 rounded-md">
              <p className="truncate">{f.name}</p>
              <IconCross className="p-1 rounded-full cursor-pointer" size={25} onClick={() => {
                setFiles(prev => prev.filter((_, a) => a != i))
              }} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {error && <p className="text-center text-red-500">Algo salio mal... ¡Reportalo!</p>}
          {uploading === false && <p className="text-center text-green-500">¡Reporte enviado!</p>}
          <button disabled={!description || uploading} onClick={upload} className="mx-auto px-4 xl:w-1/3 p-2 bg-red-400 disabled:bg-slate-300 text-white rounded-md text-xl">
            {uploading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div> */}

    <div className="flex flex-col items-center gap-6">
      <p className="font-semibold text-4xl">Estamos trabajando para reestablecer nuestro portal de reportes</p>
      <a href="/" className="px-3 p-2 rounded-md text-white bg-indigo-400 font-semibold">Volver</a>
    </div>
  </div>
}