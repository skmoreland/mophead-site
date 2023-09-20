import ArchivedArt from "../../components/ArchivedArtList/ArchivedArtList";

function Archive() {
    return (
    <div className="Archive font-title m-8 lg:m-16">
      <div>
          <h1 className="pt-2 lg:pt-0 text-5xl text-pink-600 text-center lg:text-6xl ">
              ARCHIVED WORKS
          </h1>
      </div>
      <ArchivedArt />
    </div>
  );
}

export default Archive;