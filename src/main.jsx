import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import News from './pages/News.jsx';
import MembershipsPage from './pages/MembershipsPage.jsx';
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx';
import { SingleNew } from './pages/SingleNew.jsx';
import NotFound from './pages/NotFound.jsx';
import './styles/main.scss'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from 'react-query'
import { loader } from './pages/SingleNew.jsx';
import store from './redux/store.js'
import Team from './pages/Team.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
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
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'team',
        element: <Team/>
      }
    ]
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
