import React from "react";
import { Box, Heading } from "@chakra-ui/react";
// import { motion } from "framer-motion";

const Docs = () => {
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
        <Heading p={20} textAlign={"center"} color={"white"}>
          Documentation Page is coming soon...
        </Heading>
      </Box>
    </>
  );
};

export default Docs;
