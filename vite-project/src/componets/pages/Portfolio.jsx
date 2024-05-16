import farmer from "../images/farmer.png"
import readme from "../images/readme_pic.jpg"
import email from "../images/email.png"
import github from "../images/github_icon.png"
import linkedIn from "../images/linkedin.png"
export default function Portfolio() {
return (
    <section>
        <div class = "portfolio-header">
        <h1>Portfolio</h1>
        <p>here are a few projects I have worked on recently</p>
        </div>
        <div class = "row">
        <div class = "portfolio">
            <a href="https://cropclub-5cbdffda2ae5.herokuapp.com/">
            <img src={farmer} class = "portfolio-Img" />
            </a>
            <h1 style={{color: "white"}}>Crop Club</h1>
            <p class = "text">If you click the image it will take you to a full stack website thast brings local farmers crops to you.</p>
        </div>
        <div class = "portfolio">
            <a href="https://github.com/Benbrechter/Note-taker">
            <img src={readme} alt="this will contain a clickablee img" class = "portfolio-Img" style={{height: "300px"}}/>
            </a>
            <h1 style={{color: "white"}}>ReadMe Generator</h1>
            <p class = "text">Hand writing a readme can be tedious and dreadful. So I built a readme generator that will take care of the structoring and base set up for you. Click on the image to go to my git repo!</p>
        </div>
        </div>
        <div class = "connect-container">
            <a href="">
        <img src={email} alt=""  class= "connect"/>
        </a>
        <a href="https://github.com/Benbrechter">
        <img src={github} alt="" class= "connect"/>
        </a>
        <a href="https://www.linkedin.com/in/ben-brechter-630384203/">
        <img src={linkedIn} alt="" class= "connect"/>
        </a>
        </div>
    </section>
)

}