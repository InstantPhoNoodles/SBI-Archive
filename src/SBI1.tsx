import PlayerCard from "./PlayerCard"
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
import Victor from "/victor.jpg";
import Rohan from "/rohan.jpg";
import Christian from "/pyke.jpg";
import Kino from "/Faker_2020.jpg";

export default function SBI1() {
    return (
        <div className="SBI1Page">
            <div className="TeamNameBanner">
                <h1>NTR v OF</h1>
                <h2>The series that started it all.</h2>
            </div>

            <div className="TeamsContainer">
                <div><h1>Team NTR</h1></div>
                <div className="NTRContainer">
                    <PlayerCard name="Yaastoevsky" image={Dylan} borderColor="black"/>
                    <PlayerCard name="Choke" image={Jevoni} borderColor="black"/>
                    <PlayerCard name="Toyote" image={Gabe} borderColor="black"/>
                    <PlayerCard name="Marcy" image={Marcy} borderColor="black"/>
                    <PlayerCard name="Kino" image={Kino} borderColor="black"/>
                </div>

                <div><h1>Team OF</h1></div>
                <div className="OFContainer">
                    <PlayerCard name="Swegy" image={Lance} borderColor="black"/>
                    <PlayerCard name="ZeroAcesLeft" image={Sarah} borderColor="black"/>
                    <PlayerCard name="Sheen" image={Sean} borderColor="black"/>
                    <PlayerCard name="Kenma" image={Ken} borderColor="black"/>
                    <PlayerCard name="Futaboy" image={Mirza} borderColor="black"/>
                </div>
            </div>

            <div className="TeamNameBanner">
                <h1>HRT vs ICE</h1>
                <h2>The Saga Continues</h2>
            </div>

            <div className="TeamsContainer">
                <div><h1>Team HRT</h1></div>
                <div className="NTRContainer">
                    <PlayerCard name="Yaastoevsky" image={Dylan} borderColor="black"/>
                    <PlayerCard name="Choke" image={Jevoni} borderColor="black"/>
                    <PlayerCard name="Toyote" image={Gabe} borderColor="black"/>
                    <PlayerCard name="Futaboy" image={Mirza} borderColor="black"/>
                    <PlayerCard name="Colada" image={Rohan} borderColor="black"/>
                </div>

                <div><h1>Team ICE</h1></div>
                <div className="OFContainer">
                    <PlayerCard name="Swegy" image={Lance} borderColor="black"/>
                    <PlayerCard name="Suckonemvulvavic" image={Victor} borderColor="black"/>
                    <PlayerCard name="Christian" image={Christian}  borderColor="black"/>
                    <PlayerCard name="Kenma" image={Ken} borderColor="black"/>
                    <PlayerCard name="Kino" image={Kino} borderColor="black"/>
                </div>
            </div>
        </div>
    )
}
