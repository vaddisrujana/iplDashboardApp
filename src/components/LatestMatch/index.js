import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch
  return (
    <div className="back">
      <div className="back1">
        <div className="back11">
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{result}</p>
        </div>
        <div className="back12">
          <img src={competingTeamLogo} className="logo" />
        </div>
      </div>
      <hr />
      <div className="back2">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
