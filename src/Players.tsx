import "./Players.css"
import PlayerCard from "./PlayerCard";
import Lance from "/lance_cropped.jpg";
import Dylan from "/dylan.jpg";
import Rohan from "/rohan.jpg";
import Jevoni from "/jevoni.jpg";
import Gabe from "/gabe.jpg";
import Victor from "/victor.jpg";
import Sarah from "/sarah.jpg";
import Ken from "/ken.jpg";
import Mirza from "/mirza.jpg";
import Sean from "/sean.jpg";

export default function Players() {
    return (

        <div className="PlayersPage">
            <div className="PlayersPageBanner">
                <h1>Meet Your Champions</h1>
            </div>

            <div className="PlayerCardContainer">
                <PlayerCard name="Swegy" image={Lance} />
                <PlayerCard name="Yaastoevsky" image={Dylan} />
                <PlayerCard name="Colada" image={Rohan} />
                <PlayerCard name="Choke" image={Jevoni} />
                <PlayerCard name="Toyote" image={Gabe} />
                <PlayerCard name="Suckonemvulvavic " image={Victor} />
                <PlayerCard name="ZeroAcesLeft" image={Sarah} />
                <PlayerCard name="Kenma" image={Ken} />
                <PlayerCard name="Futaboy" image={Mirza} />
                <PlayerCard name="Sheen" image={Sean} />
            </div>
        </div>
    )
}
