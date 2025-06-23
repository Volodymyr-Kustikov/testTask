import { StyleSheet, View } from 'react-native'
import bgImage from '../../../assets/game_Jelly/bgSlime.png'
import blueSlime from '../../../assets/game_Jelly/blueSlime.png'
import purpleSlime from '../../../assets/game_Jelly/purpleSlime.png'
import yellowSlime from '../../../assets/game_Jelly/yellowSlime.png'
import { useCardGame } from '../../../hooks/useCardGame'
import WinOrLose from './Card/WinOrLose'
import Cards from './Card/Cards'

const imagesForGame = [
  { src: yellowSlime, matched: false },
  { src: blueSlime, matched: false },
  { src: purpleSlime, matched: false }
]

const SlimeGame = () => {
  
  const {cards, setCards, turns, handleNewGame, setTurns,     showOverlay,
    isWinner,
    wrongMatches,
    setWrongMatches,
    handlePlayAgain,
    handleCloseOverlay} = useCardGame(imagesForGame)

  return (
    <View style={s.container}>

      <Cards   
        cards={cards} 
        setCards={setCards} 
        bgImage={bgImage} 
        setTurns={setTurns}
        setWrongMatches={setWrongMatches}
      />
      <WinOrLose
        visible={showOverlay}
        isWinner={isWinner}
        onPlayAgain={handlePlayAgain}
        onClose={handleCloseOverlay}
      />
    </View>
  )
}

export default SlimeGame

const s = StyleSheet.create({
    container: {
    flex: 1,
  },
})