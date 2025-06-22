import { StyleSheet } from 'react-native'
import Colizei from '../../../assets/game_zeus/Colizei.png'
import Zeus from '../../../assets/game_zeus/Zeus.png'
import zeusBg from '../../../assets/game_zeus/zeusBg.png'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'


const imagesForGame = [
  {src: Colizei, matched: false},
  {src: Zeus, matched: false},
]

const ZeusGame = () => {


  const {cards, setCards, turns, handleNewGame, setTurns} = useCardGame(imagesForGame)

  return (
    <Cards cards={cards} setCards={setCards} bgImage={zeusBg} setTurns={setTurns}/>
  )
}

export default ZeusGame

const s = StyleSheet.create({
 
})