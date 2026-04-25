import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'
import GameScore from '../GameScore'
import GameResultView from '../GameResultView'

import {
  AppContainer,
  RulesView,
  PopupView,
  PopupButton,
  PopupImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isShow: true,
    text: '',
    score: 0,
    newArray: [],
  }

  getResult = (player, opponent) => {
    if (player.id === opponent.id) {
      return 'IT IS DRAW'
    }

    if (
      (player.id === 'ROCK' && opponent.id === 'SCISSORS') ||
      (player.id === 'PAPER' && opponent.id === 'ROCK') ||
      (player.id === 'SCISSORS' && opponent.id === 'PAPER')
    ) {
      return 'YOU WON'
    }

    return 'YOU LOSE'
  }

  checkResult = id => {
    const {score} = this.state

    const playerChoice = choicesList.find(each => each.id === id)

    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const result = this.getResult(playerChoice, opponentChoice)

    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    }

    this.setState({
      isShow: false,
      newArray: [playerChoice, opponentChoice],
      text: result,
      score: newScore,
    })
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, text, isShow, newArray} = this.state

    return (
      <AppContainer>
        <GameScore score={score} />

        <GameResultView
          choicesList={choicesList}
          isShow={isShow}
          newArray={newArray}
          checkResult={this.checkResult}
          text={text}
          restartGame={this.restartGame}
        />

        <RulesView>
          <Popup modal trigger={<button type="button">Rules</button>}>
            {close => (
              <PopupView>
                <PopupButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </PopupButton>

                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </RulesView>
      </AppContainer>
    )
  }
}

export default Home

/*import {Component} from 'react'
import GameScore from '../GameScore'
import GameResultView from '../GameResultView'

import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  RulesView,
  Popup,
  PopupView,
  PopupButton,
  PopupImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isShow: true,
    text: 'You Won',
    score: 0,
    newArray: [],
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice1[0], choice2)
    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: true,
      newArray: [choice1[0], choice2],
      text: result,
      score: newScore,
    })
  }

  render() {
    const {score, text, isShow, newArray} = this.state
    return (
      <>
        <AppContainer>
          <GameScore score={score} />
          <GameResultView
            choicesList={choicesList}
            text={text}
            isShow={isShow}
            newArray={newArray}
            checkResult={this.checkResult}
            restartGame={this.restartGame}
          />

          <RulesView>
            <Popup modal trigger={<Button type="button">RULES</Button>}>
              {close => (
                <PopupView>
                  <PopupButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </PopupButton>
                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupView>
              )}
            </Popup>
          </RulesView>
          <h1>You are wasting your time.</h1>
        </AppContainer>
      </>
    )
  }
}

export default Home
*/
