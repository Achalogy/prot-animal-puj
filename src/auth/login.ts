import { setCookie } from "cookies-next";


export default async ({
  username,
  password
}: {username: string, password: string}) => {
  const response = await fetch('/api/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username, password
    })
  })

  if(response.status === 200) {

    const { token } = await response.json()

    setCookie('token', token, {
      expires: new Date(Date.now() + 544320000)
    })

    return true
  }else {
    return false
  }
}