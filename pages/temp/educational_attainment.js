import NavBarLayout from "./navbar_layout"
import Link from 'next/link'
export default function EducationalAttainment(){
    return(
        <div>   
            <div class="mt-6 mb-8 mx-12 p-14 font-sans">
                <form> 
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div class="">
                            <label for="fathers_name" class="block mb-2 ont-medium ">Father's Name</label>
                            <input type="text" id="fathers_name" class="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name, First Name, Middle Initial"/>
                        </div>

                        <div>
                            <label for="last_name" class="block mb-2 ont-medium">Contact Number</label>
                            <input type="number" id="contacts" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" />
                        </div>

                        <div>
                            <label for="company" class="block mb-2 ont-medium">Mother's Name</label>
                            <input type="text" id="company" class=" border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name, First Name, Middle Initial" />
                        </div>  

                        <div>
                            <label for="phone" class="block mb-2 ont-medium">Contact number</label>
                            <input type="number" id="contacts" class="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required=""/>
                        </div>

                    </div>
                        <div class="mb-6">
                            <label for="Guardian's" class="block mb-2 ont-medium">Parent's Address</label>
                            <input type="text" id="parent" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street Number, Sitio/Purok, Barangay, Municipality/City, Town, Province" required=""/>
                        </div> 

                    <div class="grid gap-6 mb-6 md:grid-cols-2">

                        <div class="">
                            <label for="guardian" class="block mb-2 ont-medium">Guardians's Name</label>
                            <input type="text" id="guardian" class=" border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name, First Name, Middle Initial" />
                        </div>  

                        <div>
                            <label for="phone" class="block mb-2 ont-medium">Contact number</label>
                                <input type="number" id="contacts" class="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required=""/>
                            </div>
                    </div>

                        <div class="mb-6">
                            <label for="Guardians" class="block mb-2 ont-medium">Guardian's Name</label>
                            <input type="text" id="guardian" class="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street Number, Sitio/Purok, Barangay, Municipality/City, Town, Province" required=""/>
                        </div> 
                
                    <div class="flex justify-center space-x-4 mb-5 mt-6 text-yellow-500 font-bold">
                       <Link href="/family_background"><button class="rounded-full bg-indigo-900 px-10 py-2">NEXT</button></Link>
                        
                        <Link href="#"><button class="rounded-full bg-indigo-900 px-10 py-2">NEXT</button></Link>
                    </div>

                </form>
            </div>
        </div>
    ); 
}

EducationalAttainment.getLayout = function getLayout(page) {
    return (
        <NavBarLayout>
            {page}
        </NavBarLayout>
    );
}