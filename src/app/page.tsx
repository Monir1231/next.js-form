import { ParsonButton,ContactForm} from '@/component'
import Image from 'next/image'

import { persons } from '@/lib/data'


const HomePage = () => {


  return (
    <div className='flex flex-col justify-start items-center bg-slate-500 w-full'>
      <div className=' text-center py-9'>
        <div>
          <h1 className=' text-6xl font-semibold py-3 text-white'>Get in touch</h1>
          <p className=' text-xl font-medium text-gray-300 text-center'>contact the hublu programmer</p>
         
        </div>
      </div>
      <div className=' w-full  max-w-[1092px]  bg-gray-800 my-11  rounded-md mx-auto'>
        <div className=' w-full h-full p-5 flex justify-between items-start'>

          <div className=' w-full max-w-[416px] p-5 mx-auto text-white space-y-2.5'>
            <h1 className=' text-2xl font-semibold'>Lets contact our team</h1>
           
             <div className=' space-x-2.5 pb-4'>
               {persons.map((item)=>(
              <ParsonButton key={item.id}>{item.name}</ParsonButton>
            ))}
             </div>

           <ContactForm/>


          </div>

       
           
          

           <div className=' w-full  max-w-[516px] '>
           <Image alt='monir' src="/motion.png" height={516} width={536} className=' w-full h-auto'/>
           </div>

        </div>

      </div>
    </div>
  )
}

export default HomePage