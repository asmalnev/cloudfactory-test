import './Alert.scss'
import {useContext} from 'react'
import {AlertContext} from '../../context/alert/alertContext'

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null

  return (
    <div className={`alert ${alert.type}`} onClick={hide}>
      {alert.text}
    </div>
  )
}