import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dudkplmad/image/upload/v1666104155/Group_7484_sahu0j.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-paragraph">
      we’re sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <Link to="/">
      <button type="button" className="not-found-button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
