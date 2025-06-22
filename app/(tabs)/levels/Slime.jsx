import { StyleSheet } from 'react-native'
import bgImage from '../../../assets/game_Jelly/bgSlime.png'
import blueSlime from '../../../assets/game_Jelly/blueSlime.png'
import purpleSlime from '../../../assets/game_Jelly/purpleSlime.png'
import yellowSlime from '../../../assets/game_Jelly/yellowSlime.png'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'

const imagesForGame = [
  { src: yellowSlime, matched: false },
  { src: blueSlime, matched: false },
  { src: purpleSlime, matched: false }
]

const SlimeGame = () => {
  const {cards, turns, handleNewGame, setTurns} = useCardGame(imagesForGame)

  return (
    <Cards cards={cards} bgImage={bgImage} setTurns={setTurns} />
  )
}

export default SlimeGame

const styles = StyleSheet.create({})