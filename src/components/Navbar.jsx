import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





export default function NavBar() {
  return (
    <div className="bg-indigo-600 text-gray-300 shadow-lg md:shadow-md mb-0 px-2 py-3 w-full md:grid md:grid-cols-4">
      <div className="md:col-span-1 flex justify-between ">
        <FontAwesomeIcon icon="fa-solid fa-code " size="2x" />
        <FontAwesomeIcon
          icon="fa-solid fa-bars-staggered"
          className="opacity-100 md:opacity-0 cursor-pointer"
          size="2x" onClick={openMenu} 
        />
      </div>
      <div className=" hidden md:flex md:col-span-2 px-2 mt-3 md:mt-0">
        <input
          type="text"
          className="w-full rounded-md p-1 bg-indigo-500"
          placeholder="Search Projects"
        />
      </div>
      <div className="md:col-span-1">
        <ul className="  md:flex  -z-10 md:z-auto md:items-center md:justify-evenly  absolute md:static right-0 md:right-auto w-0  md:w-full md:pt-0 md:pl-3  transition-all md:transition-none ease-in duration-100 "> 
          <span className="flex  items-end justify-end md:hidden">
          <FontAwesomeIcon icon="fa-solid fa-close " size="2x" className="cursor-pointer md:hidden hidden  p-2 " id="close" onClick={closeMenu} />
         </span>
         <li className="mb-2 p-3 md:p-0 md:hidden block md:mb-0">
          <input
          type="text"
          className=" w-full rounded-md  p-1   bg-indigo-500"
          placeholder="Search Projects"
        /> </li>
          <li className="mb-2 hidden  md:flex -mt-4 md:mb-0 md:mt-0">
            <a href="." className="block md:flex hover:text-white p-3 md:p-0 rounded-md" >Dashboard</a>
          </li>
          <li className="mb-2 hidden md:flex md:mb-0">
            <a href="."  className="block md:flex hover:text-white p-3 md:p-0" >Domain</a>
          </li>
          <li className="mb-2 hidden md:flex md:mb-0">
           <img src="Taylor.jpg" alt="" className="h-8  hidden md:flex w-8 rounded-full"/>
          </li>
          
         
{/*           
          <img src="/images/taylor.jpg" className="w-10 h-10 rounded-full ml-3 md:ml-0" alt="" /> */}
        </ul>
      </div>
      
    </div>
  );
  
}
function openMenu(e){
  
  let list = document.querySelector('ul');
  let listItems = document.querySelectorAll('li')
  let closebtn = document.getElementById('close')

  closebtn.classList.remove('hidden')
  closebtn.classList.add('flex')

  list.classList.remove("w-0");
  list.classList.add("w-2/3",'h-full','top-0','shadow-2xl','bg-indigo-600','z-40','block');


  for (var items in listItems){
    
    listItems[items].classList.remove('hidden')
    listItems[items].classList.add('block')
    // console.log(listItems[items].classList)
  }
  
}
function closeMenu(){
  let list = document.querySelector('ul');
  let listItems = document.querySelectorAll('li')
  let closebtn = document.getElementById('close')

  closebtn.classList.remove('flex')
  closebtn.classList.add('hidden')

  list.classList.remove("w-2/3",'h-full','top-0','shadow-2xl','bg-indigo-600','z-40','block');
  list.classList.add("w-0");


  for (var items in listItems){
    
    listItems[items].classList.remove('block')
    listItems[items].classList.add('hidden')
    // console.log(listItems[items].classList)
  }
  
// alert('yoyo')
}