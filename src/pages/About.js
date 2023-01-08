import {Link} from 'react-router-dom'

export const About = () => (
  <>
    <h1>О приложении</h1>

    <Link to={'/quotes'} className={'btn'}>Котировки</Link>
  </>
)