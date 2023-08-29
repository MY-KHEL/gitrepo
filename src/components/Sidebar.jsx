import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar(){
    return(
       <>
       <div className=" inline-flex md:block  xl:inline-flex">
        <img src="images/Taylor.jpg" alt="" className="w-10 h-10 mt-1 rounded-full inline" />
        <div className="inline ml-3">
            <p className="text-black xl:font-semibold font-sans text-sm ">Oyebo Boluwatife</p>
            <p className="text-gray-700 xl:font-semibold small-text ">@cleanbeebrandings</p>
        </div>
       </div>
       <div className="mt-3">
        <button className="bg-indigo-600 rounded-md p-3 shadow-lg block w-full font-semibold text-white">New Project</button>
        <button className=" border-gray-400 border rounded-md  mt-2 p-3 block font-semibold w-full font-sans">Invite Team</button>
       </div>
       <div className="mt-3">
      <p className="font-normal text-gray-400"> <FontAwesomeIcon icon="fa-solid fa-certificate " size="1x"  className="text-gray-400"/> Pro Member</p>
      <p className="font-normal mt-3 text-gray-400"> <FontAwesomeIcon icon="fa-solid fa-rectangle-list" size="1x"  className="text-gray-400"/> 8 Projects</p>
       </div>
       </>
    )
}