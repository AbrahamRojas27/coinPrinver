import LoginButton from "../components/LoginButton"
import VisionMision from "../components/team/VisionMision"
import TeamContainer from "../containers/TeamContainer"

function Team(){
    return(
        <section className='team'>
            <VisionMision/>
            <h3 className="team-title">Nuestro Equipo</h3>
            <TeamContainer/>
            <LoginButton/>
        </section>
    )
}

export default Team