import React, { FC } from "react";
import styled from "@emotion/styled";
import { icons } from "../assets";

interface Props {
  icon: keyof typeof icons; // Use keyof to specify that the icon prop should be a key of the icons object.
  alt: string;
}

const Heart: FC<Props> = ({ icon, alt }) => {
  return <HeartIcon src={icons[icon]} alt={alt} />;
};

const HeartIcon = styled.img({
  width: "17px",
  height: "15px",
  alignSelf: "center",
});

export default Heart;
