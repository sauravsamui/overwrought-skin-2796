import React from 'react'
// import { Image} from '@chakra-ui/react'
// import styles from './howitworks.module.css'
import {
    Box,
    Center,
    Link,
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
    HStack
  } from '@chakra-ui/react';


//   interface IBlogTags {
//     tags: Array<string>;
//     marginTop?: SpaceProps['marginTop'];
//   }
  
//   const BlogTags: React.FC<IBlogTags> = (props) => {
//     return (
//       <HStack spacing={2} marginTop={props.marginTop}>
//         {props.tags.map((tag) => {
//           return (
//             <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//               {tag}
//             </Tag>
//           );
//         })}
//       </HStack>
//     );
//   };
  
//   interface BlogAuthorProps {
//     date: Date;
//     name: string;
//   }
  
//   export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
//     return (
//       <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//         <Image
//           borderRadius="full"
//           boxSize="40px"
//           src="https://100k-faces.glitch.me/random-image"
//           alt={`Avatar of ${props.name}`}
//         />
//         <Text fontWeight="medium">{props.name}</Text>
//         <Text>—</Text>
//         <Text>{props.date.toLocaleDateString()}</Text>
//       </HStack>
//     );
//   };



const Howitworks = () => {
  return (
    <>


<Flex>
  <Box p='10'>
  <Image src='https://my.loseit.com/LoseIt_Logo_FullColor.png' alt='logo' width="180px" height="10vh"  />
  </Box>
  <Spacer />
  <Box p='10'>
  <Button color='white' bg="#FF9400" width="130px">Login</Button>
  </Box>
</Flex>
<Center bg='#FF9400' w='100%' h='300px'  color='white' fontSize="70px" fontWeight="600"  backgroundImage="url('https://assets.loseit.com/website/corporate/InteriorHeaderPattern.svg')">
How It Works
</Center>


<Heading as="h1" textAlign="center">Calorie Counting</Heading>

<Container maxW={'7xl'} p="12">
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://assets.loseit.com/website/HIW/calorie-counting.png'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
         
          <Text
            as="p"
            marginTop="2"
           
            fontSize="lg">
            Calorie counting is an effective way for people to lose weight by simply creating a deficit; burn more calories daily than you consume, and you’ll be surprised at how easy losing weight can actually be.
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Calorie counting is an effective way for people to lose weight by simply creating a deficit; burn more calories daily than you consume, and you’ll be surprised at how easy losing weight can actually be.
          </Text>
        </Box>
      </Box>
     
      <Divider marginTop="5" />
     
      
    </Container>


        
    {/* <div className={styles.topheader}>
      <div>
      <Image src='https://my.loseit.com/LoseIt_Logo_FullColor.png' alt='logo' width="150px" height="10vh" />
      </div>
      <div>
        <button className='btnlogin'>Login</button>
      </div>
    </div>
    <div className="howbox">
        <h1 className="howhead">How It Works</h1>
    </div>
    <div>
        <h2>Calorie Counting</h2>
        <div>
            <img/>
            <div>
                <p>Calorie counting is an effective way for people to lose weight by simply creating a deficit; burn more calories daily than you consume, and you’ll be surprised at how easy losing weight can actually be.</p>
                <p>We take the complexity out of losing weight by creating a personalized weight loss plan for you based on factors such as your age, height, weight, activity level, and weight loss goals.</p>
            </div>
            
        </div>
        <button className="">Get Lose it</button>

    </div> */}
    </>
  )
}

export default Howitworks
