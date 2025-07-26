import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";


const HotJobsCard = ({ job }) => {
    const { _id, company_logo, company, requirements, description, title, location, applicationDeadline, salaryRange, jobType } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img className="w-16 object-cover"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-xl">{title}</h2>
                    <p className="flex items-center gap-1"><HiOutlineLocationMarker /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements.map((skill, idx) => <p
                            key={idx}
                            className="border rounded-md text-center px-2 py-1 hover:text-black hover:bg-gray-100"
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-between mt-4">
                    <p className="flex items-center">Salery: <FaBangladeshiTakaSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;