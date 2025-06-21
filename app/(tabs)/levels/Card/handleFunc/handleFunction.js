const handleClick = ({
  backImage
}) => {
    const [firstCard, setFirstCard] = useState()
    const [secondCard, setSecondCard] = useState()
  firstCard ? setSecondCard(backImage) : setFirstCard(backImage)
  
}

export default handleClick

