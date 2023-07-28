import { SVGProps } from "react"

export default ({ size = 18, svgProps, className }: {
  size: number,
  svgProps?: SVGProps<SVGSVGElement>,
  className?: string
}) => {
  size /= 10

  return <svg className={className ?? ""} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 84" width={`${size}rem`} height={`${size * 1.33333}rem`} fill="none" stroke="#000" strokeWidth={5} {...svgProps}>
    <path d="M5.3 62.4c3.9-2.2 7.4-3.8 8.1-4.6C14.5 56.5 29 26.3 29 26.3s2.2-5.6-.7-12.9C25.8 7.3 32.7.2 40.4 3.2c6.4 2.5 5.1 5.9 5.8 6 .6.1 10.6-4.4 13.4 4.1 2.2 7-3.5 9.3-6.7 10.2-4.1 1.2-5.9 3.1-7 4.9-1.1 1.9-14.1 30.7-14.4 32-.6 2.2 1.2 7.6 2 9.9 2.9 8.3-5.2 11-10.2 10.8-6.7-.3-7.4-5.9-8.1-6.1-.9-.3-4.2 1.7-9.1-.1-4.9-3.5-4.5-10.5-.8-12.5z" />
  </svg>


}