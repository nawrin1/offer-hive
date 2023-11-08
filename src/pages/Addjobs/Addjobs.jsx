import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Addjobs = () => {
    const {user}=useContext(AuthContext)
    const handleAddJobs=e=>{
        e.preventDefault()
        const category=e.target.category.value
        const description=e.target.description.value
        const email=e.target.email.value
        const deadline= e.target.deadline.value
        const max=e.target.maximumPrice.value
        const min=e.target.minimumPrice.value
        const jobtitle=e.target.title.value


    }
    return (
        <div className="bg-[#c4dde9] p-16">
            <h2 className="text-center font-bold text-4xl mb-20">Add Jobs</h2>
            
        <form onSubmit={handleAddJobs}>
            
            <div className="md:flex text-2xl font-Sora">
            <div className="form-control md:w-1/2 w-full lg:w-1/2">
                    <label className="label">
                        <span className="">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="email" defaultValue={user.email} placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 w-full lg:w-1/2 md:ml-4 lg:ml-4">
                    <label className="label">
                        <span className="">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                    </label>
                </div>


            </div>
           
            <div className="md:flex mb-6 text-2xl font-Sora mt-3">
            <div className="form-control md:w-1/2 w-full lg:w-1/2">
                    <label className="label">
                        <span className="">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
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
               <div className=" flex justify-start mt-8">
                <label className="label">
                    <span className="label-text text-xl  ">Category</span>
                </label>
                <select name="category" id="" className="input input-bordered text-black ml-4 mt-4" >
                    <option  >Web development</option>
                    <option >Digital marketing</option>
                    <option >Graphics design</option>
                    
                </select>
                </div>




            </div>
            <div className="md:flex mb-6 text-2xl font-Sora mt-3">
            <div className="form-control md:w-1/2 w-full lg:w-1/2">
                    <label className="label">
                        <span className="">Maximum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="maximumPrice" placeholder="Maximum Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 w-full lg:w-1/2 lg:ml-4 md:ml-4">
                    <label className="label">
                        <span className="">Minimum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="minimumPrice" placeholder="Minimum price" className="input input-bordered w-full" />
                    </label>
                </div>




            </div>
            <input type="submit" value="Add Jobs" className="btn btn-outline w-full bg-gray-300 font-semibold"/>


        </form>
    </div>

    );
};

export default Addjobs;