import React, { useState } from 'react';
import exitIcon from '../../assets/images/exit-icon3.svg'
import archiveJSON from '../../assets/archive/archive.json'
var listOfImages =[];
var popupImage = "";

function importAll(r) {
    return r.keys().map(r)
}

function componentWillMount() {
    listOfImages = importAll(require.context('../../assets/archive/images', false, /\.(png|jpe?g|svg)$/));
}

const ArchivedArt = () => {
    componentWillMount()
    const [showModal, setShowModal] = useState(false);
    var transition = "transition-opacity duration-200 ease-in bg-opacity-100"
    function openModal(image) {
        setShowModal(showModal => !showModal);
        popupImage=image
    };
    return (
        <div className="flex flex-wrap z-10">
            {
            listOfImages.map(
                    (image, index) =>    
                        <div class={`m-4 rounded text-transparent bg-teal-600
                            text-left relative group`} 
                            onClick={()=>openModal(image)}>
                            <img 
                                key={index} 
                                src={image} 
                                alt="info" 
                                className={`h-96 rounded ${transition} hover:opacity-25`} 
                            />
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