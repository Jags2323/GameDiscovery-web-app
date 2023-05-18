import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import CritcScore from './CritcScore'

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
      <div>
          <Card borderRadius={10} overflow={'hidden'} key={game.id}>
              <Image src={game.background_image} />
              <CardBody>
                  <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
            <List>
                  {game.parent_platforms.map((platform) => 
                      <ListItem fontSize='2xs'>{platform.platform.slug}</ListItem>
                    //   <VStack >{platform.platform.slug[0] }</VStack>
              )}
              </List>
                      <CritcScore game={game} />
                </HStack>
              </CardBody>
        </Card>
    </div>
  )
}

export default GameCard