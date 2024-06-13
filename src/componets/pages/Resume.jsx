import resumePdf from "../images/resume1.png"
import resumePdf2 from "../images/resume2.png"

export default function Resume() {
    return (
        <div className="resume-box">
            <h1 class="header" style={{marginTop: "150px", marginBottom: "30px"}}>Resume</h1>
          <img src={resumePdf} className = "resume"/>
          <img src={resumePdf2} className = "resume"/>
        
        </div>
    );
}