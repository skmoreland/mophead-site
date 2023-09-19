import loadingGraphic from "../../assets/images/LipLoading.gif"
function Shop() {
    return (
    <div className="Shop m-16 grid justify-items-center space-y-12">
      <h1 className="font-title text-amber-800 text-6xl">
        Mophead shop coming soon!
      </h1>
      <img
        alt="Working on it"
        src={loadingGraphic}
        className="w-1/2"
      />
    </div>
  );
}

export default Shop;