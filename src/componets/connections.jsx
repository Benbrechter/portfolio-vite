import email from "./images/email.png"
import github from "./images/github_icon.png"
import linkedIn from "./images/linkedIn.png"

export default function Connections(){
    return(
        <div>
             <div className = "connect-container">
            <a href="">
        <img src={email} alt=""  className= "connect"/>
        </a>
        <a href="https://github.com/Benbrechter">
        <img src={github} alt="" className= "connect"/>
        </a>
        <a href="https://www.linkedin.com/in/ben-brechter-630384203/">
        <img src={linkedIn} alt="" className= "connect"/>
        </a>
        </div>  
        </div>
    )
  
}