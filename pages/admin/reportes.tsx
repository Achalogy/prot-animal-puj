import { getCookie } from "cookies-next"
import { Types } from "mongoose"
import { useEffect, useState } from "react"
import DefaultSeo from "src/SEO/defaultSeo"
export default () => {
  const [data, setData] = useState<any[]>([])

  const getData = async () => {

    const response = await fetch('/api/reports', {
      method: "GET",
      headers: {
        "Authorization": `bearer ${getCookie('token')}`
      }
    })

    if (response.status === 200) {
      let _data = (await response.json()).map((x: any, i: number) => ({
        ...x,
        timestamp: (new Types.ObjectId(x._id)).getTimestamp()
      })).sort((a: any, b: any) => b.timestamp.getTime() - a.timestamp.getTime())
      
      setData(_data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return <div className="flex flex-col h-screen min-w-[900px] w-screen bg-slate-300">
    <DefaultSeo title="ADMIN - Reportes PAJ" />
    <div className="flex huellitas-bg w-full h-full p-4">
      <div className="bg-white rounded-md p-2 w-full xl:w-2/3 m-auto h-[90%] overflow-scroll">
        {data.map(d =>
          <div className="flex border-b border-b-slate-200 p-2 gap-2">
            <p className="bg-slate-100 flex-[4] rounded-md p-2">
              {d.description}
            </p>
            <div className="flex flex-col justify-center gap-2 flex-1 bg-sky-100 p-2">
              {d.files.map((f: any, i: any) => <a target="_blank" className="text-xs text-purple-400" href={f}>Archivo {i + 1}</a>)}
            </div>
            <p className="bg-slate-100 flex-[1] rounded-md p-2">
              {d.timestamp.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
}
