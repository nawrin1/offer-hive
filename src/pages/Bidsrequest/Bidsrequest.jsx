import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Bidsrequest = () => {
    const { user } = useContext(AuthContext);
    const [request, setRequest] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState({});
    
    const url = `http://localhost:3000/allBids?buyerEmail=${user?.email}`;
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequest(data);
                
                const initialDisabledButtons = {};
                data.forEach(job => {
                    initialDisabledButtons[job._id] = { accept: false, reject: false };
                });
                setDisabledButtons(initialDisabledButtons);
            });
    }, [url]);
    
    const handleAccept = (_id) => {
        
        setDisabledButtons(prevState => ({
            ...prevState,
            [_id]: { ...prevState[_id], accept: true },
        }));
        const status={status:"in progress"}
        fetch(`http://localhost:3000/allBids/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            location.reload()
            setDisabledButtons(prevState => ({
                ...prevState,
                [_id]: { ...prevState[_id], accept: true },
            }));


            
        })

    };
    
    const handleReject = (_id) => {
        
        setDisabledButtons(prevState => ({
            ...prevState,
            [_id]: { ...prevState[_id], reject: true },
        }));
        const status={status:"rejected"}
        fetch(`http://localhost:3000/allBids/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            location.reload()
            setDisabledButtons(prevState => ({
                ...prevState,
                [_id]: { ...prevState[_id], reject: true },
            }));
            console.log(disabledButtons)


            
        })
    };
    
    return (
        <div className="min-h-screen max-w-6xl mx-auto my-7">
            <h2 className="text-center font-Sora font-bold text-4xl text-purple-800 mb-10">BIDS REQUESTS</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs overflow-x-hidden">
                    <thead className="lg:text-2xl md:text-2xl text-[11px] font-semibold font-Sora bg-violet-300">
                        <tr>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold font-Sora bg-violet-100">
                        {request.map(bids => (
                            <tr className="border-b-purple-600" key={bids._id}>
                                <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.title}</td>
                                <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.userEmail}</td>
                                <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.deadline}</td>
                                <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.price}</td>
                                <td className="lg:text-[14px] md:text-[14px] text-[10px]">{bids.status}</td>
                                <th>
                                    {disabledButtons[bids._id]?.accept || disabledButtons[bids._id]?.reject?<button
                                        className="btn btn-outline btn-xs text-[11px]"
                                        onClick={() => handleAccept(bids._id)}
                                        disabled
                                    >
                                        Accept
                                    </button>:<button
                                        className="btn btn-outline btn-xs text-[11px]"
                                        onClick={() => handleAccept(bids._id)}
                                        
                                    >
                                        Accept
                                    </button>}
                                </th>
                                <th>
                                    <button
                                        className="btn btn-outline btn-xs text-[11px]"
                                        onClick={() => handleReject(bids._id)}
                                        disabled={disabledButtons[bids._id]?.reject || disabledButtons[bids._id]?.accept}
                                    >
                                        Reject
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
    
    
    
};

export default Bidsrequest;