import React, { ButtonHTMLAttributes, FC } from 'react'

type IButton = ButtonHTMLAttributes<HTMLButtonElement>
export const ParsonButton:FC<IButton> = ({children}) =>{
   return(
     <button className=' text-sm px-5 py-1 rounded-full bg-slate-300/20 hover:bg-purple-500/20 delay-150 transition-all'>
            {children} </button>
   )
  }


  export const Button:FC<IButton> = ({children}) =>{
   return(
     <button className=' w-full text-sm px-5 py-3 rounded-md bg-purple-600 hover:bg-purple-500 delay-150 transition-all'>
            {children} </button>
   )
  }
