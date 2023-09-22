import PropTypes from "prop-types"
import Button from "./Button"

const Header = (props) => {
  const onClick =()=>{
    console.log('click');
  }
  return (
    <header className="mt-32">
    <div className="border border-1 border-red-700  mx-auto flex justify-between items-center ">
    <h1 className="text-red-500 ">My {props.title} header</h1>
    <Button className="bg-blue-500 text-white   m-5 left-0 text-2xl" text="Add" onClick ="onClick" />
    </div>
      
    </header>
  )
}

// Header.propTypes = {
//   title: PropTypes.string,
// }

export default Header
