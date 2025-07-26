import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const { _id, company_logo, category, company, status, hr_name, hr_email, requirements, responsibilities, description, title, location, applicationDeadline, salaryRange, jobType } = useLoaderData();

    return (
        <div className="space-y-2 mb-10 ml-10">
            <img className="w-20 h-20 object-cover" src={company_logo} alt="" />
            <h2 className="text-2xl font-semibold">{company}</h2>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{jobType}</p>
            <p>{location}</p>
            <h3 className="text-xl font-semibold">{category}</h3>
            <h3 className="text-xl font-semibold">{applicationDeadline}</h3>
            <p>{status}</p>
            <p className="flex items-center">Salery: <FaBangladeshiTakaSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <p>{description}</p>
            <h3 className="text-xl font-semibold">Requirements</h3>
            {requirements.map((skill, idx) => <p key={idx}>{skill}</p>)}
            <h3 className="text-xl font-semibold">Responsibilities</h3>
            {responsibilities.map((res, idx) => <p key={idx}>{res}</p>)}
            <p>{hr_name} {hr_email}</p>
            <Link to={`/jonApply/${_id}`}><button className="btn btn-primary">Apply</button></Link>
        </div>
    );
};

export default JobDetails;