import javascript from '../images/javascript-icon.png'
import css from '../images/css-icon.png'
import html from '../images/html-icon.png'
import mongo from '../images/mongoDB.png'
import node from '../images/node-js.png'
import react from '../images/react-js.png'
import slack from '../images/slack.png'
import sql from '../images/sql-icon.png'
import vscode from '../images/vscode.png'
import windows from '../images/windows-icon.png'
import avatar from '../images/carton-coder.jpg'

export default function About(){
    return(
        <div>
           <div className= "about-activities">
            <div className = "about-me">
                <div className= "about-me-pt2">
            <h2 className='about-me-header'>Get to Know Who I Am</h2>
            <p className='about-me-text'>Hi everyone, I am <span className= "blue">Benjamin Brechter</span> and currently live in <span className= "blue">Houston, Texas</span>. <br />
            My fasination with coding started when I made a gaming systems that can <br /> play all SNES and NES games with a Raspbery Pi.
            I am passanite about backend <br /> development and I am proficient in MongoDb and MYSQL. I have a Full-Stack web development certification I recived 
            from the University of Texas at Austin.</p>
            </div>
            <img className= "img" style={{marginRight: "200px"}} src={avatar} alt="Picture of me" />
            </div>
            <h2>Outside of my computer, Some activities I love to!</h2>

            <ul class = "about-list">
                <li style={{marginBottom: "10px"}}>Skateboarding</li>
                <li style={{marginBottom: "10px"}}>Read any kind of book</li>
                <li style={{marginBottom: "10px"}}>Hang out with my cat Trey</li>
                <li style={{marginBottom: "10px"}}>Play Games</li>
            </ul>
            </div>
            <h2 class = "header">Professional Skillset</h2>
            <section className="about-skills">
                <img className="about-img" src={javascript} />
                <img className="about-img" src={css} />
                <img className="about-img" src={html} />
                <img className="about-img" src={mongo} />
                <img className="about-img" src={node} />
                <img className="about-img" src={react} />
                <img className="about-img" src={sql} />
                </section>
                <h2 className = "header">Tools I use</h2>
                <section className="about-skills">
                <img className="about-img" src={vscode} />
                <img className="about-img" src={windows} />
                <img className="about-img" src={slack} />
                </section>
        </div>
    )
}