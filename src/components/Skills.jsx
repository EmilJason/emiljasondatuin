import { HStack } from '@chakra-ui/react';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import React from 'react';
import { FaReact } from 'react-icons/fa';

export default function Skills() {
  return(
      <HStack justifyContent={"center"} alignItems={"center"} py={"2rem"} spacing={5}>
          <IoLogoJavascript fontSize={"3rem"} />
          <IoLogoNodejs fontSize={"3rem"} />
          <FaReact fontSize={"3rem"} />
          <IoLogoCss3 fontSize={"3rem"} />
      </HStack>
  );
}
