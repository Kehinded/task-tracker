import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({onAdd, onShow}) => {
    const location = useLocation()
    return (
        <header className= 'header'>
            <h2>create your tasks</h2>
            {location.pathname === '/' && <Button onClick={onAdd}  text= {onShow? 'close' : 'add'} color= {onShow? 'red' : 'green'}/>}
        </header>
    )
}

export default Header
