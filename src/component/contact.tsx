"use client"

import {Parsons } from '@/lib/data'
import React, { useState } from 'react'
import { ParsonButton } from './Button'
import { ContactForm } from './form'
import { Iparson } from '@/type/type'


const ContactUs = () => {

    const [selectedParson, setSelectedParson] = useState<Iparson[]>([])
    console.log(selectedParson)

  const handleSelect = (parson : Iparson) =>{
    if(selectedParson.includes(parson)){
    setSelectedParson((prv)=>prv.filter((item)=>item.id !== parson.id))
    }else{
      setSelectedParson((prv)=>[...prv,parson])
    }
  }

  return (


     <div className=" w-full max-w-[416px] p-5 mx-auto text-white space-y-2.5">
                <h1 className=" text-2xl font-semibold">Lets contact our team</h1>
    
                <div className=" space-x-2.5 pb-4">
                  {Parsons.map((item) => (
                    <ParsonButton onClick={()=> handleSelect(item)} key={item.id} className={
                      selectedParson.includes(item) ? " bg-gradient-to-r bg-pink-500 text-white from-10% " : ""
                    }>{item.name} </ParsonButton>
                  ))}
                </div>
    
                <ContactForm/>
              </div>
    
  )
}

export default ContactUs