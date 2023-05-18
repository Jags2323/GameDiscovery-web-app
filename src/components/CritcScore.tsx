import React from 'react'
import { Game } from '../hooks/useGames'
import { Badge } from '@chakra-ui/react'

interface Props{
    game: Game
}

const CritcScore = ({ game }: Props) => {
    let color = game.metacritic > 80 ? 'green' : 'yellow' 
    return (
      
      <div>
            <Badge colorScheme={color} fontSize={'14px'} borderRadius={'4px'}>{ game.metacritic}</Badge>
    </div>
  )
}

export default CritcScore