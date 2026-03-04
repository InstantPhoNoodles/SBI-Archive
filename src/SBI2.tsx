import PlayerCard from "./PlayerCard"
import YouTubePlayer from "./YoutubePlayer";
import "./SBI1.css"
import Lance from "/lance_cropped.jpg";
import Dylan from "/dylan.jpg";
import Jevoni from "/jevoni.jpg";
import Gabe from "/gabe.jpg";
import Sarah from "/sarah.jpg";
import Sean from "/sean.jpg";
import Ken from "/ken.jpg";
import Mirza from "/mirza.jpg";
import Marcy from "/marcy.jpg";
import Kino from "/Faker_2020.jpg";

export default function SBI2() {
    return (
        <div className="SBI1Page">
            <div className="TeamNameBanner">
                <h1>HRT vs ICE</h1>
                <h2>The Saga Continues</h2>
            </div>

            <div className="TeamsContainer">
                <div><h1>Team HRT</h1></div>
                <div className="NTRContainer">
                    <PlayerCard name="Yaastoevsky" image={Dylan} />
                    <PlayerCard name="Choke" image={Jevoni} />
                    <PlayerCard name="Toyote" image={Gabe} />
                    <PlayerCard name="Marcy" image={Marcy} />
                    <PlayerCard name="Kino" image={Kino} />
                </div>

                <div><h1>Team NTR</h1></div>
                <div className="OFContainer">
                    <PlayerCard name="Swegy" image={Lance} />
                    <PlayerCard name="ZeroAcesLeft" image={Sarah} />
                    <PlayerCard name="Sheen" image={Sean} />
                    <PlayerCard name="Kenma" image={Ken} />
                    <PlayerCard name="Futaboy" image={Mirza} />
                </div>

                <div><h1>SBI 2 Pre-Game Interview</h1></div>
                <YouTubePlayer videoId="5UluUYEOeBU?si=Y2L_1Oi8_3xyoSQs"></YouTubePlayer>

                <div><h1>SBI 2 Game 1 + Draft</h1></div>
                <YouTubePlayer videoId="fBq-YBGmC2M?si=WRREe495Zwk9opML"></YouTubePlayer>

                <div><h1>SBI 2 Game 2 + Draft + Post-Game</h1></div>
                <YouTubePlayer videoId="G6IAH0UkLYo?si=OIC9lCmyM4FfFZ6Z"></YouTubePlayer>

                <div><h1>SBI 2 Draft 3</h1></div>
                <YouTubePlayer videoId="BH4xQw27y90?si=Olk3miwm99yxFlVS"></YouTubePlayer>
                
            </div>
        </div>
    )
}
