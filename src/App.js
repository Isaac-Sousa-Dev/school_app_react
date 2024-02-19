import {Router, BrowserRouter} from 'react-router-dom'
import history from './services/history';

import Routes from './routes';
import GlobalStyled from './styles/GlobalStyled';
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
      <BrowserRouter>
          <Router history={history}>
              <Header />
              <Routes />
              <GlobalStyled />
              <ToastContainer autoClose={3000} className="toast-container" />
          </Router>
      </BrowserRouter>
  )
}

export default App;
