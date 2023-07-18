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

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Request your course'} />
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
            <FormLabel htmlFor="course" children="List your course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={event => setCourse(event.target.value)}
              placeholder="List your Course"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my={'4'} colorScheme={'yellow'} type={'submit'}>
            Request
          </Button>
          <Box my={'4'}>
            See all available courses!{' '}
            <Link to="/courses">
              <Button colorScheme={'yellow'} variant={'link'}>
                Check
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;
