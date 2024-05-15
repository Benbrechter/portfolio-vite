export default function Contact() {
    return (
      <div style={{marginTop: 100}}>
        <h1 style= {{marginLeft: 150}}>Contact</h1>
        <div class = "form">
        <form >
          <div>
          <h3 class= "contact-header"> Enter your name:</h3>
          <input style={{width: 300}} type="text" />
          </div>
          <div>
          <h3 class= "contact-header"> Enter your Email:</h3>
          <input style={{width: 300}} type="text" />
          </div>
          <div>
          <h3 class= "contact-header"> Message:</h3>
          <input  style={{height:275, width: 300}} type="text" />
          </div>
          <button class = "contact-btn">Send!</button>
        </form>
        </div>
      </div>
    );
  }
  