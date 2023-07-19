import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={'89vh'} p={'16'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading
          my={'8'}
          textAlign={'center'}
          textTransform={'uppercase'}
          fontFamily={'cursive'}
        >
          {' '}
          Payment Fail
        </Heading>
        <Link to="/subscribe">
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
        <Heading size={'xs'}>Reference : jjddlkdjld6373926ghjkd</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
