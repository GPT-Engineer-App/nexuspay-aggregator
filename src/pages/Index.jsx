// NexusPay - Payment Aggregator Web App
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

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Flex bg="blue.800" w="full" p={4} color="white" align="center" justify="space-between">
        <Heading size="md">NexusPay</Heading>
        <Button onClick={onOpen} variant="ghost">
          <FaBars />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button w="full" justifyContent="start" variant="ghost">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <VStack spacing={4} p={4} boxShadow="md" borderRadius="lg">
        <Image src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwYXBwJTIwbG9nb3xlbnwwfHx8fDE3MTM1MDQ2OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="100px" alt="NexusPay Logo" />
        <Heading as="h1" size="xl">
          NexusPay
        </Heading>
        <Text>Welcome to NexusPay, your trusted payment aggregator.</Text>

        <Flex w="full" justify="space-between">
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid" onClick={() => alert("Register")}>
            Register
          </Button>
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue" variant="outline" onClick={handleLogin}>
            Login
          </Button>
        </Flex>

        <Flex direction="column" align="center" w="full">
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaUserCircle />} w="full" justifyContent="start" variant="ghost">
              Manage Account
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaShoppingCart />} w="full" justifyContent="start" variant="ghost">
              E-Commerce
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaCreditCard />} w="full" justifyContent="start" variant="ghost">
              Load Cash Card
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaMobileAlt />} w="full" justifyContent="start" variant="ghost">
              Load Airtime
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaRegMoneyBillAlt />} w="full" justifyContent="start" variant="ghost">
              Pay Bills
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaChartBar />} w="full" justifyContent="start" variant="ghost">
              Analytics Dashboard
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaCog />} w="full" justifyContent="start" variant="ghost">
              Settings
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaTools />} w="full" justifyContent="start" variant="ghost">
              System Administration
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaBell />} w="full" justifyContent="start" variant="ghost">
              Notifications
            </Button>
          </Link>
        </Flex>
      </VStack>
      <Flex bg="blue.500" w="full" p={4} position="fixed" bottom="0" left="0" justify="space-around">
        <Button leftIcon={<FaShoppingCart />} variant="ghost" onClick={() => alert("E-Commerce")}>
          E-Commerce
        </Button>
        <Button leftIcon={<FaCreditCard />} variant="ghost" onClick={() => alert("Load Cash Card")}>
          Load Cash Card
        </Button>
        <Button leftIcon={<FaMobileAlt />} variant="ghost" onClick={() => alert("Load Airtime")}>
          Load Airtime
        </Button>
        <Button leftIcon={<FaRegMoneyBillAlt />} variant="ghost" onClick={() => alert("Pay Bills")}>
          Pay Bills
        </Button>
      </Flex>
    </Flex>
  );
};

export default Index;
