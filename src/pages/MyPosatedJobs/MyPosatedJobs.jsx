import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPosatedJobs = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://job-portal-server-seven-mu.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])


    return (
        <div>
            <h1 className="text-3xl">My Posated Jobs: {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>DeadLine</th>
                            <th>Count</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, idx) => <tr key={job._id}>
                                <th>{idx + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplication/${job._id}`}><button className="btn btn-link">View Application</button></Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPosatedJobs;