import React from "react"
import Image from "next/image"
import logoImage from "../../public/unipp.png"

export const AppLogo: React.FC = () => {
  return (
    <>
      <Image src={logoImage} alt="unipp Logo" width={92} height={38}></Image>
    </>
  )
}
