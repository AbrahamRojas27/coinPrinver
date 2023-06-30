import LinkedinIcon from "../LinkedingIcon"

function TeamCard({ description, img, fullName, position, linkedin }){
    console.log(linkedin)
    return(
        <div className="team-card">
            <figure className="team-img">
                <img src={img} alt={fullName} />
            </figure>

            <div className="team-info">
                <p className="team-name">{fullName}</p>
                <p className="team-position">{position}</p>
                <p className="team-text">{description}</p>
            </div>
            <a href={linkedin} className='team-linkedin'>
                <LinkedinIcon/>
            </a>
        </div>
    )
}

export default TeamCard