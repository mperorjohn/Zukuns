import {
  Card,
  CardBody,
  CardHeader,
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
      AboutImage:
    },
  ];

  return (
    <>
      <Flex flexDirection={{ base: "column", md: "flex" }}>
        {CompanyAbout.map((MappedData, index) => (
          <Flex key={index} flex={{ base: "1", md: "1" }}>
            <Card p={4}>
              <CardHeader>
                <motion.div whileHover={{ scaleY: 1.1, originY: 0 }}>
                  <Text fontSize={"4xl"} textAlign={"center"}>
                    {MappedData.TextHeader}
                  </Text>
                </motion.div>
              </CardHeader>
              <CardBody>
                <Text>{MappedData.TextContent}</Text>
              </CardBody>
            </Card>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default About;
