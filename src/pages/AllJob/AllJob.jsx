import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobsCard from "../Home/HotJobsCard";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);
    console.log(jobs);
    // console.log(sort);

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <progress className="progress w-56"></progress>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-4xl py-4 text-center font-bold">All Job</h2>
            <div className="w-11/12 mx-auto bg-base-200 py-4 px-2 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex justify-between gap-4">
                    <div>
                        <button onClick={() => setSort(!sort)}
                            className={`btn btn-primary ${sort && 'btn-success'}`}
                        >{sort ? "Sorted by Selary" : "Sort by Selary"}</button>
                    </div>

                    <div className="flex items-center gap-2">
                        <BiSearch className="text-xl" />
                        <input onKeyUp={(e) => setSearch(e.target.value)}
                            className="p-2 rounded-md"
                            type="text" placeholder="Serch by Location" />
                    </div>
                </div>

                <div className="flex justify-between gap-4">
                    <input onKeyUp={(e) => setMinSalary(e.target.value)}
                        className="p-2 rounded-md max-w-xs"
                        type="text" placeholder="Minimum Salary" />
                    <input onKeyUp={(e) => setMaxSalary(e.target.value)}
                        className="p-2 rounded-md max-w-xs"
                        type="text" placeholder="Maximum Salary" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <HotJobsCard
                        key={job._id} job={job}
                    ></HotJobsCard>)
                }
            </div>
        </div >
    );
}

export default AllJob;