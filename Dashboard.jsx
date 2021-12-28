import React, { useState, useEffect } from 'react'
import axios from './axios.mjs'
import Result from './Result'

export default function Dashboard() {
    const [name, setName] = useState('')
    const [enroll, setEnroll] = useState('')
    const [english, setEnglish] = useState('')
    const [sci, setSci] = useState('')
    const [ssci, setSsci] = useState('')
    const [maths, setMaths] = useState('')
    const [hindi, setHindi] = useState('')
    const [comp, setComp] = useState('')

    return (
        <>
            <div id="main2">
                <h3 className='head2'>Enter Student Records for 10th standard</h3>
                <input id="data1" placeholder='Student Name' value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <input id="data2" placeholder='Enrollment Number' value={enroll} onChange={(e) => {
                    setEnroll(e.target.value)
                }} />
                <input id="data3" placeholder='English Marks' value={english} onChange={(e) => {
                    setEnglish(e.target.value)
                }} />
                <input id="data4" placeholder='Science Marks' value={sci} onChange={(e) => {
                    setSci(e.target.value)
                }} />
                <input id="data5" placeholder='Social Science Marks' value={ssci} onChange={(e) => {
                    setSsci(e.target.value)
                }} />
                <input id="data6" placeholder='Maths Marks' value={maths} onChange={(e) => {
                    setMaths(e.target.value)
                }} />
                <input id="data7" placeholder='Hindi Marks' value={hindi} onChange={(e) => {
                    setHindi(e.target.value)
                }} />
                <input id="data8" placeholder='Computer Marks' value={comp} onChange={(e) => {
                    setComp(e.target.value)
                }} />
                <button id="submit" onClick={async () => {
                    if (name != "" && enroll != "" && english != "" && sci != "" && ssci != "" && maths != "" && hindi != "" && comp != "") {
                        await axios.post('/studentmarks', {
                            name: name,
                            enroll: enroll,
                            english: english,
                            sci: sci,
                            ssci: ssci,
                            maths: maths,
                            hindi: hindi,
                            comp: comp,
                        })
                        window.location.href = '/result'
                    }
                    else{
                        alert("Enter student details")
                    }
                }}>Submit</button>
            </div>

        </>
    )
}
