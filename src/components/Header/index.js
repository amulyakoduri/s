import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {isActive} = props
  const navText = isActive ? 'active-nav-link' : ''

  return (
    <nav>
      <div className="nav-content">
        <Link to="/">
          <h1 className="logo-text">
            COVID19<span className="india-text">INDIA</span>
          </h1>
        </Link>
        <ul className="list">
          <Link to="/" className={`home-nav-link ${navText}`}>
            <li>Home</li>
          </Link>
          <Link to="/about" className={`about-nav-link ${navText}`}>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
