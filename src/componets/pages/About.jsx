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
import avatar from '../images/avatar/one-man.png'
import hand from "../images/hand.png"

export default function About(){
    return(
        <div>
           <div className= "about-activities">
            <div className = "about-me">
                <div className= "about-me-pt2">
            <h2 className='about-me-header'>Get to Know Who I Am</h2>
            <p className='about-me-text'>Dear future employers, I am <span className= "blue">Benjamin Brechter</span>, I am currently based out of <span className= "blue">Houston, Texas</span>.
            My fascination with coding started when I made a gaming system that can <br /> play all Super Nintendo Entertaining System(SNES) and Nintendo Entertaining System(NES) games utilizing a Raspbery Pi.
            I am passionate about backend <br /> development and I am proficient in MongoDb and MYSQL. I have a Full-Stack web development certification I received 
            from the University of Texas at Austin.</p>
    
            <h1>Outside of my computer, Some activities <span className= "blue">I enjoy inculde</span>!</h1>

            <ul class = "about-list">
                <li style={{marginBottom: "10px"}}> <img src= {hand} alt="" className='pointer'/> Skateboarding</li>
                <li style={{marginBottom: "10px"}}> <img src={hand} alt="" className='pointer'/> Reading any kind of book</li>
                <li style={{marginBottom: "10px"}}> <img src={hand} alt="" className='pointer'/> Hang out with my cat <span style={{color: "red"}}>Trey</span> </li>
                <li style={{marginBottom: "10px"}}> <img src={hand} alt="" className='pointer'/> Play Magic the Gathering</li>
            </ul>
            <p>"Fail fast, Learn Faster" - Randy Bean</p>
            </div>
            <img className= "img" style={{marginRight: "200px"}} src={avatar} alt="Picture of me" />
            </div>
            </div>
            <h2 class = "header">Professional <span className= "blue" style={{marginLeft: "8px"}}>Skillset</span></h2>
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