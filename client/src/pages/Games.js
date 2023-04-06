import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';


const game = {
    name: "Among Us",
    description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
    image: <img className="img" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/945360/a147961088c49cf44bf0aff61cef08fcec128ecc.jpg" alt="project" width="200" height="200"></img>
};

export default function Game() {
  return (
    <div>
        <card>
            {game.name} <br/>
            {game.description} <br/>
            {game.image}
        </card>
    </div>
  );
}