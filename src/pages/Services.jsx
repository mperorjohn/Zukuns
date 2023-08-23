import {
  Stack,
  Box,
  Flex,
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  SimpleGrid,
  Button,
  Text,
  transition,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { useState } from "react";
// import { useDisclosure } from "@chakra-ui/react";
// import WebAppMessage from "../Component/WebAppMessage";

const Services = () => {
  const TextAnimation = ["M", "E", "S", "O", "V", "E", "R", "S", "E"];

  return (
    <Stack
      bgImg={
        "url('https://storage.googleapis.com/pai-images/7d7a460e0fcd4d2eab84632db6b15037.jpeg')"
      }
      bgRepeat={"repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
    >
      <Box
        bgImg={
          "url('https://storage.googleapis.com/pai-images/7d7a460e0fcd4d2eab84632db6b15037.jpeg')"
        }
        bgRepeat={"repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        p={"5"}
      >
        <Heading as={"h1"} color={"white"} fontSize={"4xl"}>
          <motion.h1
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {TextAnimation.map((Letters, index) => (
              <span key={index} value={Letters}>
                {Letters}
              </span>
            ))}
          </motion.h1>
        </Heading>
        <Flex p={"30"} borderRadius={"0px"} flexGrow={"12"}>
          <motion.div
            initial={{ opacity: 20, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heading
              textAlign={"center"}
              color={"white"}
              display={"flex"}
              alignContent={"center"}
              alignItems={"center"}
              m="auto"
              as="h1"
              fontSize={"4xl"}
            >
              <Box mt={1} mr={2}>
                <HiOutlineCode />
              </Box>
              Services
            </Heading>
          </motion.div>
        </Flex>
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card bg={"#024190"}>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"white"}>
                    Web Application
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color={"white"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur, quo.
                </Text>
              </CardBody>
              <CardFooter>
                <Button color={"white"} bg={"#F27326"}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Second Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Card bg={"#FDB154"}>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"white"}>
                    Website
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color={"white"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet.
                </Text>
              </CardBody>
              <CardFooter>
                <Button bg={"white"} color="#FDB154">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Third Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            <Card bg={"#024190"}>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"white"}>
                    Mobile Application
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color={"white"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam, suscipit!
                </Text>
              </CardBody>
              <CardFooter>
                <Button color="white" bg={"#F27326"}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Fourth card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"#024190"}>
                    UI/UX Design
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color={"#024190"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, pariatur?
                </Text>
              </CardBody>
              <CardFooter>
                <Button color={"white"} bg={"#024190"}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Fifth card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <Card bg={"#FDB154"}>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"white"}>
                    Product Design
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color={"white"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, pariatur?
                </Text>
              </CardBody>
              <CardFooter>
                <Button bg={"white"} color={"#FDB154"}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Sixth card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6 }}
          >
            <Card bg={"#024190"}>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"white"}>
                    Data Analysis
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, pariatur?
                </Text>
              </CardBody>
              <CardFooter>
                <Button bg={"#FDB154"} color={"white"}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Seventh Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"}>
                    Graphic Design
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, pariatur?
                </Text>
              </CardBody>
              <CardFooter>
                <Button color={"blue.400"}>Learn More</Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8 }}
          >
            <Card bg={"#024190"}>
              <CardHeader>
                <Flex>
                  <Text as="h3" fontSize={"3xl"} color={"white"}>
                    Bespoke Software
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color={"white"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, pariatur?
                </Text>
              </CardBody>
              <CardFooter>
                <Button color={"#024190"}>Learn More</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default Services;
