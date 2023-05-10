import { setUser } from "../../actions"

function UserModal(props) {
    
    const user = JSON.parse(localStorage.getItem('user'))

    const logout = () => {
        localStorage.removeItem('user')
        props.dispatch(setUser(null))
        props.setUserModal(false)
    }
    const openModal = props.userModal ? user ? 'user-modal' : 'hidden' : 'hidden'
    const image = user ? user.imagen : ''
    const name = user ? user.nombre : ''
    return(
        <div className={openModal}>
            <div>
                <figure className="user-modal-img">
                    <img src={image} alt="user image" />
                </figure>
                <p className="user-modal-username">{name}</p>
            </div>
            <button className="logout-button" onClick={logout}>Cerrar session</button>
        </div>
    )
}

export default UserModal