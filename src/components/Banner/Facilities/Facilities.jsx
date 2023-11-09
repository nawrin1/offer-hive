import {MdOutlinePlaylistAddCheckCircle} from "react-icons/md"

const Facilities = () => {
    return (
<div className="max-w-6xl mx-auto mb-20"><h2 className="text-center lg:text-5xl text-2xl md:text-3xl font-bold font-Sora lg:mb-10 mb-6 ">Our Facilities</h2>
<hr className="w-full h-[1px] bg-orange-400 mb-3 lg:block hidden"></hr>
<div className="flex max-w-6xl mx-auto justify-center p-8">
            <div className="lg:text-2xl text-[14px] md:[text-16px] text-blue-900 font-Sora font-medium mb-10">
                <ul className="list-disc space-y-4">
                    <li>A user-friendly search function to find relevant job listings.</li>
                    <li>Track the status of job applications.</li>
                    <li>Promote job postings for greater visibility.</li>
                    <li>Selection of Jobs according to price range</li>
                    <li>Update or delete of any jbb post</li>
                    
                </ul>
                

            </div>
            <div className="hidden lg:block">
                <div>
                    <MdOutlinePlaylistAddCheckCircle className="text-[250px] text-yellow-600"></MdOutlinePlaylistAddCheckCircle>
                </div>

            </div>
            
        </div>
</div>
    );
};

export default Facilities;