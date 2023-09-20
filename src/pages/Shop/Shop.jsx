import loadingGraphic from "../../assets/images/LipLoading.gif"
function Shop() {
    return (
    <div className={`Shop grid justify-items-center space-y-8 lg:space-y-12 m-8 lg:m-16`}>
      <h1 className={` pt-8 lg:pt-0 
      font-title text-rose-800 text-5xl 
      lg:text-6xl`}>
        MOPHEAD SHOP COMING SOON!
      </h1>
      <img
        alt="Check back soon!"
        src={loadingGraphic}
        className="lg:w-1/2"
      />
    </div>
  );
}

export default Shop;