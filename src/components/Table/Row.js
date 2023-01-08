import {useContext} from 'react'
import {ModalContext} from '../../context/modal/modalContext'

export const Row = ({quote}) => {
  const modal = useContext(ModalContext)

  const openModal = () => {
    modal.show(quote)
  }

  return (
    <tr onClick={openModal}>
      <td>{quote.name}</td>
      <td>{quote.last}</td>
      <td>{quote.highestBid}</td>
      <td>{quote.percentChange}</td>
    </tr>
  )
}