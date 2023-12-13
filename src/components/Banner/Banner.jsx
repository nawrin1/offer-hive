import './Banner.css'

import img2 from '../../assets/4565.jpg'
import img3 from '../../assets/Wavy_Bus-44_Single-01.jpg'
import {BiRightArrow} from 'react-icons/bi'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const Banner = () => {
    useEffect(() => {
        Aos.init({
            duration:1500
        });
        Aos.refresh();
      }, []);
    return (
        <div className=''>

            <div className=' banner mt-10  '>
                <div className='flex  justify-center'>
                    <div className='flex-1 relative bottom-48 justify-center hidden lg:block md:block'>
                        <img src={img3} className='w-[50%] h-[350px] lg:w-[70%] lg:h-[430px] md:w-[80%] md:h-[400px] hidden lg:block md:block'alt="" />

                    </div>
                    <div  className=' flex flex-col flex-1 justify-center relative bottom-40'>
                        <p className='text-4xl font-bold font-Sora pt-14 text-center ' data-aos="fade-in" data-aos-duration="3000">Turning Ideas <br /><span>into</span> <br />
                        <span className='text-purple-900 text-5xl' data-aos="fade-in" data-aos-duration="3000">Digital Masterpieces </span><br />of Innovation</p>
                        <p className='font-Sora font-medium text-center text-xl text-slate-800 pt-10' data-aos="fade-in" data-aos-duration="3000">Access powerful developers in remote and mutually trusted setup</p>
                        <div className='mx-auto w-[40%] justify-center flex mt-10'><button className='btn rounded-full bg-purple-800 text-white  hover:bg-purple-500 '>Explore <BiRightArrow></BiRightArrow></button></div>

                    </div>
                </div>

            
            {/* <img src={img1} alt="" /> */}


            
           </div>
        </div>

    );
};

export default Banner;