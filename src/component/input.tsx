import React, { FC, InputHTMLAttributes } from 'react'

type IProps = InputHTMLAttributes<HTMLInputElement>
type ITextarea = InputHTMLAttributes<HTMLInputElement>

const InputClass = "w-full rounded-[5px] bg-[#af9c9c0d] border border-[#FFFFFF33] py-3 px-3.5 tracking-[-1%] leading-[18.5%] text-[#FFFFFF99] focus:outline-none"

export const Input:FC<IProps> = (props) => {
    const {type,placeholder,...others} = props
  return (
    <input type={type || "text"} placeholder={placeholder} {...others} className={InputClass} />
  )
}


export const Textarea:FC<ITextarea> = (props) => {
    const {placeholder,...others} = props
  return (
    <textarea  placeholder={placeholder} {...others} className={`${InputClass} !h-[73px]`} />
  )
}
