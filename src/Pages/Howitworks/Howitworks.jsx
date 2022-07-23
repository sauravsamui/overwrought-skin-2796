import React from 'react';
import weightloss from '../../assets/weightloss.jpg';
import whylossit from '../../assets/whylossit.jpg';
import basic from '../../assets/basic.jpg';
import premium from '../../assets/premium.jpg';
import Gettingslider from './Gettingslider/Gettingslider';
import Adviceslider from './Adviceslider/Adviceslider';
import Basicslider from './Basicslider/Basicslider';
import Getstartedonmobile from './Getstartedonmobile';
import {Link} from "react-router-dom"
import HomeFooter from "../LandingPage/HomePage/HomeFooter"

import {
  Box,
  Center,
 
  Image,
  Flex,
  Container,
  Heading,
  WrapItem,
  Divider,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Tag,
  SpaceProps,
  Button,
  Wrap,
  Icon,
  IconProps,
  Spacer,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';



const Howitworks = () => {
  return (
    <>
      <Flex>
        <Link to={"/"}>
        <Box p="10">
          <Image
            src="https://my.loseit.com/LoseIt_Logo_FullColor.png"
            alt="logo"
            width="180px"
            height="10vh"
          />
        </Box>
        </Link>
        
        <Spacer />
        <Box p="10">
          <Link to={"/login"}> <Button color="white" bg="#FF9400" width="130px">
            Login
          </Button></Link>
        </Box>
      </Flex>
      <Center
        bg="#FF9400"
        w="100%"
        h="300px"
        color="white"
        fontSize="70px"
        fontWeight="600"
        backgroundImage="url('https://assets.loseit.com/website/corporate/InteriorHeaderPattern.svg')"
      >
        How It Works
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     <Link to={"/question"}>
     <Heading
        fontWeight="700"
        color="#183962"
        fontSize="2em"
        as="h1"
        textAlign="center"
      >
        Calorie Counting
      </Heading></Link>
      

      <Container maxW={'5xl'} p="5">
        <Box
          marginRight={{ base: '1', sm: '30' }}
          marginTop={{ base: '1', sm: '-5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="-121"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: '100%', sm: '95%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '25%' }}
              marginTop="5%"
            >
              {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
                <Image
                  w="205px"
                  // borderRadius="lg"
                  src={
                    'https://assets.loseit.com/website/HIW/calorie-counting.png'
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              {/* </Link> */}
            </Box>
          </Box>
          <Box
            display="flex"
            mr="20"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '3' }}
          >
            <Text
              as="p"
              color="black"
              marginTop="2"
              fontWeight="400"
              fontFamily="sans-serif"
              fontSize="14px"
            >
              Calorie counting is an effective way for people to lose weight by
              simply creating a deficit; burn more calories daily than you
              consume, and you’ll be surprised at how easy losing weight can
              actually be.
            </Text>
            <Text
              as="p"
              fontFamily="sans-serif"
              marginTop="2"
              color="black"
              fontWeight="400"
              fontSize="14px"
            >
              We take the complexity out of losing weight by creating a
              personalized weight loss plan for you based on factors such as
              your age, height, weight, activity level, and weight loss goals.
            </Text>
          </Box>
        </Box>

        <Divider marginTop="5" />
      </Container>
      <Link to={"/question"}>
      <Center>
       <Button
          bg="#FF9400"
          color="white"
          variant="solid"
          width="20%"
          size="lg"
        >
          Get Lose It!
        </Button>
      </Center>
      </Link> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Center
        bg="#183962"
        w="100%"
        h="280px"
        color="white"
        fontSize="15px"
        fontWeight="400"
      >
        <Flex>
          <Box width="50%" margin="auto">
            <Text
              as="p"
              color="white"
              textAlign="center"
              fontWeight="400"
              fontFamily="sans-serif"
              fontSize="14px"
            >
              "Whether you're trying to lose weight or maintain a healthy
              weight, calorie counting is an extremely helpful tool. By
              recording what and how much you're eating each day, you're then
              able to see patterns in your eating habits and make the necessary
              changes to keep you on track, moving towards your goals."
            </Text>
            <br></br>
            <Text
              as="p"
              color="#FF9400"
              textAlign="center"
              // marginTop="2"
              fontWeight="400"
              fontFamily="sans-serif"
              fontSize="14px"
            >
              - Kelli McGrane, R.D.
            </Text>
          </Box>

          <Image
            borderRadius="full"
            fontSize="15px"
            // boxSize='150px'
            width="195px"
            height="175x"
            marginRight="250px"
            src="https://assets.loseit.com/website/HIW/advice-advisor_kelli.png"
            alt="Kelli"
          />
        </Flex>
      </Center>
      <Box>
        <div>
          <img src={weightloss} alt="myimage" />
        </div>
      </Box>
      <Center
        bg="#f1f1f1"
        w="100%"
        h="280px"
        color="white"
        fontSize="15px"
        fontWeight="400"
      >
        <Flex>
          <Image
            borderRadius="full"
            fontSize="15px"
            // boxSize='150px'
            width="195px"
            height="175x"
            // marginLeft="250px"
            src="https://assets.loseit.com/website/HIW/advice-member_rochelle.png"
            alt="Kelli"
          />
          <Box width="50%" margin="auto">
            <Text
              as="p"
              color="black"
              textAlign="center"
              fontWeight="400"
              fontFamily="sans-serif"
              fontSize="14px"
            >
              "You CAN eat whatever you want, the only difference is that you
              have to plan for it.”
            </Text>
            <br></br>
            <Text
              as="p"
              color="#FF9400"
              textAlign="center"
              // marginTop="2"
              fontWeight="400"
              fontFamily="sans-serif"
              fontSize="14px"
            >
              - Rochelle, 101 lbs lost, Cashmere, WA
            </Text>
          </Box>
        </Flex>
      </Center>

      <Box>
        <div>
          <img src={whylossit} alt="myimage" />
        </div>
      </Box>

      
        <Link to={"/question"}>
        <Center>
        <Button
          bg="#FF9400"
          color="white"
          variant="solid"
          width="20%"
          size="lg"
        >
          Get Lose It!
        </Button>
        </Center>
        </Link>
      

      <br></br>
      <br></br>
      <br></br>

      <Center>
        <Tabs variant="unstyled">
          <TabList width="25%" margin="auto">
            <Tab
              _selected={{
                color: 'white',
                bg: '#183962',
                width: '200px',
                height: '80px',
              }}
            >
              <Box display="flex" flexDirection="column">
                <p>Lose It! Basic</p>
                <p>Free*</p>
              </Box>
            </Tab>
            <Tab
              _selected={{
                color: 'white',
                bg: '#183962',
                width: '200px',
                height: '80px',
              }}
            >
              <Box display="flex" flexDirection="column">
                <p>Lose It! Premium</p>
                <p>$39.99 / year</p>
              </Box>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                <Box>
                  <div>
                    <img src={basic} alt="basic" />
                  </div>

                  {/* //////////////////////////get it basic button ////////////////////////*/}
                  
                    <Link to={"/question"}>
                    <Center bg="#183962">
                    <Button
                      bg="#FF9400"
                      color="white"
                      variant="solid"
                      width="20%"
                      size="lg"
                    >
                      Get Lose It! Basic
                    </Button>
                    </Center>
                    </Link>
                 
                </Box>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <Box>
                  <div>
                    <img src={premium} alt="premium" />
                  </div>

                  {/* //////////////////////////get it basic premium ////////////////////////*/}
                  <Center bg="#183962">
                    <Button
                      bg="#FF9400"
                      color="white"
                      variant="solid"
                      width="20%"
                      size="lg"
                    >
                      Get Lose It! Premium
                    </Button>
                  </Center>
                </Box>
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>

      {/* //////////////////////first slider///////////////////////     */}


      
      
      <div style={{width:"98%",height:"400px" ,margin:"auto",backgroundColor:"#183962" ,marginTop:"-20px"}}>
              <Basicslider/>
      </div>
      
      {/* //////////////////////second slider///////////////////////     */}

         <Gettingslider/>
         <br></br>

      {/* //////////////////////third slider///////////////////////     */}
      <Center>
      <Text
              as="p"
              color="#183962"
              textAlign="center"
              
              fontWeight="700"
              fontFamily="sans-serif"
              fontSize="2em"
            >
              Advice from Successful Members
            </Text>
      </Center><br></br>
      <Adviceslider/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Getstartedonmobile/>
      <HomeFooter/>
        
    </>
  );
};

export default Howitworks;
