import React, { useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// export default function Info(props){

//     return(
//         <>
//         <div className="text-gray-600 content p-4">
//         <div className="upper-content flex justify-between">
//           <h3>{props.name}</h3>

//           <div className="">
//             Visit Site &nbsp;&nbsp; &nbsp;&nbsp;
           
//            <button>
//                 {props.isFavourite ?
//             <FontAwesomeIcon icon="fa-solid fa-star "  className="text-yellow-400 cursor-pointer" /> :  <FontAwesomeIcon icon="fa-solid fa-star "  className="text-gray-500 cursor-pointer"/>} 
//             </button>
         
//           </div>
//         </div>
//         <div className="lower-content block md:flex  mt-4 justify-between">
//           <div className="">
//             <p>{props.link}</p>
//           </div>
//           <div className="inline-flex mt-4 md:mt-0">
//             <p >{props.language}</p>
//             <p className="ml-3">{props.timestamp}</p>
//             <p className="ml-3">{props.country}</p>
//           </div>
//         </div>
//       </div>
//       <hr/>
//     </>
//     )
// }

const Info = ({ name, link, language, timestamp, country, isFavourite }) => {
  const [favourite, setFavourite] = useState(isFavourite);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <>
      <div className="text-gray-600 content p-4">
        <div className="upper-content flex justify-between">
          <h3>{name}</h3>

          <div className="">
            Visit Site &nbsp;&nbsp; &nbsp;&nbsp;
            <button onClick={handleClick}>
              {favourite ? <FontAwesomeIcon icon="fa-solid fa-star" className="text-yellow-400 cursor-pointer" /> : <FontAwesomeIcon icon="fa-solid fa-star" className="text-gray-500 cursor-pointer" />}
            </button>
          </div>
        </div>
        <div className="lower-content block md:flex  mt-4 justify-between">
          <div className="">
            <p>{link}</p>
          </div>
          <div className="inline-flex mt-4 md:mt-0">
            <p >{language}</p>
            <p className="ml-3">{timestamp}</p>
            <p className="ml-3">{country}</p>
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
};

export default Info;