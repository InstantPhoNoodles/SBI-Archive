export default function YouTubePlayer() {
  return (
    <div className="p-500">
      <iframe
        width="100%"
        height="1300"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
