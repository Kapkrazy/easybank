import './Button.css'

function Button() {
  const handleClick = () => {
    console.log('this is:', this);
  };
    
  
  return (
    <button onClick={handleClick}>Request Invite</button>
  )
}

export default Button