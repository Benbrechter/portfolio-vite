import avatar from '../images/avatar-icon.png'
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

export default function Home() {
    return (
        <div>
            
            <h1 class = "about-header">Get to know me</h1>
            <div class = "about">
            <img class= "img"style={{marginRight: "75px"}} src={avatar} alt="Picture of me" />
            <p class= "about-text">Hi everyone, I am Benjamin Brechter from Houston Texas, I am currently training to be a junior web developer or a junior software developer. I started my coding journey right before the year started and look forward to expanding my growth.
            </p>
            </div>
            <div class= "about-activities">
            <h2>Outside of my computer screen some activities I love to do!</h2>

            <ul class = "about-list">
                <li>Skateboarding</li>
                <li>Read any kind of book</li>
                <li>Hang out with my cat Trey</li>
                <li>Play Games</li>
            </ul>
            </div>
            <h2 class = "about-header">Professional Skillset</h2>
            <section class="about-skills">
                <img class="about-img" src={javascript} />
                <img class="about-img" src={css} />
                <img class="about-img" src={html} />
                <img class="about-img" src={mongo} />
                <img class="about-img" src={node} />
                <img class="about-img" src={react} />
                <img class="about-img" src={sql} />
                </section>
                <h2 class = "about-header">Tools I use</h2>
                <section class="about-skills">
                <img class="about-img" src={vscode} />
                <img class="about-img" src={windows} />
                <img class="about-img" src={slack} />
                </section>
        </div>
    );
}