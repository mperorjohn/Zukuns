// Navbar.js
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Spacer,
  IconButton,
  Heading,
  useDisclosure,
  // Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ImageComponent from "./ImageComponent";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex align={"center"} as={"div"} bg={"#FDB154"} p={"2"}>
        <Text textAlign={"center"} color={"white"} fontStyle={"italic"}>
          Looping through coming generation...
        </Text>
      </Flex>
      <Flex
        as="nav"
        alignItems="center"
        justify="center"
        wrap="wrap"
        padding={4}
        bg="#024190"
        color="white"
        boxShadow={"dark-lg"}
        position={"relative"}
        top={0}
        fontFamily={"'Livvic', sans-serif"}
      >
        <Link to={"/"}>
          <ImageComponent src={"src/assets/Zukuns.JPG"} height={50} width={50} />
        </Link>
        <Flex align="center" mr={5}>
          <Heading as="h1" fontSize="4xl" fontWeight="bold">
            Zukuns
          </Heading>
        </Flex>

        <Spacer />

        <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="right"
          flexGrow={1}
          gap={4}
        >
          <Box>
            <Link to="/">
              <Text as="span" mr={2} fontWeight="bold">
                Home
              </Text>
            </Link>
          </Box>
          <Box>
            <Link to="/services">
              <Text as="span" mr={2} fontWeight="bold">
                Services
              </Text>
            </Link>
          </Box>
          <Box>
            <Link to="/contact">
              <Text as="span" mr={2} fontWeight="bold">
                Contact
              </Text>
            </Link>
          </Box>
          <Box>
            <Link to="/about">
              <Text as="span" mr={2} fontWeight="bold">
                About
              </Text>
            </Link>
          </Box>
          <Box>
            <Link to="/documentation">
              <Text as="span" mr={2} fontWeight="bold">
                Documentation
              </Text>
            </Link>
          </Box>
          <Box>
            <Link to="/api">
              <Text as="span" mr={2} fontWeight="bold">
                API
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
