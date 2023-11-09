import { useLoaderData, useNavigate } from "react-router-dom";
import {FaDollarSign} from 'react-icons/fa6'

import img1 from '../../assets/7484902.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
const JobDetails = () => {
    const data=useLoaderData()
    const navigate=useNavigate()
    console.log(data,"dattt")
    const {description,deadline,jobtitle,max,min,_id,email}=data
    console.log(email)
    const {user}=useContext(AuthContext)
    const handleBids=e=>{
        e.preventDefault()
        const price=e.target.price.value
        const deadline=e.target.deadline.value
        const userEmail=e.target.email.value
        const buyerEmail=e.target.bEmail.value
        const title=e.target.title.value

        console.log(price,deadline,userEmail,buyerEmail)
        const bids={price,deadline,userEmail,buyerEmail,title,status:"pending"}
        fetch('http://localhost:3000/allBids', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(bids)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Bid Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/myBids")
                
            }
        })

    }
    return (
        <div className="min-h-screen my-12 max-w-6xl mx-auto p-4">
            <h2 className="text-center font-bold font-Sora text-3xl lg:text-5xl md:text-4xl text-purple-900 mb-20">{jobtitle}</h2>
            <div className="flex">
                <div>
                    <p className="lg:text-2xl md:text-2xl mb-24 lg:leading-10 md:leading-10 text-justify text-slate-600">{description}</p>
                    <div className="lg:text-3xl text-2xl font-Sora font-semibold w-full">
                        <p className="mb-10 text-blue-900">Deadline:  {deadline}</p>
                        {/* <p>Price  Range:  {price} </p> */}
                        <div className="flex"><p>Price  Range:  {max}-{min} </p ><FaDollarSign className="hidden lg:block md:block"></FaDollarSign></div>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            
            <div className="my-20">
                <h2 className="text-4xl font-Sora font-medium text-center mb-10 ">Place Your Bid</h2>
                <div className="bg-[#c4dde9] p-16">
            
            <form onSubmit={handleBids}>
                
                <div className="md:flex text-2xl font-Sora">
                <div className="form-control md:w-1/2 w-full lg:w-1/2">
                        <label className="label">
                            <span className="">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={jobtitle}placeholder="title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 w-full lg:w-1/2">
                        <label className="label">
                            <span className="">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2 w-full lg:w-1/2">
                        <label className="label"> 
                            <span className="">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                <div className="md:flex mb-6 text-2xl font-Sora mt-3">
                    <div className="form-control md:w-1/2 w-full lg:w-1/2">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={user.email} placeholder="your email" disabled className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-2 w-full lg:w-1/2">
                        <label className="label">
                            <span className="">Buyer Email</span>
                        </label>
                        <label className="input-group" >
                            <input type="email" name="bEmail" defaultValue={email} placeholder="buyer email" className="input input-bordered w-full" disabled/>
                        </label>
                    </div>
                </div>
                {/* {
                    
                 user.email==email <input type="submit" value="Bid On The Project" className="btn btn-outline w-full"/>: <input type="submit" value="Bid On The Project" className="btn btn-outline w-full"/>
                }
                 */}
                            {
            user.email === email ? (
                <input type="submit" value="Bid On The Project" className="btn btn-outline w-full" disabled />
            ) : (
                <input type="submit" value="Bid On The Project" className="btn btn-outline w-full" />
            )
            }
               
{/*                
                <input type="submit" value="Bid On The Project" className="btn btn-outline w-full"/> */}

            </form>
        </div>
                
            </div>
            
        </div>
    );
};

export default JobDetails;