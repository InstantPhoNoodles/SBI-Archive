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
import Kino from "/Faker_2020.jpg";
import Coby from "/coby.jpg";
import Marcy from "/marcy.jpg";
import Munson from "/munson.jpg";
import Naomi from "/naomi.jpg";

export default function Players() {
    return (

        <div className="PlayersPage">
            <div className="PlayersPageBanner">
                <h1>Meet Your Players</h1>
            </div>

            <div className="PlayerCardContainer">
                <PlayerCard name="Choke" image={Jevoni} rings="☆ ☆ ☆" border={true} borderColor="goldenrod"/>
                <PlayerCard name="Coby" image={Coby} rings="☆ ☆ ☆" border={true} borderColor="goldenrod"/>
                <PlayerCard name="Yaastoevsky" image={Dylan} rings="☆ ☆ ☆" border={true} borderColor="goldenrod"/>
                <PlayerCard name="Kino" image={Kino} rings="☆ ☆ ☆" border={true} borderColor="goldenrod"/>

                <PlayerCard name="Toyote" image={Gabe} rings="☆☆" borderColor="silver"/>
                <PlayerCard name="Munson" image={Munson} rings="☆☆" borderColor="silver"/>

                <PlayerCard name="Swegy" image={Lance} rings="☆" borderColor="rgb(204, 92, 0)"/>
                <PlayerCard name="Kenma" image={Ken} rings="☆" borderColor="rgb(204, 92, 0)"/>
                <PlayerCard name="Futaboy" image={Mirza} rings="☆" borderColor="rgb(204, 92, 0)"/>
                <PlayerCard name="Marcy" image={Marcy} rings="☆" borderColor="rgb(204, 92, 0)"/>
                <PlayerCard name="Colada" image={Rohan} rings="☆" borderColor="rgb(204, 92, 0)"/>
                <PlayerCard name="Sheen" image={Sean} rings="☆" borderColor="rgb(204, 92, 0)"/>
                <PlayerCard name="Squidlette" image={Naomi} rings="☆" borderColor="rgb(204, 92, 0)"/>
                
                <PlayerCard name="Suckonemvulvavic " image={Victor} rings="-" borderColor="black"/>
                <PlayerCard name="ZeroAcesLeft" image={Sarah} rings="-" borderColor="black"/>
            </div>
        </div>
    )
}
