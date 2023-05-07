import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import News from './pages/News.jsx';
import MembershipsPage from './pages/MembershipsPage.jsx';
import Profile from './pages/Profile.jsx';
import { SingleNew } from './pages/SingleNew.jsx';
import NotFound from './pages/NotFound.jsx';
import reducer from './reducer/reducer.js'
import './styles/main.scss'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loader } from './pages/SingleNew.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'news',
        element: <News/>
      },
      {
        path: '/news/:id',
        element: <SingleNew />,
        loader:loader
      },
      {
        path: 'membership',
        element: <MembershipsPage/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  }
])

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
