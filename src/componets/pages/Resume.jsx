import resumePdf from "../images/resume.jpg"
import email from "../images/email.png"
import github from "../images/github_icon.png"
import linkedIn from "../images/linkedin.png"
export default function Resume() {
    return (
        <div>
            <h1 class="header">Resume</h1>
          <img src={resumePdf} class = "resume"/>
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
        </div>
    );
}