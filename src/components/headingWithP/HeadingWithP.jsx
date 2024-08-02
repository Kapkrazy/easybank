import './HeadingWithP.css'

function HeadingWithP( {heading, para} ) {
  return (
    <div className='wrapper-hwp'>
        <h2>{heading}</h2>
        <p>{para}</p>
    </div>
  )
}


export default HeadingWithP