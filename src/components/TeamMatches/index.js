import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {latestMatch: {}, matchCard: [], image: '', isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const imageData = {
      teamBannerUrl: data.team_banner_url,
    }
    const matchLatest = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const card = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      image: imageData.teamBannerUrl,
      latestMatch: matchLatest,
      matchCard: card,
      isLoading: false,
    })
  }

  render() {
    const {image, latestMatch, matchCard, isLoading} = this.state
    console.log(image)
    console.log(latestMatch)

    return (
      <div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className="background3">
            <img src={image} />
            <h1>Latest Matches</h1>
            <LatestMatch latestMatch={latestMatch} />
            <ul>
              <div className="card">
                {matchCard.map(each => (
                  <MatchCard matchCard={each} />
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
