import './Style/header.css';

const Header = (props) => {
  return(
      <div className="header">
        <img src="src/assets/image.png" alt="Globe" />
        <p>{props.myName} Travel Journey.</p>
      </div>
  )
}

export default Header;