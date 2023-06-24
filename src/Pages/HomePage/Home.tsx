import AboutUS from "./Components/AboutUs"
import Header from "./Components/Header"
import Features from "./Components/Features"
import Review from "./Components/Reviews"
import Partners from "./Components/Partners"
import Footer from "./Components/Footer"

const Home=()=>{
    return(
       <>
       <Header/>
       {/* <Partners/> */}
        <Features/>
        <AboutUS/>
        <Review/>
        <Footer/>
        </>
    )
}

export default Home