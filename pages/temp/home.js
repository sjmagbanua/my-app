import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import NavBarLayout from "./navbar_layout"

export default function Home(){

    // const steps = [
    //     "Personal",
    //     "FamilyBackground",
    //     "EducationalAttainment"];
        
    //     const handleNext = () => {
    //         setActiveStep((prevActiveStep) => prevActiveStep + 1)
        
    //         if (activeStep === steps.length - 1) {
    //             handleCaptureCheckout()
    //         }
    //     }    
      
    return (
        <h1>Hello World</h1>
            
           
    )   

}
Home.getLayout = function getLayout(page) {
    return (
        <NavBarLayout currentTab="personal">
            {page}
        </NavBarLayout>
    );
}