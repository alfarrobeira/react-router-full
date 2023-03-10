import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/utils";
import BackButton from "./BackButton";

export default () => {
    // rem: use empty object instead of null for initialisation
    const [student, setStudent] = useState(null);
    // rem: evaluation of loading is required - otherwise access to null in return statement gives an error
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        //console.log("UUID: " + id);
        setLoading(true);
        getSingleStudent(id).then(studi => {
            setStudent(studi);
            setLoading(false);
        });
    }, [id])

    return (
        <>
            {loading ?
                (
                    <div>loading</div>
                )
                :
                (
                    <div className="container">
                        <div className="textContainer">
                            <h3>{student.name.first} {student.name.last}</h3>
                            <ul>
                                <li>Street: {student.location.street.name}</li>
                                <li>City: {student.location.city}</li>
                                <li>Post code: {student.location.postcode}</li>
                                <li>Country: {student.location.country} </li>
                                <li>Phone: {student.cell}</li>
                                <li>Email: {student.email}</li>
                            </ul>
                        </div >
                        <div className="imageContainer">
                            <img src={student.picture.large} alt={`${student.name.first} ${student.name.last}`} />
                            <BackButton />
                        </div>
                    </div >
                )
            }
        </>
    );
}