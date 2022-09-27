import { useState } from "react"
import Link from 'next/link'
import Footer from '../comps/footer'
import Header from "../comps/Header"

export default function Home(){
    return (
        <div>
            <nav class="bg-indigo-900 mx-2 p-3 text-white">
                <div class="flex justify-start gap-5"> 
                    <div>
                        <Link href="/personal"><a><img class="h-16" src="image/logo1.png"/></a></Link> 
                    </div>
                </div>
            </nav>
            <div class="flex flex-row">
              <h1>This is a HOMEPAGE</h1>
            </div>     
           <Footer/>
        </div>
    )   
}