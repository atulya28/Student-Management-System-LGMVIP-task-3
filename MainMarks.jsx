import React, { useState, useEffect } from 'react'
import Result from './Result'
import axios from './axios.mjs'

export default function MainMarks() {
    const [students, setStudents] = useState([])
    const [search, setSearch] = useState('')
    const [value1, setValue1] = useState('')

    useEffect(() => {
        axios.get('/studentmarks').then((res) => {
            setStudents(res.data)
        })
    }, [students])

    return (
        <>
        <div>
            <div className="search">
                <input type="text" placeholder='Search students' value = {value1} className="se1" onChange = {(e) => {
                  setValue1(e.target.value)
                }} />
                <button className="se2" onClick = {() => {
                setSearch(value1)
                }}>Search</button>
            </div>
            <h1 className='head3'>Result of 10th Class</h1>
            <div id="main3">
            <div id="details0">
                    <h3 className="na0">Board Roll No.</h3>
                </div>
                <div id="details1">
                    <h3 className="na1">Student name</h3>
                </div>
                <div id="details2">
                    <h3 className="na2">English</h3>
                </div>
                <div id="details3">
                    <h3 className="na3">Science</h3>
                </div>
                <div id="details4">
                    <h3 className="na4">Social Science</h3>
                </div>
                <div id="details5">
                    <h3 className="na5">Maths</h3>
                </div>
                <div id="details6">
                    <h3 className="na6">Hindi</h3>
                </div>
                <div id="details7">
                <h3 className="na6">Computer</h3>
                </div>
                <div id="details8">
                    <h3 className="na8">Total Marks</h3>
                </div>
                <div id="details9">
                    <h3 className="na9">Marks Obtained</h3>
                </div>
                <div id="details9a">
                    <h3 className="na9a">Percentage</h3>
                </div>
                <div id="details10">
                    <h3 className="na10">Grade</h3>
                </div>
                <div id="details11">
                    <h3 className="na11">Remarks</h3>
                </div>
            </div>
            {students.map((res) => (
                res.name.includes(search) ?
                <Result name1={res.name} enroll1={res.enroll} english1={res.english} sci1={res.sci} ssci1={res.ssci} maths1={res.maths} hindi1={res.hindi} comp1={res.comp} />
                : value1 === " " &&  <Result name1={res.name} enroll1={res.enroll} english1={res.english} sci1={res.sci} ssci1={res.ssci} maths1={res.maths} hindi1={res.hindi} comp1={res.comp} />
            ))}
        </div>
        </>
    )
}
