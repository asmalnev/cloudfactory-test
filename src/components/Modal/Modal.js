import './Modal.scss'
import {useContext} from 'react'
import {ModalContext} from '../../context/modal/modalContext'

export const Modal = () => {
  const {modal, hide} = useContext(ModalContext)

  if (!modal) return null

  return (
    <div className={'modal'}>
      <div className={'modal__back'} onClick={hide}></div>

      <div id={'modal-quote'} className={'modal__container'}>
        <div className={'modal__content'}>
          <table>
            <tbody>
            {Object.keys(modal).map((key, index) => (
              <tr key={index}>
                <td width={'30%'}><strong>{key}</strong></td>
                <td>{modal[key]}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        <div className={'modal__buttons'}>
          <button className={'btn'} onClick={hide}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}