
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
export default function NavBarLayout({ children, currentTab }) {
    const [val, setVal] = useState(0);
    const [shownav, setShownav] = useState(false);

    const router = useRouter();
    useEffect(() => {
        console.log(router.asPath);
        if (router.asPath == '/main') {
            setVal(0);
        } else if (router.asPath == '/family_background') {
            setVal(1);
        } else if (router.asPath == '/educational_attainment') {
            setVal(2);
        }
    });
    return (
        <div className="h-full w-full flex-col">
            {/* navbarhead */}
            <nav className="sticky top-0 bg-blue-900 flex w-full md:bg-blue-900 p-3">
                <div className="">
                    <Link href="/main"><a><img className="h-16" src="image/logo1.png" /></a></Link>
                </div>
            </nav>
            {/* menubar */}
            <div className="flex flex-col bg-blue-900 md:hidden">
                <button type="" onClick={() => setShownav(!shownav)}>
                    <div className="border-2 w-10 h-px flex justify-center mt-2 mx-4 "></div>
                    <div className="border-2 w-10 h-px flex justify-center mt-2 mx-4"></div>
                    <div className="border-2 w-10 h-px flex justify-center mt-2 mb-2 mx-4"></div>
                </button>
            </div>
            <div className="flex w-full flex-col md:flex-row">
                {/* sidebar */}
                {
                    shownav && (
                    <div className="flex-none w-50 shadow-md bg-blue-900 font-bold sm:hidden">
                        <ul className="">
                            <li className="">
                                <a className="block text-2xl md:text-xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-500 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-500 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">link 1</a>
                            </li>
                            <li className="">
                                <a className="block text-2xl md:text-xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-500 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-500 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">link 2</a>
                            </li>
                            <li className="">
                                <a className="block text-2xl md:text-xl flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-500 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-500 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">link 3</a>
                            </li>
                        </ul>
                    </div>
                )}
                {/* stepper */}
                <div className="flex-1 ">
                    <div className="flex justify-center text-5xl font-sans  mt-10 mb-10  md:text-text-7xl">
                        <h3>PMMA Admission</h3>
                    </div>
                    <div className="items-center flex justify-center ">
                        <div>
                            <h4 className="text-xl">Personal Information</h4>
                            <div className={`rounded-full border-2 h-20 w-20 ${val >= 0 ? "bg-yellow-500 " : "bg-slate-500 "}`}></div>
                        </div>
                        <div className="border-solid border-2 border-blue-500 leading-4 h-px w-40"></div>
                        <div>
                            <h4 className="text-xl">Family Background</h4>
                            <div className={`rounded-full border-2 h-20 w-20 ${val >= 1 ? "bg-yellow-500 " : "bg-slate-500 "}`}></div>
                        </div>
                        <div className="border-solid border-2 border-blue-500 leading-4 h-px w-40"></div>
                        <div>
                            <h4 className="text-xl">Educational Attainment</h4>
                            <div className={`rounded-full border-2 h-20 w-20 ${val >= 2 ? "bg-yellow-500 " : "bg-slate-500 "}`}></div>
                        </div>
                    </div> 
                <div className="flex justify-center mt-6">
                    <h3>Note: Please put N/A if not applicable.</h3>
                </div>
                {children}
                </div>
            </div>

            <div className="bg-blue-900 flex w-full justify-center p-3 text-yellow-500">
                <h1>Copy Right @2022 koda kollectiv</h1>
            </div>
        </div>
    )
}