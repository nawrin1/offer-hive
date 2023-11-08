import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Service from '../Service/Service';

const Items = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
                const services = data.filter(job => job.category === 'Web Development');
                setFilteredJobs(services);
            });
    }, []); 
    
    const handleClicked = (e) => {
        console.log(e);
        const service = jobs.filter(job => job.category === e);
        setFilteredJobs(service);
    };
    
    console.log(filteredJobs, "jobbb");
    
    return (
        <div className='flex flex-col justify-center mx-auto my-20 px-4'>
            <h2 className='text-4xl text-center font-Sora font-bold text-blue-950 mb-10'>Jobs Category</h2>
            <div>
                <Tabs>
                    <TabList className="font-Sora font-bold text-center text-xl mb-10 ">
                        <Tab onClick={() => handleClicked('Web Development')}>Web Development</Tab>
                        <Tab onClick={() => handleClicked('Digital Marketing')}>Digital Marketing</Tab>
                        <Tab onClick={() => handleClicked('Graphics Design')}>Graphics Design</Tab>
                    </TabList>
    
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20'>
                            {filteredJobs.map((service, idx) => <Service key={idx} service={service}></Service>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20'>
                            {filteredJobs.map((service, idx) => <Service key={idx} service={service}></Service>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20'>
                            {filteredJobs.map((service, idx) => <Service key={idx} service={service}></Service>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
    
};

export default Items;