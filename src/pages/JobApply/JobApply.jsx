import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const submitJobApplication = e => {
        e.preventDefault();
        const linkedin = e.target.linkedin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin, github, resume
        }
        // console.log(jobApplication);

        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Well Done!",
                        text: "Succesfully Apply!",
                        icon: "success"
                    });
                    navigate('/myApplications');
                }
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0">
            <h1 className="text-4xl font-bold text-center">Job Apply & Best of Luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name="linkedin" placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input type="url" name="github" placeholder="GitHub URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;