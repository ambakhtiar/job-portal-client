import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplication = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id);
        const data = { status: e.target.value };

        fetch(`https://job-portal-server-seven-mu.vercel.app/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    Swal.fire({
                        title: "Status Updated!",
                        text: `Applicant got ${e.target.value}`,
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold'>Application for this job: {applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Stutus</th>
                            <th>Select Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, idx) => <tr key={app._id}>
                                <th>{idx + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>{app.status}</td>
                                <td>
                                    <select onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Review</option>
                                        <option>Selected</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;