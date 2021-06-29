import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
   <header>
       <h1 className="header">
           {title}
       </h1>
       <Button 
       color ={showAdd ? 'steelblue' : 'green'} 
       text={showAdd ? 'Close' : 'Add'} 
       onClick = {onAdd}/>

   </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backGroundColor: 'black'
// }

export default Header
