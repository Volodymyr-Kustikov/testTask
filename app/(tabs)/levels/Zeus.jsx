import { StyleSheet } from 'react-native'
import Colizei from '../../../assets/game_zeus/Colizei.png'
import Zeus from '../../../assets/game_zeus/Zeus.png'
import zeusBg from '../../../assets/game_zeus/zeusBg.png'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'


const imagesForGame = [
  {src: Colizei},
  {src: Zeus},
]

const ZeusGame = () => {


  const {cards, turns, handleNewGame} = useCardGame(imagesForGame)

  return (
    <Cards cards={cards} bgImage={zeusBg} />
  )
}

export default ZeusGame

const s = StyleSheet.create({
 
})