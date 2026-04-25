import {
  GameScoreContainer,
  GameOptions,
  ScoreBoardContainer,
  ShowScore,
  Score,
  OptionContainer,
} from './styledComponents'

const GameScore = props => {
  const {score} = props
  return (
    <>
      <GameScoreContainer>
        <OptionContainer>
          <GameOptions>
            Rock <br /> Paper <br /> Scissors
          </GameOptions>
        </OptionContainer>
        <ScoreBoardContainer>
          <ShowScore>Score</ShowScore>
          <Score>{score}</Score>
        </ScoreBoardContainer>
      </GameScoreContainer>
    </>
  )
}

export default GameScore
