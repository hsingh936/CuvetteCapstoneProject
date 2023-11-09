import Banner from '../components/Home/Banner'
import SignUpFrom from '../components/Home/SignUpForm'

const HomePage = ()=>{
    return(
        <div style={{display:"flex"}}>
        <Banner/>
        <SignUpFrom/>
        </div>
    )
}

export default HomePage;