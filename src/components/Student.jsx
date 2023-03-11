import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/utils";
import BackButton from "./BackButton";

export default () => {
    // rem: use empty object instead of null for initialisation (to avoid errors before complete loading before rendering)
    const [student, setStudent] = useState(null);
    // rem: evaluation of loading is required - otherwise access to null in return statement gives an error
    const [loading, setLoading] = useState(true);
    // gets teh id param from the URL
    const { id } = useParams();

    // Please note: the randomuser API works in a way that for every new request, just any data is returned.
    // --> for the same UUID different data will be returned on subsequent requests

    useEffect(() => {
        setLoading(true);
        getSingleStudent(id).then(studi => {
            setStudent(studi);
            setLoading(false);
        });
    }, [id])

    // conditional rendering
    // rem: jsx does not support "if" statement; either ternary operator or boolean evaluation is to be used
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