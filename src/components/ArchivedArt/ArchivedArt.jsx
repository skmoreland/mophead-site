import React from 'react';

var listOfImages =[];
var imageNames = [];

function importAll(r) {
    imageNames = r.keys()
    return r.keys().map(r)
}

function componentWillMount() {
    listOfImages = importAll(require.context('../../assets/archive/', false, /\.(png|jpe?g|svg)$/));
}

const ArchivedArt = () => {
    componentWillMount()
    return (
        <div className="flex flex-wrap">
            {
            listOfImages.map(
                    (image, index) =>    
                    <div class="m-8 bg-pink-600 rounded text-transparent hover:text-white text-left relative group">
                        <img key={index} src={image} alt="info" className="h-80 rounded hover:opacity-30" />
                        <h3 className="absolute inset-x-0 bottom-0 m-4">{imageNames[index]}</h3>
                    </div>
                    )
            }
        </div>
    );
  }

export default ArchivedArt