import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"

export default function Contact() {
    return (
      <div className="contact-control">
      <div className = "contact-container">
        <h1 className="contact-header">Contact</h1>
        <p className="text">If you want to know more about me or my work, or if you would just <br />like to say hello, send me a message. I'd love to hear from you.</p>
        <div>
        <form>
          <div>
          <h3 className= "contact-header">Name:</h3>
          <input style={{width: 300}} type="text" placeholder= "Enter your name"/>
          </div>
          <div>
          <h3 className= "contact-header"> Email:</h3>
          <input style={{width: 300}} type="text" placeholder= "Enter your email"/>
          </div>
          <div>
          <h3 className= "contact-header"> Message:</h3>
          <textarea  style={{height:275, width: 300}} type="text" placeholder= "Enter a message" />
          </div>
          <button className = "contact-btn">Send!</button>
        </form>
        </div>
      </div>
      <div className= "contact-socials">
        <h2 className= "contact-header">Email</h2>
        <p className="text">benbrechter3@gmail.com</p>
        <h2 className= "contact-header" style={{marginTop: "60px"}} >Socials</h2>
        <a href="https://www.instagram.com/benbeejammin/">
          <img src={instagram} alt="" style={{height: "40px", marginRight: "30px"}}/>
        </a>
        <a href="https://x.com/bbenjamm">
          <img src={twitter} alt=""  style={{height: "40px"}}/>
        </a>
      </div>
      </div>
      
    );
  }
  