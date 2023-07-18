import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsList} = props
  const {id, name, teamImageUrl} = teamsList
  return (
    <Link to={`/team-matches/${id}`}>
      <div className="team-card">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
