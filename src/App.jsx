import { Outlet } from 'react-router'
import Navbar from './Cpmponents/Navbar'
import Background from './Modules/Background/Background'
import Services from './Modules/Services/Services'
import WebServices from './Modules/WebServicesSlider/WebServices'
import About from './Modules/About/About'
import WhyChooseUs from './Modules/WhyChooseUs/WhyChooseUs'
import Contact from './Modules/Contact/Contact'
import Footer from './Modules/Footer/Footer'


const App = () => {
  return (

    <>
      <Navbar />
      <Background/>
      <Services/>
      <WebServices/>
      <About/>
      <WhyChooseUs/>
      <Contact/>
      <Footer/>
    </>

  )

}



export default App