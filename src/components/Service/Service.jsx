
import{SiPeakdesign} from 'react-icons/si'
import { Link } from 'react-router-dom';
const Service = ({service}) => {
    const {description,deadline,jobtitle,max,min,_id}=service
    console.log(_id)
    return (
        <div className="font-Sora bg-blue-200 p-8 rounded-3xl flex flex-col shadow-2xl shadow-slate-300">
        <div className="flex-1/3 bg-blue-100 p-4 rounded-3xl mb-4">
        <h2 className="lg:text-4xl text-2xl font-semibold text-blue-900 ">{jobtitle}<SiPeakdesign></SiPeakdesign></h2>
                    <hr className="h-[2px] bg-blue-800 mb-8"></hr>
                    <p className="text-xl font-semibold text-slate-600 mb-8">{description.slice(0, 80)}...</p>
        </div>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between flex-1/3 ">
            <div className="mb-8">
                <p className="text-xl font-semibold">Deadline: {deadline}</p>

             </div>
                <div className=''>
                    <p className="text-xl  font-medium">Price: {max}-{min}</p>

                </div>

            </div>
            <Link to={`/details/${_id}`}><div className="flex-1/3 mt-auto"><button className="btn btn-outline bg-purple-900 text-2xl text-white">Bid Now</button></div></Link>
            
        </div>
    );
};

export default Service;