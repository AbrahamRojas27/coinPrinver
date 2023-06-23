import { useDispatch, useSelector } from "react-redux"
import { enterUser } from "../../redux/userSlice"

function UserModal(props) {
    let user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch(enterUser(null))
        props.setUserModal(false)
    }

    const openModal = props.userModal ? user ? 'user-modal' : 'hidden' : 'hidden'
    return(
        <div className={openModal}>
            <div>
                <figure className="user-modal-img">
                    <img src={user?.imagen} alt="user image" />
                </figure>
                <p className="user-modal-username">{user?.nombre}</p>
            </div>
            <button className="logout-button" onClick={logout}>Cerrar session</button>
        </div>
    )
}

export default UserModal