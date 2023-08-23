import {
  Heading,
  Box,
  Text,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
// import ImageComponent from "../Component/ImageComponent";

const Home = () => {
  return (
    <>
      <Card
        align={"center"}
        borderRadius={"0px"}
        height={"80vh"}
        // mt="4px"
        bgImg={
          "url('https://storage.googleapis.com/pai-images/7d7a460e0fcd4d2eab84632db6b15037.jpeg')"
        }
        bgRepeat={"repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        fontFamily={"'Montserrat', sans-serif'"}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <CardHeader mt={"120"}>
            <Container>
              <Heading
                as={"h1"}
                color={"white"}
                fontSize={"4xl"}
                textAlign={"center"}
                textTransform={"capitalize"}
                fontWeight={"bold"}
                fontFamily={"'Jost', sans-serif !important"}
              >
                Web build, we design. We are the{" "}
                <Text
                  as="span"
                  color={"#FDB154"}
                  _hover={{
                    color: "blue.400",
                    cursor: "pointer",
                    transition: "1s",
                  }}
                >
                  mother of tech
                </Text>
              </Heading>
            </Container>
          </CardHeader>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <CardBody mt={"-10"}>
            <Text color={"white"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo
              enim maxime quae eius obcaecati, dolores a alias pariatur
              voluptas!
            </Text>
          </CardBody>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <CardFooter mt={"10"}>
            <Button
              mt={"-10"}
              color="white"
              bgColor={"#FDB154"}
              pl={"12"}
              pr={"12"}
              pb={"8"}
              pt={"8"}
              _hover={{
                backgroundColor: "#024190",
                color: "white",
                transition: "1s",
              }}
              display={"flex"}
            >
              Explore{" "}
              <Box ml={"2"} mt={"1"}>
                <HiArrowNarrowRight />
              </Box>
            </Button>
          </CardFooter>
        </motion.div>
      </Card>
      {/* Our Mission and goal */}
      <Flex
        p={10}
        // height="50vh"
        flexDirection={{ base: "column", md: "row" }}
        bg={"Background"}
      >
        <Flex height={"40vh"} flex={{ base: "1", md: "1" }} m={4}>
          <Container>
            <Heading textAlign={"center"}>Our Mission</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, voluptate. Sit ipsa eligendi impedit similique beatae
              odio dolores quo eum. Nihil culpa sint quam soluta officiis labore
              quae dignissimos quaerat!
            </Text>
            <motion.div whileHover={{ scale: 1.1, originX: 0 }}>
              <Button
                mt={8}
                bg={"#024190"}
                color={"white"}
                _hover={{ bg: "#FDB154", color: "#024190" }}
              >
                Read More
                <Box ml={"2"} mt={"1"}>
                  <HiArrowNarrowRight />
                </Box>
              </Button>
            </motion.div>
          </Container>
        </Flex>
        <Flex flex={{ base: "1", md: "1" }} m={4}>
          <Container>
            <Heading textAlign={"center"}>Our Vision</Heading>
            <Text>
              Our vision is to create a harmonious synergy between humans and
              technology, ushering in an era where seamless integration empowers
              lives. We believe that every challenge is an opportunity in
              disguise, and our mission is to unearth solutions that enrich
              experiences, simplify complexities, and drive progress.
            </Text>
            <motion.div whileHover={{ scale: 1.1, originX: 0 }}>
              <Button
                mt={8}
                bg={"#FDB154"}
                color={"#024190"}
                _hover={{ bg: "#024190", color: "white" }}
              >
                Read More
                <Box ml={"2"} mt={"1"}>
                  <HiArrowNarrowRight />
                </Box>
              </Button>
            </motion.div>
          </Container>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" bg={"#FDB154"} p={"4"}>
        {/* Added Flex container to center its children */}
        <Heading
          textAlign={"center"}
          fontWeight={"normal"}
          letterSpacing={"tight"}
          color={"white"}
        >
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1, stiffness: 140 }}
          >
            <Flex alignItems={"center"} alignContent={"center"}>
              <Box mr={"2"}>
                <FaCertificate />
              </Box>
              Trusted By
            </Flex>
          </motion.div>
        </Heading>
      </Flex>
      <SimpleGrid
        justifyContent={"center"}
        alignItems={"center"}
        // display={'flex'}
        bg={"whiteAlpha.300"}
        spacing={"4"}
        templateColumns={"repeat(auto-fill, minmax(180px, 4fr))"}
        p={"4"}
      >
        <Card
          bg={"url('src/assets/Image 5.png')"}
          borderRadius={"3xl"}
          bgSize={"cover"}
          bgPosition={"Center"}
          p={"10"}
          height="40"
        ></Card>
        {/* Second Brand  */}
        <Card
          bg={"url('src/assets/Image 6.png')"}
          borderRadius={"3xl"}
          bgSize={"cover"}
          bgPosition={"Center"}
          p={"10"}
          height="40"
        ></Card>
        {/* Third brand */}
        <Card
          bg={"url('src/assets/Image 7.png')"}
          borderRadius={"3xl"}
          bgSize={"cover"}
          bgPosition={"Center"}
          p={"10"}
          height="40"
        ></Card>
        {/* Fourth card */}
        <Card
          bg={"url('src/assets/Image 8.png')"}
          borderRadius={"3xl"}
          bgSize={"cover"}
          bgPosition={"Center"}
          p={"10"}
          height="40"
        ></Card>
        {/* Fifth card */}
        <Card
          bg={"url('src/assets/Image 12.png')"}
          borderRadius={"3xl"}
          bgSize={"cover"}
          bgPosition={"Center"}
          p={"10"}
          height="40"
        ></Card>
        {/* Sixth card */}
        <Card
          bg={"url('src/assets/Image 16.png')"}
          borderRadius={"3xl"}
          bgSize={"cover"}
          bgPosition={"Center"}
          p={"10"}
          height="40"
        ></Card>
      </SimpleGrid>
    </>
  );
};

export default Home;
