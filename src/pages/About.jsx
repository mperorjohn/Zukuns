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
    },
    {
      TextHeader: "The MesoVerse Experience",
      TextContent:
        "Step into the MesoVerse experience, where creativity knows no limits and innovation is a way of life. We pride ourselves on fostering a culture that thrives on collaboration, curiosity, and a relentless pursuit of excellence. Our dynamic team, comprised of visionaries, engineers, designers, and dreamers, works in unison to craft products that redefine industries.",
    },
    {
      TextHeader: "Innovations Beyond Boundaries",
      TextContent:
        "From artificial intelligence that mimics human intuition to immersive virtual reality experiences that blur the lines between the real and the digital, MesoVerse Tech is at the forefront of technological breakthroughs. Our portfolio spans a spectrum of domains including smart cities, healthcare evolution, sustainable energy solutions, and beyond.",
    },
    {
      TextHeader: "Ethics and Sustainability",
      TextContent:
        "As torchbearers of progress, we shoulder the responsibility of ethical technology development. Our commitment to sustainability is deeply ingrained in our processes, ensuring that each innovation treads lightly on the environment while making a profound impact on human lives.",
    },
    {
      TextHeader: "Ethics and Sustainability",
      TextContent:
        "As torchbearers of progress, we shoulder the responsibility of ethical technology development. Our commitment to sustainability is deeply ingrained in our processes, ensuring that each innovation treads lightly on the environment while making a profound impact on human lives.",
    },
    {
      TextHeader: "Partnering for Possibilities",
      TextContent:
        "Collaboration is the cornerstone of our approach. We believe in partnering with fellow trailblazers, enterprises, and startups alike to co-create solutions that revolutionize industries. Together, we navigate the uncharted territories of the digital landscape, transforming challenges into stepping stones for success.",
    },
    {
      TextHeader: "Join the MesoVerse Journey",
      TextContent: `'Embark on a journey with us to explore the uncharted dimensions of technology. Whether you're an investor seeking the next big thing or a visionary mind ready to shape the future, MesoVerse Tech welcomes you to be a part of our quest to reshape the world, one innovation at a time.'`,
    },
  ];

  return (
    <>
      <Flex flexDirection={{ base: "column", md: "flex" }}>
        {CompanyAbout.map((MappedData, index) => (
          <Flex key={index} flex={{ base: "1", md: "1" }}>
            <Card p={4}>
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 6, y: 0 }}
                transition={{ delay: 1.2, duration: 2 }}
                whileHover={{ scaleX: 1.2, originY: 0 }}
              > */}
                <CardHeader>
                  <motion.div
                  whileHover={{scaleY:1.1, originY:0}}
                  >
                    <Text fontSize={"4xl"} textAlign={"center"}>
                      {MappedData.TextHeader}
                    </Text>
                  </motion.div>
                </CardHeader>
                <CardBody>
                  <Text>{MappedData.TextContent}</Text>
                </CardBody>
              {/* </motion.div> */}
            </Card>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default About;
