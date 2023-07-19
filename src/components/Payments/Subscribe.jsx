import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading children="Welcome" m={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'yellow'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children="`pro Pack - $299" color={'black'} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children="Join Pro Pack and gain excess to all exclusive courses"
            //   color={'black'}
            />
            <Heading size={'md'} children="$ 299 only" />
          </VStack>
          <Button my={'8'} width={'full'} colorScheme={'yellow'}>
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          css={{ borderRadius: ' 0 0 8px 8px' }}
        >
          <Heading
            size={'sm'}
            color={'white'}
            children={'100% refund at cancellation'}
            textTransform={'uppercase'}
          />
          <Text
            children="*Term & Condition applies"
            fontSize={'xs'}
            color={'white'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
