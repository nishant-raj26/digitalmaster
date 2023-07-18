import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsandConditions from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '8']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://www.modelsnova.com/wp-content/uploads/2021/07/image0-390x480.jpeg"
        boxSize={['40', '48']}
      />
      <Text children={'Co-Founder'} opacity={'0.7'} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Mobarak Al-Sharraf" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, get your courses done with me..`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay={false}
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      src={introVideo}
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ termAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={'center'}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsandConditions}
      </Text>
      <Heading my={'4'} size={'xs'}>
        Refund only applicable within 7 days
      </Heading>
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video based learning platform with some premium courses both
          free and exclusive for targeted audience.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme={'yellow'}>
            {' '}
            Checkout Our Plans
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termAndCondition={'termandcondition'} />

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by RazorPay"
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
