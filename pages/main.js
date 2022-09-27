import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import NavLayout from "./nav_layout"

export default function Main(){
    return (
        
        <div className="w-full">
        <div className="mt-6 mb-8 p-14 font-sans">
            <form>  
                <div className="grid gap-5 mb-6 md:grid-cols-2">
                    <div>
                        <label for="fathers_name" className="block mb-2 ont-medium md:text-">Father's Name</label>
                        <input type="text" id="fathers_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name, First Name, Middle Initial"/>
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 ont-medium">Contact Number</label>
                        <input type="number" id="contacts" className=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" />
                    </div>
                    <div>
                        <label for="company" className="block mb-2 ont-medium">Mother's Name</label>
                        <input type="text" id="company" className=" border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name, First Name, Middle Initial" />
                    </div>  
                    <div>
                        <label for="phone" className="block mb-2 ont-medium">Contact number</label>
                        <input type="number" id="contacts" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required=""/>
                    </div>
                </div>
                    <div className="mb-6">
                        <label for="Guardian's" className="block mb-2 ont-medium">Parent's Address</label>
                        <input type="text" id="parent" className=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street Number, Sitio/Purok, Barangay, Municipality/City, Town, Province" required=""/>
                    </div> 
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="">
                        <label for="guardian" className="block mb-2 ont-medium">Guardians's Name</label>
                        <input type="text" id="guardian" className=" border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name, First Name, Middle Initial" />
                    </div>  
                    <div>
                        <label for="phone" className="block mb-2 ont-medium">Contact number</label>
                            <input type="number" id="contacts" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required=""/>
                        </div>
                </div>
                    <div className="mb-6">
                        <label for="Guardians" className="block mb-2 ont-medium">Guardian's Name</label>
                        <input type="text" id="guardian" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street Number, Sitio/Purok, Barangay, Municipality/City, Town, Province" required=""/>
                    </div> 
                <div className="flex justify-center space-x-4 mb-5 mt-6 text-yellow-500 font-bold">
                    <Link href="/main"><button className="rounded-full bg-indigo-900 px-10 py-2">Back</button></Link>
                    <Link href="/family_background"><button className="rounded-full bg-indigo-900 px-10 py-2">NEXT</button></Link>
                </div>
            </form>
        </div>
    </div>
    )   

}
Main.getLayout = function getLayout(page) {
return (    
    <NavLayout currentTab='main'>
        {page}
    </NavLayout>        
);
}