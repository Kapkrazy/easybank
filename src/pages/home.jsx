import HeadingWithP from "../components/headingWithP/HeadingWithP"
import Hero from "../components/hero/Hero"
import SimpleCard from "../components/simpleCard/simpleCard"
import './home.css'
import iconOnline from '../assets/images/icon-online.svg'
import iconBudget from '../assets/images/icon-budgeting.svg'
import iconOnboarding from '../assets/images/icon-onboarding.svg'
import iconAPI from '../assets/images/icon-api.svg'
import Article from "../components/article/Article"
import currency from '../assets/images/image-currency.jpg'
import confetti from '../assets/images/image-confetti.jpg'
import plane from '../assets/images/image-plane.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'


function Home() {
  return (
    <div>
    <Hero/>
    
    <div className="wrapper">
      <div className="text-with-cards">
        <div className="text">
          <HeadingWithP heading='Why choose EasyBank?' para='We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'/>
        </div>
        <div className="card-wrapper">
          <SimpleCard src={iconOnline} cardHeading='Online Banking' paragraph='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'/>
          <SimpleCard src={iconBudget} cardHeading='Simple Budgeting ' paragraph='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'/>
          <SimpleCard src={iconOnboarding} cardHeading='Fast Onboarding' paragraph='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'/>
          <SimpleCard src={iconAPI} cardHeading='Open API' paragraph='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'/>
        </div>
      </div>

      <div className="article">
        <div className="text">
          <HeadingWithP heading='Latest Articles' />
        </div>
        <div className="article-wrapper">
          <Article src={currency} author='Claire Robinson' title='Receive money in any currency with no fees' content='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'/>
          <Article src={restaurant} author='Wilson Hutton' title='Treat yourself without worrying about money' content='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'/>
          <Article src={plane} author='Wilson Hutton' title='Take your Easybank card wherever you go' content='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'/>
          
          <Article src={confetti} author='Claire Robinson' title='Our invite-only Beta accounts are now live!' content='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …'/>
        </div>
        
      </div>

     
    </div>
   
    </div>
  )
}

export default Home