import {
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const CompanyAbout = [
    {
      TextHeader: "ABOUT",
      TextContent: `At MesoVerse , we are the architects of tomorrow's digital
      horizons. Founded with an unshakable passion for innovation, we
      stand at the crossroads of technology and imagination. Our mission
      is to sculpt the future through cutting-edge solutions that
      transcend the boundaries of possibility.`,
      ColorCode: "",
      AboutImage: "",
    },
    {
      TextHeader: "EXPERIENCE",
      TextContent: `Step into the MesoVerse experience, where creativity knows no limits and innovation is a way of life. We pride ourselves on fostering a culture that thrives on collaboration, curiosity, and a relentless pursuit of excellence. Our dynamic team, comprised of visionaries, engineers, designers, and dreamers, works in unison to craft products that redefine industries.`,
      ColorCode: "",
      AboutImage: "",
    },
    {
      TextHeader: "INNOVATIONS",
      TextContent:
        "From artificial intelligence that mimics human intuition to immersive virtual reality experiences that blur the lines between the real and the digital, MesoVerse Tech is at the forefront of technological breakthroughs. Our portfolio spans a spectrum of domains including smart cities, healthcare evolution, sustainable energy solutions, and beyond.",
    },
  ];

  return (
    <>
      <Card
        borderRadius={"none"}
        bgImg={
          "url('https://storage.googleapis.com/pai-images/7d7a460e0fcd4d2eab84632db6b15037.jpeg')"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        boxSizing="content-box"
        p={20}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Heading
            as={"h1"}
            textAlign={"center"}
            color={"white"}
            fontSize={{ base: "70px", sm: "24px", md: "32px", lg: "140px" }}
          >
            About
          </Heading>
        </motion.div>
        <CardBody></CardBody>
        <SimpleGrid
          justifyContent={"center"}
          alignItems={"center"}
          spacing={"4"}
          templateColumns={"repeat(auto-fill, minmax(300px, 4fr))"}
          p={"4"}
        >
          {CompanyAbout.map((mappedData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <Card
                key={index}
                bg={"white"}
                _hover={{
                  backgroundColor: "#024190",
                  color: "white",
                  transition: "0.5s",
                }}
              >
                <CardHeader
                  fontWeight={"bold"}
                  fontSize={"2xl"}
                  // color={"#024190 "}
                  // color={"#024190"}
                >
                  {mappedData.TextHeader}
                </CardHeader>
                <CardBody>
                  <Text>{mappedData.TextContent}</Text>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Card>
    </>
  );
};

export default About;
