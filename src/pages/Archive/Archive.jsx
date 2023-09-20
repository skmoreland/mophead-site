import ArchivedArt from "../../components/ArchivedArtList/ArchivedArtList";

function Archive() {
    return (
    <div className="Archive font-title m-16">
      <div>
          <h1 className="text-6xl text-pink-600 text-center">
              ARCHIVED WORKS
          </h1>
      </div>
      <ArchivedArt />
    </div>
  );
}

export default Archive;