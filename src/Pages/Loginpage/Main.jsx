import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import styles from "../../All style module/Signup.module.css";
import * as React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { PasswordField } from './PasswordField'
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../store/auth/auth.action';

export const Main = () => {
  const [loginCreds,setLoginCreds] = useState({})
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {login:{loading,error,wrongCred},isAuth} = useSelector((state)=>state.auth)
let handleChange=(e)=>{
  let {name,value} = e.target;
  setLoginCreds({
    ...loginCreds,[name]:value
  })
}
let handleSubmit =()=>{
  let e = loginCreds.email;
   let p = loginCreds.password;
   if(!e && !p){
    setShow(true);
    setShow1(true);
    return;
   }
   if(!e){
    setShow(true);
    setShow1(false);
    return;
   }
   if(!p){
    setShow1(true);
    setShow(false);
    return;
   }
   if(p){
    setShow(false);
    setShow1(false);
   }
   dispatch(loginApi({
    email:e,
    password:p
   }))
 
}

React.useEffect(() => {
  if(isAuth){
    navigate("/home");
  }

  return () => {
    
  }
}, [isAuth])



{error &&
  
    <div>
      <h1>Something went wrong...</h1>
    </div>
  
}

return(
  <Container
    maxW="lg"
    py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }}
  >
    {loading &&
  
  <div>
    <Spinner
  thickness='6px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
  </div>

}
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: 'xs',
              md: 'sm',
            })}
          >
            Log in to your account
          </Heading>
          {/* <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Button variant="link" colorScheme="blue">
              Sign up
            </Button>
          </HStack> */}
        </Stack>
      </Stack>
      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={useBreakpointValue({
          base: 'transparent',
          sm: 'bg-surface',
        })}
        boxShadow={{
          base: 'none',
          sm: useColorModeValue('md', 'md-dark'),
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input name='email' id="email" type="email" onChange={handleChange} />
            </FormControl>
            <p className={styles.error}>{show?"Please fill out this field.":""}</p>
            <PasswordField  onChange={(e)=>handleChange(e)}  />
            <p className={styles.error}>{show1?"Please fill out this field.":""}</p>
          </Stack>
          <p className={styles.error}>{wrongCred?"Invalid email/password.":""}</p>
          <Stack spacing="6">
            <Button bg="#FF9400" color="white" variant="solid" onClick={handleSubmit}>Sign in</Button>
            <Button variant="link" color="#FF9400" size="sm">
              Forgot password?
            </Button>
            <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Link to={"/signup"}><Button variant="link" color="#FF9400">
            Create one now!
            </Button></Link>
            
          </HStack>
            <HStack>
              <Divider />
              <Text fontSize="lg" whiteSpace="nowrap" color="muted">
                OR 
              </Text>
              <Divider />
              
            </HStack>
            <Button bg="#000" color="white" variant="solid" >
            <svg width="20px" height="30vh" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" className="svg-inline--fa fa-apple fa-w-12 w-1 h-1 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
              
              <span>Sign in with apple</span></Button>
            {/* <OAuthButtonGroup /> */}
            <HStack spacing="1" justify="center">
            <Text color="muted">Sign In with Facebook is no longer supported</Text>
           
          </HStack>
          <Button variant="link" color="#FF9400">
            Create a new password now!
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
)
      }
