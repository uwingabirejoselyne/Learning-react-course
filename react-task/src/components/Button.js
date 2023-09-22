import PropTypes from 'prop-types'
import { click } from "@testing-library/user-event/dist/click";

const Button = ({ className, text,onClick }) => {
    return <button onClick={onClick} className={` ${className}`}>{text}</button>;

}
Button.defaultProps ={
    color:'orenge'
}
Button.prototype ={
    className:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
