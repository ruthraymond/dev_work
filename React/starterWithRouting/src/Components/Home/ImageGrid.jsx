import React from 'react';
import Image1 from './InternationalHouse.jpeg';
import Image2 from './InternationalHouse2.jpeg';



const ImageGrid = () =>{

    return (
        <div >
            <img src={Image1} alt="" />
            <img src={Image2} alt=""  />
        </div>


    );

};

export default ImageGrid;