import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  //   Link,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Contact Us'} />
        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="email"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              required
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="abc@email.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={event => setMessage(event.target.value)}
              placeholder="Your Message"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my={'4'} colorScheme={'yellow'} type={'submit'}>
            Send Mail
          </Button>
          <Box my={'4'}>
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant={'link'}>
                Request
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
