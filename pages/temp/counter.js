import { useState } from "react"
import Image from 'next/image'
export default function Counter(){
    let [count, setCount] = useState(0);

    return (
        <div>
            <div className="flex justify-center">
                <h1>FLEX BOX</h1>  
            </div>
            {/* flex row type */}
            <div className="flex flex-row bg-yellow-400 gap-5"> 
                <div className="border border-purple-400">1.Snickers Jay Magbanua</div>
                <div className="border border-purple-400">2.Jay Snickers Jay Magbanua </div>
                <div className="border border-purple-400">3.Magbanua Jay Snickers Jay</div>
            </div>
                <h1>------------</h1>
                  {/* flex row type */}
            <div className="flex flex-row-reverse bg-yellow-400  gap-5">
                <div className="border border-purple-400">1.Snickers Jay Magbanua</div>
                <div className="border border-purple-400">2.Jay Snickers Jay Magbanua </div>
                <div className="border border-purple-400">3.Magbanua Jay Snickers Jay</div>
            </div>
            <h1>------------</h1>
            {/* flex col type */}
            <div className="flex flex-col bg-yellow-400  gap-5">
                <div className="border border-purple-400">1.Snickers Jay Magbanua</div>
                <div className="border border-purple-400">2.Jay Snickers Jay Magbanua </div>
                <div className="border border-purple-400">3.Magbanua Jay Snickers Jay</div>
            </div>
            <h1>------------</h1>
            {/* flex col type */}
            <div className="flex flex-col-reverse bg-yellow-400  gap-5">
                <div className="border border-purple-400">1.Snickers Jay Magbanua</div>
                <div className="border border-purple-400">2.Jay Snickers Jay Magbanua </div>
                <div className="border border-purple-400">3.Magbanua Jay Snickers Jay</div>
            </div>
                <h1 className="flex justify-center">--------GRID</h1>
            <div class="grid grid-cols-4 grid-flow-col gap-3">
                <div className="bg-yellow-400">01</div>
                <div className="bg-yellow-400">01</div>
                <div className="bg-yellow-400">01</div>
                <div className="bg-yellow-400">09</div>
            </div>
            <h1 className="flex justify-center">--------------Spanning columns</h1>
            <div class="grid grid-cols-3 gap-4">
                <div className="bg-yellow-400">01</div>
                <div className="bg-yellow-400">02</div>
                <div className="bg-yellow-400">03</div>
                <div class="col-span-2 bg-purple-400">04</div>
                <div className="bg-yellow-400">05</div>
                <div className="bg-yellow-400">06</div>
                <div class="col-span-2 bg-purple-400">07</div>
            </div>
            <h1 className="flex justify-center">--------------Starting and ending lines</h1>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4 bg-yellow-400">01</div>
                <div class="col-start-1 col-end-3 bg-yellow-400">02</div>
                <div class="col-end-7 col-span-2 bg-yellow-400">03</div>
                <div class="col-start-1 col-end-7 bg-yellow-400">04</div>
            </div>

            <h1>Card</h1>
            <div className="flex flex-row justify-center bg-yellow-400 gap-5 p-5"> 
                <div className="border border-purple-400 p-5" >
                    <Image src="/image/rocket.gif" width={100} height={80}/>
                    <a href="#">
                        <h3>Noteworthy technology acquisitions 2021</h3>
                    </a>
                    <p className="inline-flex py-2 px-3 text-sm font-medium text-center text-white b">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <div className="border border-purple-400">
                    <Image src="/image/rocket.gif" width={100} height={80}/>
                    <a href="#">
                        <h3>Noteworthy technology acquisitions 2021</h3>
                    </a>
                    <p className="inline-flex py-2 px-3 text-sm font-medium text-center text-white b">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <div className="border border-purple-400">3.Magbanua Jay Snickers Jay</div>
            </div>
        </div>
    )
}   