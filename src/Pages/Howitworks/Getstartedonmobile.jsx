import React from 'react';
import {
  Center,
  Square,
  Circle,
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

const Getstartedonmobile = () => {
  return (
    <div>
      <Center
        bg="#f1f1f1"
        w="100%"
        h="400px"
        color="white"
        fontSize="70px"
        fontWeight="600"
        backgroundImage="url('https://assets.loseit.com/website/home/Pattern_50opacity_Long.svg')"
      >
        <Box >
          <Text
            as="p"
            fontFamily="sans-serif"
            marginBottom="50px"
            color="#FF9400"
            fontWeight="500"
            fontSize="25px"
            marginLeft="100px"
          >
            Get Started on Mobile
          </Text>
            
          <Flex gap="30px">
            {/* appleimage */}
            <Image
              w="205px"
              src={'https://assets.loseit.com/website/home/Download_Apple.svg'}
              alt="some good alt text"
              objectFit="contain"
            />
            {/* //  playstoreimage */}
            <Image
              w="205px"
              src={
                'https://assets.loseit.com/website/home/Download_GooglePlay.svg'
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Flex>
        </Box>
      </Center>
    </div>
  );
};

export default Getstartedonmobile;
