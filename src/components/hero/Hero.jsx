import heroImg from '../../assets/images/image-mockups.png'
import Button from '../button/Button'
import './Hero.css'
function Hero() {
  return (
    <>
    <div className='h-wrapper'>
        <div className='hero-text'>
            <h1 className='hero-header'>
            Next generation digital banking
            </h1>
            <p className='hero-sub'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button/>
        </div>
        <div className='hero-image'>
            <img src={heroImg} alt="" />
        </div>
       
    </div>
    </>
  )
}

export default Hero