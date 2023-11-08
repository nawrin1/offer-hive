import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [allBids, setAllBids] = useState([]);

    const url = `http://localhost:3000/allBids?userEmail=${user?.email}`;

    useEffect(() => {



        fetch(url)
            .then(res => res.json())
            .then(data => {setAllBids(data)
                console.log(data)
           })
    }, [url]);
    // const {title,deadline,status,userEmail}=allBids
    return (
        < div className="min-h-screen max-w-6xl mx-auto my-7">
            <h2 className="text-center font-Sora font-bold text-4xl text-purple-800 mb-10">MY BIDS</h2>
            <div className="overflow-x-hidden">
  <table className="table table-xs overflow-x-hidden">
    <thead className="lg:text-2xl md:text-2xl text-[11px] font-semibold font-Sora bg-violet-300">
      <tr>
        
        <th>Job Title</th> 
        <th>Email</th> 
        <th>Deadline</th> 
        <th>Status</th> 
        <th></th> 
        
      </tr>
    </thead> 
    <tbody className="font-semibold font-Sora bg-violet-100">
    {
        allBids.map(bids=><>      <tr className="border-b-purple-600">
        
            <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.title}</td> 
            <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.userEmail}</td> 
            <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.deadline}</td> 
            <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.status}</td> 

            <th>
              <button className="btn btn-outline btn-xs text-[11px]">Complete</button>
            </th>
          </tr></>)
    }

      
      





    </tbody> 

  </table>
</div>


            
        </div>
    );
};

export default MyBids;