import React, { useState } from 'react';
import exitIcon from '../../assets/images/exit-icon3.svg'
var listOfImages =[];
var imageNames = [];
var popupImage = "";
function importAll(r) {
    imageNames = r.keys()
    return r.keys().map(r)
}

function componentWillMount() {
    listOfImages = importAll(require.context('../../assets/archive/', false, /\.(png|jpe?g|svg)$/));
}

const ArchivedArt = () => {
    componentWillMount()
    const [showModal, setShowModal] = useState(false);

    function openModal(image) {
        setShowModal(showModal => !showModal);
        popupImage=image
    };
    return (
        <div className="flex flex-wrap z-10">
            {
            listOfImages.map(
                    (image, index) =>    
                        <div class={`m-8 bg-pink-600 rounded text-transparent hover:text-white text-left relative group`}>
                            <img 
                                key={index} 
                                src={image} 
                                alt="info" 
                                onClick={()=>openModal(image)}
                                className="h-80 rounded hover:opacity-30" 
                            />
                            <h3 className="absolute inset-x-0 bottom-0 m-4">
                                    {imageNames[index]}
                            </h3>
                        </div>
                    )
            }
            {showModal && (
                <div className="fixed top-0 left-0 z-[1000] w-screen h-screen bg-black/70 flex justify-center items-center">
                    <img
                        src={popupImage}
                        alt="popup"
                        className="max-h-[800px] object-cover rounded"
                    />
                    <button
                        onClick={openModal}
                        className="fixed z-90 top-6 right-8 text-white text-xl"
                    >
                        <img 
                            src={exitIcon}
                            alt="Close"
                            className="w-20 hover:fill-black"
                        />
                    </button>
                </div>
            )}
        </div>
    );
  }

export default ArchivedArt