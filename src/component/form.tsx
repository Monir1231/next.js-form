"use client"

import React, { useEffect, useState } from 'react'
import { Input,Textarea} from './input'
import { Button } from './Button'

interface ContactForm {
  firstName?:string
  lastName?:string
  name:string
  email:string
  message:string
}

 const defaultValue:ContactForm = { name:"",email:"",message:"",firstName:"",lastName:""}

export const ContactForm = () => {

  const [data,setdata] = useState<ContactForm>(defaultValue)
  // const [FirstName,setFirstName] = useState("")
  // const [LastName,setLastName] = useState("")

 

  // useEffect(()=>{
  //  setdata((prv)=>(
  //   {...prv, name:`${FirstName} ${LastName}`}
  //  ))
  // },[FirstName,LastName])

  
  type InputEvent = ChangeEvent <HTMLInputElement | HTMLTextAreaElement>

  const handleChange = (e:InputEvent) =>{
    const {name,value} = e.target || {}
    setdata((prv)=>({...prv,[name]:value, name:name ==='firstName' || name  ==='lastName' ? (`${name === 'firstname' ? value.trim():data.firstName}: ${name==='lastName'? value.trim() : data.lastName}`).trim() :prv.name}))
  }

  console.log(data)

  const handlesubmit = (e:FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      console.log(data)
  }
  return (
    <form onSubmit={handlesubmit} className=' space-y-3.5'> 
        <div className=' flex items-center justify-between gap-1.5'>
          <Input onChange={handleChange} name='firstName' placeholder='First Name'/>
          <Input onChange={handleChange} name='lastName'  placeholder='last Name'/>
        </div>
        <Input placeholder='Email' name='email' type='email' onChange={handleChange} />
        <Textarea placeholder='massege' name='massege'  onChange={handleChange}/>
        <Button type='submit'>Submit  <span className=' '>🚀</span></Button>


    </form>
  )
}
