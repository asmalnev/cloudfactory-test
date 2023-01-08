import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Layout} from './containers/Layout/Layout'
import {About} from './pages/About'
import {Quotes} from './pages/Quotes'
import {PoloniexState} from './context/poloniex/PoloniexState'
import {ModalState} from './context/modal/ModalState'
import {Modal} from './components/Modal/Modal'
import {AlertState} from './context/alert/AlertState'
import {Alert} from './components/Alert/Alert'

const App = () => {
  return (
    <PoloniexState>
      <ModalState>
        <AlertState>
          <BrowserRouter>
            <Layout>
              <Alert/>
              <Routes>
                <Route exact path={'/'} element={<About/>} />
                <Route path={'/quotes'} element={<Quotes/>} />
              </Routes>
              <Modal/>
            </Layout>
          </BrowserRouter>
        </AlertState>
      </ModalState>
    </PoloniexState>
  )
}

export default App