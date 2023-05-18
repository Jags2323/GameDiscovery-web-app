import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres'

interface Props{
    onSelectedGenre: (genre: Genres) => void;
}

const GenresList = ({onSelectedGenre}: Props) => {

    const { genres } = useGenres();

  return (
      <div>
          <List>
              {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
                  <HStack>
                      <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
                      <Button variant='link' onClick={() => onSelectedGenre(genre)}>{ genre.name}</Button>
                  </HStack>
              </ListItem>)}
          </List>
    </div>
  )
}

export default GenresList