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
                <PlayerCard name="Choke" image={Jevoni} rings="☆ ☆ ☆" borderColor="goldenrod" info="Mickey Mouse Hall of Famer"/>
                <PlayerCard name="Coby" image={Coby} rings="☆ ☆ ☆" borderColor="goldenrod" info="goat"/>
                <PlayerCard name="Yaastoevsky" image={Dylan} rings="☆ ☆ ☆" borderColor="goldenrod" info="beautiful"/>
                <PlayerCard name="Kino" image={Kino} rings="☆ ☆ ☆" borderColor="goldenrod" info="cho gath"/>

                <PlayerCard name="Toyote" image={Gabe} rings="☆☆" borderColor="silver" info="gorgeous"/>
                <PlayerCard name="Munson" image={Munson} rings="☆☆" borderColor="silver" info="bard"/>

                <PlayerCard name="Swegy" image={Lance} rings="☆" borderColor="rgb(204, 92, 0)" info="white boy with motion"/>
                <PlayerCard name="Kenma" image={Ken} rings="☆" borderColor="rgb(204, 92, 0)" info="kenmanutfitinhermouth?"/>
                <PlayerCard name="Futaboy" image={Mirza} rings="☆" borderColor="rgb(204, 92, 0)" info="pedo"/>
                <PlayerCard name="Marcy" image={Marcy} rings="☆" borderColor="rgb(204, 92, 0)" info="lucifer"/>
                <PlayerCard name="Colada" image={Rohan} rings="☆" borderColor="rgb(204, 92, 0)" info="indian"/>
                <PlayerCard name="Sheen" image={Sean} rings="☆" borderColor="rgb(204, 92, 0)" info="beloved"/>
                <PlayerCard name="Squidlette" image={Naomi} rings="☆" borderColor="rgb(204, 92, 0)" info="naomi??"/>
                
                <PlayerCard name="Suckonemvulvavic " image={Victor} rings="-" borderColor="black" info="deceased"/>
                <PlayerCard name="ZeroAcesLeft" image={Sarah} rings="-" borderColor="black" info="lost top lane"/>
            </div>
        </div>
    )
}
