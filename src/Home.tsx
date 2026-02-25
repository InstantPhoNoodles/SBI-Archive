import "./Home.css"
import faker from "/1342889.jpeg";

export default function Home() {
    return (
        <>
            <img src={ faker } alt="fake da yo" />
            <div className="banner"><h1>"Where Beaters Become Champions"</h1></div>
        </>
    )
}
