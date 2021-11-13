import React from "react";
import Image from "next/image";
import logoImage from "../../public/unipp.png";

type Props = {
  logo: StaticImageData;
};

export const AppLogo: React.FC<Props> = ({ logo = logoImage }) => {
  return (
    <>
      <Image src={logo} alt="unipp Logo" width={92} height={38}></Image>
    </>
  );
};
