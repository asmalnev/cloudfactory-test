import './Layout.scss'

export const Layout = ({children}) => {
  return (
    <div className={'layout-container'}>
      {children}
    </div>
  )
}