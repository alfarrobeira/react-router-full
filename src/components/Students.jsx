import React, { useEffect } from "react";
import { useState } from "react";
import { getStudents } from "../services/utils";

export default () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((studis) => setStudents(studis));
    }, []);

    return (
        <>
            <h2>Students</h2>
            <ul>
                {
                    //students.map(student => console.log(student))
                    students.map(student => <li><a href={`/students/${student.login.uuid}`}> {student.name.title} {student.name.first} {student.name.last} </a></li>)
                }
            </ul>
        </>
    );
}