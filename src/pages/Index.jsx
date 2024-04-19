// NexusPay - Payment Aggregator Web App
import React from "react";
import { Box, Button, Flex, Heading, Input, Text, VStack, Image, Link, useToast, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaUserPlus, FaSignInAlt, FaUserCircle, FaShoppingCart, FaCreditCard, FaMobileAlt, FaRegMoneyBillAlt, FaChartBar, FaCog, FaTools, FaBell, FaBars } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleLogin = () => {
    toast({
      title: "Login Successful",
      description: "You have successfully logged in to NexusPay.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = React.useState("home");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Flex bg="blue.800" w="full" p={4} color="white" align="center" justify="space-between" position="sticky" top="0" zIndex="banner">
        <Button onClick={onOpen} variant="ghost" color="white">
          <FaBars />
        </Button>
        <Heading size="md" flex="1" textAlign="center">
          NexusPay
        </Heading>
        <Flex>
          <Button variant="ghost" color="white">
            <FaBell />
          </Button>
          <Button variant="ghost" color="white">
            <FaUserCircle />
          </Button>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" justify="space-between" h="100%">
              <VStack spacing={4}>
                <Button w="full" justifyContent="start" variant="ghost" onClick={() => handlePageChange("manageAccount")}>
                  Manage Account
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  E-Commerce
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  Load Cash Card
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  Load Airtime
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  Pay Bills
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  Analytics Dashboard
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  Settings
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  System Administration
                </Button>
                <Button w="full" justifyContent="start" variant="ghost">
                  Notifications
                </Button>
              </VStack>
              <Button
                w="full"
                justifyContent="start"
                variant="ghost"
                onClick={() => {
                  handleLogin();
                  setIsLoggedIn(!isLoggedIn);
                }}
              >
                {isLoggedIn ? "Log Out" : "Log In"}
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Image src="https://images.unsplash.com/photo-1607011389171-4ff58f3f68f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Payment Background" objectFit="cover" height="100vh" width="100vw" />
      <Flex bg="blue.800" w="full" p={4} position="fixed" bottom="0" left="0" justify="space-around">
        <Button leftIcon={<FaShoppingCart />} variant="ghost" color="white" onClick={() => handlePageChange("ecommerce")} />
        <Button leftIcon={<FaCreditCard />} variant="ghost" color="white" onClick={() => alert("Load Cash Card")} />
        <Button leftIcon={<FaMobileAlt />} variant="ghost" color="white" onClick={() => alert("Load Airtime")} />
        <Button leftIcon={<FaRegMoneyBillAlt />} variant="ghost" color="white" onClick={() => alert("Pay Bills")} />
      </Flex>
    </Flex>
  );
};

export default Index;
