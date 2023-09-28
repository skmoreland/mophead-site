import town from "../../assets/images/town-art.png"
import longneck from "../../assets/images/longneck.png"
import faces from "../../assets/images/Digital Face.png"
import longneckMobile from "../../assets/images/longneckers.png"

function Home() {
    return (
    <div className="Home font-body text-left text-black lg:text-white space-y-8 m-8 lg:m-16 ">
        <h1 className={`font-title text-5xl text-black 
            lg:text-6xl lg:text-purple-700 text-center`}>
            ABOUT ME
        </h1>
        <div className="items-center place-content-center transition-opacity lg:flex">
            <img 
                src={town} 
                alt="Town" 
                className={`w-1/2 rounded hidden lg:flex`}/>
            <img 
                src={faces}
                alt="Faces"
                className={`pb-8 lg:hidden`}
                />
            <div className={`
            rounded 
            bg-white
            lg:p-8  
            lg:bg-purple-700
            lg:-ml-60 lg:w-1/3`}>
                <h1 className="font-title text-4xl mb-4">MY STORY</h1>
                <p className="font-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className={`flex items-center place-content-center`}>
            <div className={`
            bg-white rounded
            lg:p-8  
            lg:bg-purple-700
            lg:-mr-60 lg:w-1/3 lg:z-10`}>
                <img 
                src = {longneckMobile}
                alt = "Longneck Art"
                className={`pb-8 lg:hidden`}
                />
                <h1 className="font-title text-4xl mb-4">MY ART</h1>
                <p className="font-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <img src={longneck} alt="Longneck" className="w-1/2 z-0 rounded hidden lg:flex"/>
        </div>
    </div>
  );
}

export default Home;