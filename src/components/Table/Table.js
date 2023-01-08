import {useContext, useEffect, useState} from 'react'
import {AlertContext} from '../../context/alert/alertContext'
import {Row} from './Row'

export const Table = ({quotes, error}) => {
  const alert = useContext(AlertContext)

  useEffect(() => {
    alert.hide()

    if (error) {
      alert.show('Ошибка', 'error')
    }
  }, [])

  return (
    <table>
      <thead>
      <tr>
        <td>Ticker</td>
        <td>Last</td>
        <td>Highest Bid</td>
        <td>Percent Change</td>
      </tr>
      </thead>
      <tbody>
      {quotes.map((quote, index) => (
        <Row key={index} quote={quote}/>
      ))}
      </tbody>
    </table>
  )
}