function EmployeeCard(props){
return (
    <div className="card" style={{width: 15+'rem'}}>
        <img className="card-img-top" src={props.profilePicture} />
        <div className="card-body d-flex flex-column align-items-start">
            <div>{props.fristName} {props.lastName}</div>
            <div>{props.email}</div>
            <div>{props.phoneNumber}</div>
            <div className="d-flex">
            <div className="mr-auto p-2">{props.gender == "M" ? "Male" : "Female"}</div>
            <div className="d-flex">
            <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
            <button type="button" className="btn btn-success"><i className="bi bi-person"></i></button>
            </div>
            </div>
        </div>
    </div>
);
}

export default EmployeeCard;