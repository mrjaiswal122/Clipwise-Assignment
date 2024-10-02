import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import mouse from '../assets/mouse.svg'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
export default function Hero() {
  const [selected,setSelected]=useState(3)
  return (
    <section className="relative w-full h-screen max-h-[900px] bg-theme">
       <svg className='absolute left-20 top-[-67px] blur-3xl transform-rotate-[120deg]' width="790" height="626" viewBox="0 0 514 526" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M231.955 211.341C308.163 7.01157 594.218 16.3122 462.098 -176.205C494.326 -230.476 489.846 -309.932 214.098 -193.59C-130.587 -48.1613 49.0307 289.374 35.7133 355.8C22.3959 422.225 47.5896 450.801 103.898 426.981C160.206 403.162 208.275 423.216 269.095 486.8C329.914 550.383 450.789 551.837 507.648 366.091C564.506 180.345 155.747 415.67 231.955 211.341Z" 
    fill="url(#paint0_linear_1_11)"/>
  <defs>
    <linearGradient id="paint0_linear_1_11" x1="576.223" y1="272.58" x2="37.6443" y2="-47.2533" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FA7FFD" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#E33131" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
       </svg>


       {/* nabar */}
      <nav className='px-[50px] pt-[30px] flex z-10'>
        <div className='flex-[6_6_0%] z-10'>

        <img src={logo} alt="Logo" />
        </div>
        <div className='flex-[4_4_0%] flex justify-between items-center '>
            <ul className='flex gap-[50px]'>
                <li className='text-base text-white'>Home</li>
                <li className='text-base text-white'>Shop</li>
                <li className='text-base text-white'>About Us</li>
                <li className='text-base text-white'>Help</li>
            </ul>
            <div className='flex gap-2 justify-center items-center'>
                <span className='bg-[#ff2b76] rounded-full w-[14px] h-[14px] text-[8px] font-bold text-white flex justify-center items-center'>00</span>
                <img src={cart} alt="cart" />
            </div>
        </div>
       </nav>
      {/* heroDescription */}
      <section id='hero' className='flex px-[50px] pt-[30px] text-white z-10'>
        <div className='flex-[6_6_0%] mt-[150px] z-10'>
        <h3 className='text-4xl'>Welcome to</h3>
        <h1 className='text-7xl font-semibold'>Pop Rock Crystal Shop!</h1>
        <p className='text-[#31546D] text-base w-[400px] mt-[34px]'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
        <div id='buttons' className='mt-10 h-14 z-10'>

        <button className='text-[#317189] h-full rounded-2xl bg-white px-[46px] font-semibold z-10'>SHOP NOW</button>
        <button className='text-[#317189] ml-[40px]'>about us</button>
        </div>
          
        </div>
        {/* hero image */}
        <div className='z-10 flex-[4_4_0%]'>
             <div className='relative h-[554px] shadow-md w-full bg-white mt-[45px] rounded-[50px] flex justify-center items-center'>
              <div className=' my-[50px] mx[103px] h-[454px] w-[362px] flex flex-col justify-center items-center'>
                <span className='absolute bg-[#8A93E5] top-[76px] left-0 text-base px-5 py-2 rounded-br-xl rounded-tr-xl'>New lot</span>
                <img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" width={362} height={362} alt="productImg" />
                <span className='text-[#818181] text-xl uppercase'>Crystal Agate Phone Grip <span className='text-[#317189]'>- 18.99$</span></span>
              </div>
              {/* pagination */}
              <div className='absolute flex gap-6 justify-center items-center bottom-[-50px] z-10 '>
                {/* previous */}
                <span className='w-6 h-6 bg-[#8A93E5] z-10 flex justify-center items-center' onClick={()=>setSelected((previous)=>previous-1)}><FaArrowLeft /></span>

               <div className='flex gap-2'>
                  {[...Array(7)].map((_, index) => (
                  <span key={index} className={`${selected==index ? 'bg-[#8A93E5] ':'bg-[#D7DBFF]'} rounded-full  h-[14px] w-[14px]`}></span>
                    ))}
               </div>

                
                {/* next */}
                <span className='w-6 h-6 bg-[#8A93E5] flex justify-center items-center' onClick={()=>setSelected((previous)=>previous+1)}><FaArrowRight />
                </span>
              </div>
              </div>
              </div>
             
        
      </section>
      {/* wavyStruture */}
      <svg className='absolute bottom-0 z-[1]' width="1440" height="595" viewBox="0 0 1440 595" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M760 428.826C544.368 455.993 234.943 369.057 0 491.311V595H1440V0C1440 0 1296.64 12.6192 1171 88.7324C1025.94 176.606 975.632 401.658 760 428.826Z" fill="white"/></svg>
      {/* scrollButton */}
      <div className='absolute flex z-10 left-[659px] top-[812px]'>
       <img src={mouse} alt="scrollDown" />
       <span>sroll down</span>
      </div>

    </section>
  )
}