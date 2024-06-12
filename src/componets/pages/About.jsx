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

export default function About(){
    return(
        <div>
           <div class= "about-activities">
            <h2 style={{color: "Black"}}>Get to Know Who I Am</h2>
            <p>Hi everyone, I am Benjamin Brechter and currently live in Houston, Texas. <br />
            My fasination with coding started when I made a gaming systems that can play all <br />SNES and NES games with a Raspbery Pi.
            I am passanite about backend development and I am proficient in MongoDb and MYSQL. <br /> I have a Full-Stack web development certification I recived 
            from the University of Texas at Austin.</p>

            <h2>Outside of my computer, Some activities I love to!</h2>

            <ul class = "about-list">
                <li style={{marginBottom: "10px"}}>Skateboarding</li>
                <li style={{marginBottom: "10px"}}>Read any kind of book</li>
                <li style={{marginBottom: "10px"}}>Hang out with my cat Trey</li>
                <li style={{marginBottom: "10px"}}>Play Games</li>
            </ul>
            </div>
            <h2 class = "header">Professional Skillset</h2>
            <section class="about-skills">
                <img class="about-img" src={javascript} />
                <img class="about-img" src={css} />
                <img class="about-img" src={html} />
                <img class="about-img" src={mongo} />
                <img class="about-img" src={node} />
                <img class="about-img" src={react} />
                <img class="about-img" src={sql} />
                </section>
                <h2 class = "header">Tools I use</h2>
                <section class="about-skills">
                <img class="about-img" src={vscode} />
                <img class="about-img" src={windows} />
                <img class="about-img" src={slack} />
                </section>
        </div>
    )
}