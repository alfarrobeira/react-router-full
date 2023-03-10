import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../services/utils";
import BackButton from "./BackButton";

export default () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((studis) => setStudents(studis));
    }, []);

    return (
        <>
            <h2>Students</h2>
                {
                    //students.map(student => console.log(student))
                    students.map(student => <div><Link className="link" to={`/students/${student.login.uuid}`}> {student.name.title} {student.name.first} {student.name.last} </Link></div>)
                }
            <BackButton />
        </>
    );
}