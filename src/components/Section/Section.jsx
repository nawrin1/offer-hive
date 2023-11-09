// import {GrUserWorker} from 'react-icons/gr'
import{GrWorkshop} from 'react-icons/gr'
import {BiCheckDouble} from 'react-icons/bi'

const Section = () => {
    return (
        <div className='font-Sora my-40'>
            <h2 className='text-center text-5xl mb-10 font-bold '>How It <span className='text-purple-900'>Works?</span></h2>
            <div className='bg-purple-100 py-20'>
              <div className='flex-col justify-center mx-auto mb-10 px-4 gap-y-2'>
                <div className='text-center  lg:w-[50%] mx-auto lg:mb-20 mb-4'>
                    <div className='flex justify-center'><div><h2 className='lg:text-3xl md:text-2xl font-bold text-purple-950 mb-4 text-2xl'>Active matching</h2></div><div><BiCheckDouble className='lg:text-4xl md:text-xl text-xl '></BiCheckDouble></div></div>
                    <p className='text-center text-slate-600 leading-7'>Offer Hive presents your anonymous profile to verified employers based on matching skills, compensation range. Employers then can accept or reject your bids and create connection via Offer Hive</p>
                </div>
              <div className='flex lg:flex-row md:flex-col flex-col max-w-6xl mx-auto'>
             
                
                <div className='flex-1 mb-4'>
                <div className='flex justify-center'><div><h2 className='lg:text-3xl md:text-2xl text-2xl font-bold text-purple-950 mb-4 '>Assessment</h2></div><div><BiCheckDouble className='lg:text-4xl md:text-xl text-xl'></BiCheckDouble></div></div>
                    <p className=' text-slate-600 leading-7 text-center lg:text-left '>Assessment is another important factors in job sectors and for this Offer Hive is the perfect place These evaluations help job seekers understand their strengths and weaknesses, ultimately guiding them toward roles where they can excel.</p>
    
                </div>
                <div className='flex-1  text-center justify-center items-center mx-auto hidden lg:block '>
    <div className=''>
        <GrWorkshop className='mx-auto lg:text-[200px] md:text-[100px] text-[50px]' />
    </div>
    </div>
                    <div className='flex-1 '>
                    <div className='flex justify-center'><div><h2 className='lg:text-3xl md:text-2xl font-bold text-purple-950 mb-4 text-2xl'>Connectivity</h2></div><div><BiCheckDouble className='lg:text-4xl md:text-xl text-xl '></BiCheckDouble></div></div>
                <p className=' text-slate-600 leading-7 text-center lg:text-right '>In the realm of online job seeking, connecting with employers is about establishing meaningful and direct interactions between job seekers and potential employers. Offer Hive is the perfect place for the perfect opportunity</p>
    
                </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Section;