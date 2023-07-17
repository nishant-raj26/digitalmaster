import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();
  console.log(params.token);
  return (
    <Container py={'16'} height={'89vh'}>
      <form action="">
        <Heading
          children="Reset Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />
          <Button type="submit" width={'full'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
