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
import ImageComponent from "../Component/ImageComponent";
// import ImageComponent from "../Component/ImageComponent";

const Home = () => {
  return (
    <React.Fragment>
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
          transition={{ duration: 2 }}
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
                fontFamily={"'Livvic', sans-serif"}
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
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <CardBody mt={"-10"}>
            fontFamily={"'Livvic', sans-serif"}
            <Text color={"white"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo
              enim maxime quae eius obcaecati,s a alias pariatur voluptas!
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
              fontFamily={"'Livvic', sans-serif"}
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
      <Flex height={"70vh"} flexDirection={{ base: "column", md: "row" }}>
        <Flex
          flex={{ base: "1", md: "1" }}
          bg={"blue.300"}
          borderTopLeftRadius={"full"}
          borderToRightRadius={'full'}
          justify={"center"}
          mt={'10'}
        >
          <Box p={10}>
            <ImageComponent
              src="https://img.freepik.com/free-vector/goal-illustration-concept_114360-903.jpg?w=2000"
              height="400px"
              width="500px"
            />
          </Box>
        </Flex>
        <Flex flex={{ base: "1", md: "1" }} m={4}>
          <Container justifyContent={"center"}>
            <Heading textAlign={"center"} fontFamily={"'Livvic', sans-serif"}>
              Our Vision
            </Heading>
            <Text fontFamily={"'Livvic', sans-serif"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, voluptate. Sit ipsa eligendi impedit similique beatae
              odio dolores quo eum. Nihil culpa sint quam soluta officiis labore
              quae dignissimos quaerat!voluptate. Sit ipsa eligendi impedit
              similique beatae odio dolores quo eum. Nihil culpa sint quam
              soluta officiis labore quae dignissimos quaerat!
            </Text>
            <Flex justify={{ base: "center", md: "start" }}>
              <Button
                mt={8}
                bg={"#024190"}
                color={"white"}
                _hover={{ bg: "#FDB154", color: "#024190" }}
                fontFamily={"'Livvic', sans-serif"}
              >
                Read More
                <motion.div whileHover={{ scale: 1.2, originX: 0 }}>
                  <Box ml={"2"} mt={"1"}>
                    <HiArrowNarrowRight />
                  </Box>
                </motion.div>
              </Button>
            </Flex>
          </Container>
        </Flex>
      </Flex>
      {/* our Mission section */}
      <Flex
        height={{ base: "100vh", md: "70vh" }}
        // mt={{base:'',md:'14'}}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flex={{ base: 1, md: 1 }}
          justify={"center"}
          mt={{ base: "60", md: "44" }}
        >
          <Container mt={""} justify={"center"}>
            <Heading textAlign={"center"} fontFamily={"'Livvic', sans-serif"}>
              Our Mission
            </Heading>
            <Text fontFamily={"'Livvic', sans-serif"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, voluptate. Sit ipsa eligendi impedit similique beatae
              odio dolores quo eum. Nihil culpa sint quam soluta officiis labore
              quae dignissimos quaerat!voluptate. Sit ipsa eligendi impedit
              similique beatae odio dolores quo eum. Nihil culpa sint quam
              soluta officiis labore quae dignissimos quaerat!voluptate. Sit
              ipsa eligendi impedit similique beatae odio dolores quo eum. Nihil
              culpa sint quam soluta officiis labore quae dignissimos quaerat!
            </Text>
            <Flex justify={{ base: "center", md: "start" }}>
              <Button
                mt={8}
                bg={"#024190"}
                color={"white"}
                _hover={{ bg: "#FDB154", color: "#024190" }}
                fontFamily={"'Livvic', sans-serif"}
              >
                Read More
                <motion.div whileHover={{ scale: 1.2, originX: 0 }}>
                  <Box ml={"2"} mt={"1"}>
                    <HiArrowNarrowRight />
                  </Box>
                </motion.div>
              </Button>
            </Flex>
          </Container>
        </Flex>
        <Flex flex={{ base: "1", md: "1" }} justify={"center"}>
          <ImageComponent
            src="https://img.freepik.com/free-vector/happy-man-watching-launch-rocket_74855-14061.jpg?w=2000"
            height={"70px"}
            width="70%"
          />
        </Flex>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        bg={"#FDB154"}
        mt={{ base: "36", md: "28" }}
        p={"4"}
      >
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
    </React.Fragment>
  );
};

export default Home;
