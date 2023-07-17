import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading>Welcome to Digital Master</Heading>
        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="abc@def.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Enter your Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to="/forgetPassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button my={'4'} colorScheme={'yellow'} type="submit">
            Submit
          </Button>
          <Box my={'4'}>
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant={'link'}>
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
