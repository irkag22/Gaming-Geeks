import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';


const game = {
  name: "Among Us",
  description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
  image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/945360/a147961088c49cf44bf0aff61cef08fcec128ecc.jpg"
};

export default function Game() {
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>

          <Image
            src={game.image}
            alt='Among Us game image'
            borderRadius='lg'
            style={{ width: '100%' }}
          />

          <Stack mt='6' spacing='3'>
            <Heading size='md'>{game.name}</Heading>
            <Text>
              {game.description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
}