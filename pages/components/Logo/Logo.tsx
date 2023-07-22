import React, { FunctionComponent } from 'react';
import Image from "next/image";

type Props = {
  color: string
}

const Logo: FunctionComponent<Props> = ({color}: Props) => {
  return <Image src={`/logo-${color}.png`} alt="Matthew Cabral's Logo" width={100} height={100} />;
};

export default Logo;
