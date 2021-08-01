import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    return (
        <footer>
            <p>thank God i understand react now</p>
            {location.pathname === '/' ? <Link to="/about">go to about page &rarr;</Link> : <Link to="about">about page</Link>}

        </footer>
    )
}

export default Footer
