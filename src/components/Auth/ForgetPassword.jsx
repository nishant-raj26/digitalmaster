import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} height={'89vh'}>
      <form action="">
        <Heading
          children="Forget Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="abc@def.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />
          <Button type="submit" width={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
