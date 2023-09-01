import town from "../../assets/images/town-art.png"
import longneck from "../../assets/images/longneck.png"

function Home() {
    return (
    <div className="Home m-16 font-marker text-left text-white space-y-8">
        <h1 className="text-6xl text-indigo-900 text-center">About Me</h1>
        <div className="flex items-center place-content-center">
            <img src={town} alt="Town" className="w-1/2 rounded"/>
            <div className="p-8 -ml-60 bg-indigo-900 w-1/3 rounded">
                <h1 className="text-3xl mb-4">My Story</h1>
                <p className="font-gluten">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className="flex items-center place-content-center">
            <div className="p-8 -mr-60 z-10 w-1/3 bg-indigo-900 rounded">
                <h1 className="text-3xl mb-4">My Art</h1>
                <p className="font-gluten">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <img src={longneck} alt="Longneck" className="w-1/2 z-0 rounded"/>
        </div>
    </div>
  );
}

export default Home;