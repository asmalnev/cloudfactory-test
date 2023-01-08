import {useContext, useEffect} from 'react'
import {PoloniexContext} from '../context/poloniex/poloniexContext'
import {Link} from 'react-router-dom'
import {Table} from '../components/Table/Table'

export const Quotes = () => {
  const {getQuotes, loading, quotes, error} = useContext(PoloniexContext)

  useEffect(() => {
    getQuotes()
    setInterval(() => {
      getQuotes()
    }, 5000)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Link to={'/'} className={'btn'}>О приложении</Link>

      <h1>Котировки</h1>

      {loading ? <p>Загрузка...</p> : <Table quotes={quotes} error={error}/>}
    </>
  )
}