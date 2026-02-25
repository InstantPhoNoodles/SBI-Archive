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
import Kino from "/Faker_2020.jpg";

export default function SBI1() {
    return (
        <div className="SBI1Page">
            <div className="TeamNameBanner">
                <h1>NTR v OF</h1>
                <h2>The series that started it all.</h2>
            </div>

            <div className="TeamsContainer">
                <div><h1>NTR</h1></div>
                <div className="NTRContainer">
                    <PlayerCard name="Yaastoevsky" image={Dylan} />
                    <PlayerCard name="Choke" image={Jevoni} />
                    <PlayerCard name="Toyote" image={Gabe} />
                    <PlayerCard name="Marcy" image={Marcy} />
                    <PlayerCard name="Kino" image={Kino} />
                </div>

                <div><h1>OF</h1></div>
                <div className="OFContainer">
                    <PlayerCard name="Swegy" image={Lance} />
                    <PlayerCard name="ZeroAcesLeft" image={Sarah} />
                    <PlayerCard name="Sheen" image={Sean} />
                    <PlayerCard name="Kenma" image={Ken} />
                    <PlayerCard name="Futaboy" image={Mirza} />
                </div>
            </div>
        </div>
    )
}
