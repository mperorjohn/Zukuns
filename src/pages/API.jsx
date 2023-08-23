import { Container, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";

const API = () => {
  return (
    <>
      <Box
        bgImg={
          "url('https://storage.googleapis.com/pai-images/7d7a460e0fcd4d2eab84632db6b15037.jpeg')"
        }
        bgRepeat={"repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
      >
        <Heading p={20} textAlign={"center"} color={'white'}>
          API Page is coming soon{" "}
        </Heading>
      </Box>
    </>
  );
};

export default API;
