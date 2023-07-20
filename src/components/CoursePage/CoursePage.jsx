import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const descText = 'DescText Here';

  const lectures = [
    {
      _id: '1',
      title: 'sample1',
      description: 'sample Desc',
      video: {
        url: 'sdada',
      },
    },
    {
      _id: '2',
      title: 'sample2',
      description: 'sample Desc',
      video: {
        url: 'sdada',
      },
    },
    {
      _id: '3',
      title: 'sample3',
      description: 'sample Desc',
      video: {
        url: 'sdada',
      },
    },
  ];
  return (
    <Grid minH={'89vh'} templateColumns={['1fr', '3fr 1fr ']}>
      <Box>
        <video
          autoPlay={false}
          controls
          controlsList="nodownload noremoteplayback"
          width={'100%'}
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading m={'4'}> {`${lectures[lectureNumber].title} `} </Heading>
        <Heading m={'4'}>Description</Heading>
        <Text m={'4'}> {`${lectures[lectureNumber].description}`} </Text>
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
