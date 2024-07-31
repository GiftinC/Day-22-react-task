
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Peoples from './Components/Peoples.jsx'
import Features from './Components/Features.jsx'
import ImageFeatures from './Components/ImageFeatures.jsx'
import Header from './Components/Header.jsx'
import FooterInput from './Components/FooterInput.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from "./Components/navbar.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <Navbar />
    <Header />
    <Features />
    <ImageFeatures />
    <Peoples />
    <FooterInput/>
    <Footer />
  </>
)
