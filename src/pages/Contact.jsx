import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsMessenger } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState();

  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 6 }}
      transition={{ duration: 2 }}
      
    >
      <Flex flexDirection={{ base: "column", md: "row" }} mb={6}>
        {/* First Section */}
        <Flex
          flex={{ base: "1", md: "1" }}
          bgImg={"url(src/assets/MesoBG.png)"}
          bgPosition={"center"}
          bgSize={"cover"}
        >
          {/* Content for the first section */}
        </Flex>

        {/* Second Section */}

        <Flex flex={{ base: "1", md: "1" }} bg={"white"}>
          <Container mt={"10"}>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.4 }}
            >
              <Card bg={"#024190"} p={4} borderRadius={"2xl"}>
                <CardHeader>
                  <Heading textAlign={"center"} color={"white"}>
                    Contact Us
                  </Heading>
                </CardHeader>
                <hr />
                <CardBody>
                  <FormControl as={"form"} onSubmit={{}}>
                    <FormLabel fontWeight={"bold"} color={"white"}>
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      onChange={HandleEmailChange}
                      color={"white"}
                    />

                    <FormLabel mt={"4"} color={"white"} fontWeight={"black"}>
                      Phone
                    </FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+" />
                      <Input
                        type="tel"
                        placeholder="phone number"
                        color={"white"}
                      />
                    </InputGroup>
                    <FormLabel mt={"4"} color={"#024190"} fontWeight={"black"}>
                      Your Message
                    </FormLabel>
                    <Textarea
                      placeholder="Enter your message"
                      cols={6}
                      rows={"6"}
                      color={"white"}
                    />

                    <Button
                      type="submit"
                      width={"100%"}
                      mt={"10"}
                      bg={"white"}
                      color={"#024190"}
                      // disabled={!email.trim() === ""}
                      fontWeight={"extrabold"}
                    >
                      Send Message
                      <Box ml={2}>
                        <BsMessenger />
                      </Box>
                    </Button>
                  </FormControl>
                </CardBody>
              </Card>
            </motion.div>
          </Container>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Contact;