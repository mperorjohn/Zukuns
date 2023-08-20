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
      AboutImage: "",
    },
  ];

  return (
    <>
      <Card
        bgImg={
          "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')"
        }
      >
        sdofisjgoidjsfgiojgdsfg
      </Card>
    </>
  );
};

export default About;
