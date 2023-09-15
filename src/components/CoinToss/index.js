// Write your code here
import {Component} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {resImage: headImg, headsCount: 0, tailsCount: 0}

  onCoinToss = () => {
    const {tailsCount, headsCount} = this.state
    const tossRes = Math.floor(Math.random() * 2)
    let tossImg = ''
    let newHeadCount = headsCount
    let newTailCount = tailsCount
    if (tossRes === 0) {
      tossImg = headImg
      newHeadCount += 1
    } else {
      tossImg = tailImg
      newTailCount += 1
    }
    this.setState({
      resImage: tossImg,
      headsCount: newHeadCount,
      tailsCount: newTailCount,
    })
  }

  render() {
    const {resImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={resImage} alt="toss result" className="image" />

          <button type="button" className="button" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="card1">
            <p className="paragraph"> Total: {totalCount}</p>
            <p className="paragraph"> Heads: {headsCount}</p>
            <p className="paragraph"> Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
