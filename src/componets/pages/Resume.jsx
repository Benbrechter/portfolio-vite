import resumePdf from "../images/resume.jpg"

export default function Resume() {
    return (
        <div>
            <h1 class="header" style={{marginTop: "150px", marginBottom: "30px"}}>Resume</h1>
          <img src={resumePdf} class = "resume"/>
        
        </div>
    );
}