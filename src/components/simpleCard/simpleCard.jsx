import './simpleCard.css'

function SimpleCard({src, cardHeading, paragraph }) {
  return (
    <div className='simpleCard'>
        <img src={src} alt="" />
        <h3>{cardHeading}</h3>
        <p>{paragraph}</p>
    </div>
  )
}

export default SimpleCard