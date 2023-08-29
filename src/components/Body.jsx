import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Aside from './Aside'

export default function Body(){
    return(
        <>
        <div className="md:grid md:grid-cols-5 p-0">
        <div className="md:col-span-1 md:p-2 p-3">
            <Sidebar/>
        </div>
        <div className="col-span-3 m-0">
            <Main/>
        </div>
        <div className="md:col-span-1 m-0 md:p-1  bg-gray-100">
            <Aside/>
        </div>
        </div>
        </>
    )
}