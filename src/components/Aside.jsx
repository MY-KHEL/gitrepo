import React from "react";
import projects from "./aside-info";

export default function Aside() {
    const adise_details = projects.map(detail =>{
        return(
            <><div className="grid grid-cols-5 pt-4  pb-4 border-b  gap-4 ">
             <div className="col-span-1">
                <img src="images/j-mckinney-zIo9Fbh8qJc-unsplash.jpg" className="w-8 h-8 rounded-full" alt="" />
            </div> 
            <div className="col-span-3">
                <p className="text-sm font-semibold text-gray-700">Deployed {detail.name} ({detail.serial} in master ) to {detail.location}</p>
            </div>
            <div className="col-span-1">{detail.timeframe}</div>
        
            </div>
            </>
        )
    })

    return(
        <>
        <div className="p-2">
        <h1 className=" font-semibold text-3xl mb-4">Activity</h1>
        
        {adise_details}
        </div>
           
           
        </>
    )
}