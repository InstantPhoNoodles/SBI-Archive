import YouTubePlayer from "./YouTubePlayer";
import "./Replays.css"

export default function SBI2() {
    return (
        <div className="ReplaysPage">
            <div className="Banner">
                <h1>SBI Replays</h1>
            </div>

            <div className="ReplayContainer">
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
