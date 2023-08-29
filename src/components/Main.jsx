import React from "react";
import Info from "./main-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pages from "./info-page";

export default function Main() {
  const stats = pages.map(item =>{
    return(
      <Info name={item.name} link={item.link} language={item.language} timestamp={item.timestamp} country='United States' isFavourite={item.isFavourite} />

    )
  })
  return (
    <>
      <div className="border  ">
        <div className="title font-sans flex justify-between p-4">
          <h1 className="text-3xl font-semibold text-black">Project</h1>
          <button className="border hover:shadow px-10 py-2 rounded-md">
            Sort &nbsp;
            <FontAwesomeIcon icon="fa-solid fa-sort " />{" "}
          </button>
        </div>
        <hr />
        {stats}
     
      
      </div>
    </>
  );
}
