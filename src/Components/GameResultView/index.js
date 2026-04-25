import {
  GameResultViewContainer,
  GameButton,
  ResultImageContainer,
  GameImage,
  ResultName,
  ResultText,
  CustomButton,
} from './styledComponents'

const GameResultView = props => {
  const {isShow, choicesList, newArray, checkResult, text, restartGame} = props

  return (
    <GameResultViewContainer>
      {isShow ? (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </GameButton>
        </>
      ) : (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>

            <GameImage src={newArray[0]?.imageUrl} alt="your choice" />
          </ResultImageContainer>

          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>

            <GameImage src={newArray[1]?.imageUrl} alt="opponent choice" />
          </ResultImageContainer>

          <ResultText>{text}</ResultText>

          <CustomButton type="button" onClick={restartGame}>
            PLAY AGAIN
          </CustomButton>
        </>
      )}
    </GameResultViewContainer>
  )
}

export default GameResultView

/*

import {
  GameResultViewContainer,
  GameButton,
  ResultImageContainer,
  GameImage,
  ResultName,
  ResultText,
  CustomButton,
} from './styledComponents'

const GameResultView = props => {
  const {
    isShow,
    choicesList,
    imageUrl,
    newArray,
    checkResult,
    text,
    restartGame,
  } = props
  const showGame = () => (
    <GameResultViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultText>{text}</ResultText>
          <CustomButton type="button" onClick={restartGame}>
            PLAY AGAIN
          </CustomButton>
        </>
      )}
    </GameResultViewContainer>
  )

  return showGame()
}

export default GameResultView

*/
