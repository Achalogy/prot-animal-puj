import { Image, createCanvas, registerFont } from "canvas"
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const fontPath = path.join(process.cwd(), "assets/fonts/amatic.ttf");
  console.log(fontPath)

  registerFont(fontPath, {
    family: 'Amatic SC'
  })

  const canvas = createCanvas(2448, 3435)
  const context = canvas.getContext('2d');

  await addImage({
    context: context as any,
    url: "https://th.bing.com/th/id/R.6a2193a79bba1c2214b2d1ecdeca856b?rik=74%2fTKyxctg%2fCmA&riu=http%3a%2f%2fwww.blogerin.com%2fwp-content%2fuploads%2f2012%2f10%2fFotos-tiernas-de-perritos-wallpapers-2.jpg&ehk=2n7WA5Xz5SPLpcGw25Fh5QAQXVj7ywGhVORksb1OPE4%3d&risl=&pid=ImgRaw&r=0",
    x: 540,
    y: 1835,
    width: 1880,
    height: 1600
  })

  await addImage({
    context: context as any,
    url: "https://pub-4270cc2cbd0b47709feb53a0a8dc6023.r2.dev/template.png",
    x: 0,
    y: 0
  })

  
  context.font = '250px Amatic SC'
  // console.log(context.font)
  context.fillText("Hello World!", 250, 250)

  res.writeHead(200, {
    'Content-Type': 'image/png'
  });
  res.end(canvas.toBuffer())
}

const addImage = ({ context, url, x, y, width = null, height = null }: {
  context: CanvasRenderingContext2D,
  url: string,
  x: number,
  y: number,
  width?: number | null,
  height?: number | null
}) => new Promise((resolve) => {

  const image = new Image()
  image.src = url
  image.onload = () => {
    if (width && height) {
      return resolve(
        context.drawImage(image as any, x, y, width, height)
      )
    } else {
      return resolve(
        context.drawImage(image as any, x, y)
      )
    }
  }

})