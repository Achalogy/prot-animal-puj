import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import login from "src/auth/login"
import IconPAJ from "src/icons/IconPAJ"

export default () => {
  const router = useRouter()

  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<boolean>()

  const handleLogin = async () => {
    if (!username || !password) return;
    const loged = await login({
      username,
      password
    })

    if (loged) {
      router.push("/admin/reportes")
    } else {
      setError(true)
    }
  }

  return <div className="flex flex-col h-screen w-screen bg-slate-200 gap-16 justify-center items-center">
    <Link href="/"><IconPAJ size={65} /></Link>
    <div className="flex flex-col gap-6 bg-white p-6 rounded-md xl:w-[20%]">
      <h1 className="font-semibold text-xl">Iniciar Sesión</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} className="bg-slate-100 rounded-md outline-none px-2 p-1" placeholder="Usuario" type="text" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-100 rounded-md outline-none px-2 p-1" placeholder="Contraseña" type="password" />
      <div className="flex flex-col gap-2">
        {error && <p className="text-red-500 text-center">Credenciales Erróneas</p>}
        <button className="w-2/3 text-center mx-auto bg-indigo-400 rounded-md p-2 text-white font-semibold" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  </div>
}