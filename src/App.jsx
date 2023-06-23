import Header from "./containers/Header"
import Footer from "./containers/Footer"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userData } from "./redux/userSlice"
import { useEffect } from "react"

function App() {
  const user = localStorage.getItem('user')
  const dispatch = useDispatch()

  useEffect(() =>{
    if(user){
      dispatch(userData())
    }
  }, [user])
 

  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
