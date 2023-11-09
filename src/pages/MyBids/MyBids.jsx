import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyBids = () => {
   
      const { user } = useContext(AuthContext);
      const [allBids, setAllBids] = useState([]);
      const [disappear, setDisappear] = useState({});
    
      const url = `https://online-marketplace-server-beta.vercel.app/allBids?userEmail=${user?.email}`;
    
      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            const disappearState = {};
            data.forEach((bid) => {
              disappearState[bid._id] = false;
            });
    
            setAllBids(data);
            setDisappear(disappearState);
            console.log(data);
          });
      }, [url]);
    
      const handleComplete = (_id) => {
        // Create a copy of the disappear state object and set the specific row to true
        const updatedDisappear = { ...disappear };
        updatedDisappear[_id] = true;
        setDisappear(updatedDisappear);
    
        // Send the status update to the server
        const status = { status: 'complete' };
        fetch(`https://online-marketplace-server-beta.vercel.app/allBids/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(status),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            location.reload()
          });
      };
    
      return (
        <div>
            <Helmet><title>Offer Hive | My Bids</title></Helmet>
        <div className="min-h-screen max-w-6xl mx-auto my-7">
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
                {allBids.map((bids) => (
                  <tr className="border-b-purple-600 h-[80px]" key={bids._id}>
                    <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.title}</td>
                    <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.userEmail}</td>
                    <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.deadline}</td>
                    <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.status}</td>
                    <th>
                      {bids.status === 'rejected' || disappear[bids._id] ? (
                        <button className="btn btn-outline btn-xs text-[11px] hidden">Complete</button>
                      ) : bids.status!=='pending'&& bids.status!=='complete'&&(
                        <button
                          className="btn btn-outline btn-xs text-[11px]"
                          onClick={() => handleComplete(bids._id)}
                        >
                          Complete
                        </button>
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      );
    
    
};

export default MyBids;