import React from "react";
import Image from "next/image";
import logoImage from "../../public/unipp.png";

type Props = {
  logo: StaticImageData;
};

export const AppLogo: React.FC<Props> = (props) => {
  return (
    <>
      <Image src={props.logo} alt="unipp Logo" width={92} height={38}></Image>
    </>
  );
};
