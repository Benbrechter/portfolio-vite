import avatar from '../images/carton-coder.jpg'
import Contact from "../Contact"


export default function Home({ handlePageChange }) {
    const handleButtonClick = () => {
        handlePageChange('Resume');
      }
    return (
        <div>
            <div className='Home-container'>
            <div className = "about">
            <img className= "img" style={{marginRight: "75px"}} src={avatar} alt="Picture of me" />
            <span >
            <h1 className="Home-header">Hi, I am Benjamin</h1>
            <h1 className= "Home-header-pt2">Full Stack Developer</h1>
            <p className='text'>I am a Back-End / Full-Stack Developer.<br></br> I am looking to continue my journey into Web Development.</p>
            <button onClick={handleButtonClick} className = "contact-btn">Resume</button>
            </span>
            </div>
            </div>
            <div>
            <Contact/>
            </div>
        </div>
    );
}