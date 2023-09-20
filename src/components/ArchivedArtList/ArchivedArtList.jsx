import React, { useState } from 'react';
import exitIcon from '../../assets/images/exit-icon3.svg'
import archiveJSON from '../../assets/archive/archive.json'
var popupImage = "";

const ArchivedArt = () => {
    const [showModal, setShowModal] = useState(false);
    var transition = "transition-opacity duration-150 ease-in bg-opacity-100"
    function openModal(image) {
        setShowModal(showModal => !showModal);
        popupImage=image
    };
    return (
        <div className="flex justify-center flex-wrap z-10 pt-8">
            {
            archiveJSON.map(
                    (item) =>    
                        <div class={`m-1 lg:m-4 rounded text-transparent bg-darkteal
                            text-left relative group`} 
                            onClick={()=>openModal(item)}>
                            <img 
                                key={item.title} 
                                src={require(`../../assets/archive/images/${item.image}`)} 
                                alt={item.title}
                                className={`h-48 lg:h-96 rounded 
                                ${transition} hover:opacity-25 
                                text-white
                                `} 
                            />
                            
                        </div>
                    )
            }
            {showModal && (
                <div className={`fixed top-0 left-0 z-[1000] 
                w-screen h-screen 
                bg-black/70 
                flex justify-center items-center`}>
                    <div className="space-y-4 text-white m-4 lg:m-0">
                        <img
                            src={require(`../../assets/archive/images/${popupImage.image}`)}
                            alt="popup"
                            className="max-h-[700px] object-cover rounded"
                        />
                        <h1 className="text-3xl">{popupImage.title}</h1>
                        <h2 className="text-2xl">{popupImage.created}</h2>
                    </div>
                    <button
                        onClick={openModal}
                        className="fixed z-90 top-6 right-8 text-white text-xl"
                    >
                        <img 
                            src={exitIcon}
                            alt="Close"
                            className=" w-16 lg:w-20 hover:fill-black"
                        />
                    </button>
                </div>
            )}
        </div>
    );
  }

export default ArchivedArt