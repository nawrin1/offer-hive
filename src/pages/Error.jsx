import { useNavigate } from 'react-router-dom';
import img1 from '../assets/6338750.jpg'
import {IoIosArrowBack} from 'react-icons/io'

const Error = () => {
    const navigate=useNavigate()
    const handleBack=()=>{

        navigate('/')
    }
    return (
        <div className=' flex flex-col justify-center items-center mx-auto  mt-4'>
            <img className="w-[50%]  justify-center"src={img1} alt="" />
            <button className='lg:btn md:btn lg:w-[10%] md:w-[10%] w-[20%] mt-6 md:bg-yellow-100 lg:bg-yellow-100 bg-yellow-100' onClick={handleBack}> <IoIosArrowBack className='hidden lg:block md:hidden'></IoIosArrowBack>Go Back</button>
            
        </div>
    );
};

export default Error;