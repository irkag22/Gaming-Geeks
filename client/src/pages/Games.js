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
    Flex
} from '@chakra-ui/react';



const game1 = {
    name: "Among Us",
    description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/945360/a147961088c49cf44bf0aff61cef08fcec128ecc.jpg"
};


const game2 = {
    name: "Goose Goose Duck",
    description: "Goose, goose, DUCK? A game of social deduction where you and your fellow geese must work together to complete your mission. Keep an eye out for those malicious Mallards and other birds, who have infiltrated your team and will do anything to stop you.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1568590/ed0a2f1958c13b0fcd4770f0097d59f4e19271de.jpg"
};

const game3 = {
    name: "PUBG: Battlegrounds",
    description: "Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/578080/f1e2c790bc051b833b7998896bf879b2a543fbe9.jpg"
};

const game4 = {
    name: "Apex Legends",
    description: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1172470/6a3169969cd4a66c7ae29a4934990160bccea1e4.jpg"
};

const game5 = {
    name: "Civilization VI",
    description: "Civilization VI is the newest installment in the award winning Civilization Franchise. Expand your empire, advance your culture and go head-to-head against history's greatest leaders. Will your civilization stand the test of time?",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/289070/356443a094f8e20ce21293039d7226eac3d3b4d9.jpg"
};

const game6 = {
    name: "Elden Ring",
    description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1245620/07cf5b9ddd9f98a69d71bdc99ab2791f1923b9fa.jpg"
};

const game7 = {
    name: "Dead By Daylight",
    description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/234111758152b0c49efdf3f182e4b068f3b6f12d.jpg"
};

const game8 = {
    name: "Stardew Valley",
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/413150/694de1f9cf09aba9d6d118bcff07714343529a0a.jpg"
};

const game9 = {
    name: "Rocket League",
    description: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and...",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/252950/3854e40582bc14b8ba3c9ee163a0fa64bc538def.jpg"
};

const game10 = {
    name: "Final Fantasy XIV",
    description: "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/39210/7888f35ccda304c0421951950c74b28357ea09bd.jpg"
};

const game11 = {
    name: "Red Dead Redemption II",
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1174180/d66accca2fc5061fa51804a88ce1cc7bfbd25c66.jpg"
};

const game12 = {
    name: "The Elder Scrolls V: Skyrim",
    description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/489830/356b389ad5e6937f097b21b23acbb89608878ecf.jpg"
};

const game13 = {
    name: "Dead By Daylight",
    description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/234111758152b0c49efdf3f182e4b068f3b6f12d.jpg"
};

const game14 = {
    name: "Sims 4",
    description: "Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that's wholly unique. Explore and customize every detail from Sims to homes, and much more.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1222670/5cf3a2e8d2dff4c4e4966ce07feb18382a5079ca.jpg"

};

export default function Game() {
    return (
        <div>
            <Flex flexWrap="wrap">
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game1.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game1.name}</Heading>
                            <Text>
                                {game1.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game2.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game2.name}</Heading>
                            <Text>
                                {game2.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game3.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game3.name}</Heading>
                            <Text>
                                {game3.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game4.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game4.name}</Heading>
                            <Text>
                                {game4.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game5.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game5.name}</Heading>
                            <Text>
                                {game5.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card> <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game6.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game6.name}</Heading>
                            <Text>
                                {game6.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game7.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game7.name}</Heading>
                            <Text>
                                {game7.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game8.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game8.name}</Heading>
                            <Text>
                                {game8.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game9.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game9.name}</Heading>
                            <Text>
                                {game9.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game10.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game10.name}</Heading>
                            <Text>
                                {game10.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>

                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game11.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game11.name}</Heading>
                            <Text>
                                {game11.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game12.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game12.name}</Heading>
                            <Text>
                                {game12.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>

                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game13.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game13.name}</Heading>
                            <Text>
                                {game13.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={game14.image}
                            alt='Among Us game image'
                            borderRadius='lg'
                            style={{ width: '100%' }}
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{game14.name}</Heading>
                            <Text>
                                {game14.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
            </Flex>
        </div>
    );
}