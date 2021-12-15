import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import StateListItem from '../StateListItem'

class Home extends Component {
  state = {statesList: []}

  componentDidMount() {
    this.getStates()
  }

  getStates = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = response.json()
      console.log(fetchedData)
    }
  }

  renderStatesList = () => {
    const {statesList} = this.state
    return (
      <div className="states-container">
        <div>
          <p className="state">States/UT</p>
          <p className="conformed">Conformed</p>
          <p className="active">Active</p>
          <p className="recovered">Recovered</p>
          <p className="deceased">Deceased</p>
          <p className="population">Population</p>
        </div>
        <hr className="line" />
        <ul>
          {statesList.map(state => (
            <StateListItem key={state.id} stateListDetails={state} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <>
        <Header />
        {this.renderStatesList()}
      </>
    )
  }
}

export default Home
