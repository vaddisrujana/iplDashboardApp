import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCard
  return (
    <li className="card-background">
      <img src={competingTeamLogo} className="card-image" />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
