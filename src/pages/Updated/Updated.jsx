import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";


const Updated = () => {
    const load=useLoaderData()
    const{category,deadline,description,max,min,email,jobtitle,_id}=load
    console.log(load)
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleUpdatedJobs=e=>{
        e.preventDefault()
        const category=e.target.category.value
        const description=e.target.description.value
        const email=e.target.email.value
        const deadline= e.target.deadline.value
        const max=e.target.maximumPrice.value
        const min=e.target.minimumPrice.value
        const jobtitle=e.target.title.value
        console.log(category,deadline,description,max,min,email,jobtitle)
        const updatedjobs={category,deadline,description,max,min,email,jobtitle}
        fetch(`https://online-marketplace-server-beta.vercel.app/jobs/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedjobs)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })



    }
    return (
        <div>
             <Helmet><title>Offer Hive | Update</title></Helmet>
        <div className="bg-[#c4e0e9] p-16">
            <h2 className="text-center font-bold text-4xl mb-20">Update Jobs</h2>
            
        <form onSubmit={handleUpdatedJobs}>
            
            <div className="md:flex text-2xl font-Sora">
            <div className="form-control md:w-1/2 w-full lg:w-1/2">
                    <label className="label">
                        <span className="">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="email" disabled defaultValue={email} placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 w-full lg:w-1/2 md:ml-4 lg:ml-4">
                    <label className="label">
                        <span className="">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" defaultValue={jobtitle} placeholder="title" className="input input-bordered w-full" />
                    </label>
                </div>


            </div>
           
            <div className="md:flex mb-6 text-2xl font-Sora mt-3">
            <div className="form-control md:w-1/2 w-full lg:w-1/2">
                    <label className="label">
                        <span className="">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-2 w-full lg:w-1/2">
                    <label className="label"> 
                        <span className="">Deadline</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="deadline" defaultValue={deadline} placeholder="deadline" className="input input-bordered w-full" />
                    </label>
                </div>

            </div>
            <div className="md:flex mb-6 text-2xl font-Sora mt-3">
               <div className=" flex justify-start mt-8">
                <label className="label">
                    <span className="label-text text-xl  ">Category</span>
                </label>
                <select name="category" id="" defaultValue={category} className="input input-bordered text-black ml-4 mt-4" >
                    <option  >Web Development</option>
                    <option >Digital Marketing</option>
                    <option >Graphics Design</option>
                    
                </select>
                </div>




            </div>
            <div className="md:flex mb-6 text-2xl font-Sora mt-3">
            <div className="form-control md:w-1/2 w-full lg:w-1/2">
                    <label className="label">
                        <span className="">Maximum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="maximumPrice" defaultValue={max} placeholder="Maximum Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 w-full lg:w-1/2 lg:ml-4 md:ml-4">
                    <label className="label">
                        <span className="">Minimum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="minimumPrice" defaultValue={min} placeholder="Minimum price" className="input input-bordered w-full" />
                    </label>
                </div>




            </div>
            <input type="submit" value="Update Jobs" className="btn btn-outline w-full bg-gray-300 font-semibold"/>


        </form>
    </div>
    </div>

    );
};

export default Updated;