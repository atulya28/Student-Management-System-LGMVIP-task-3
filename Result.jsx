import React, { useState, useEffect } from 'react'
import MainMarks from './MainMarks'

export default function Result({ name1, enroll1, english1, sci1, ssci1, maths1, hindi1, comp1 }) {

    const [avg, setAvg] = useState(0)
    const [perc, setPerc] = useState(0)
    const [grade, setGrade] = useState("A")
    const [status, setStatus] = useState("PASS")

    const total = () => {
        let avg1 = eval(english1) + eval(sci1) + eval(ssci1) + eval(maths1) + eval(hindi1) + eval(comp1)
        setAvg(avg1)
    }

    const percentage = () => {
        let perc1 = (avg / 600) * 100
        setPerc(eval(perc1.toString().slice(0, 5)))
    }

    const grades = () => {
        if (perc >= 85) {
            setGrade("A")
        }
        if (perc >= 70 && perc < 85) {
            setGrade("B")
        }
        if (perc >= 55 && perc < 70) {
            setGrade("C")
        }
        if (perc >= 40 && perc < 55) {
            setGrade("D")
        }
        if (perc < 40) {
            setGrade("F")
        }
    }

    const remarks = () => {
        if (grade == "F") {
            setStatus("FAIL")
        }
        else {
            setStatus("PASS")
        }
    }

    useEffect(() => {
        total()
        percentage()
        grades()
        remarks()
    })

    return (
        <>
            <div className="main5">
                <div id="main4">
                    <p className="id0">{enroll1}</p>
                    <p className="id1">{name1}</p>
                    <p className="id2">{english1}</p>
                    <p className="id3">{sci1}</p>
                    <p className="id4">{ssci1}</p>
                    <p className="id5">{maths1}</p>
                    <p className="id6">{hindi1}</p>
                    <p className="id7">{comp1}</p>
                    <p className="id8">600</p>
                    <p className="id9">{avg}</p>
                    <p className="id9a">{perc}%</p>
                    <p className="id10">{grade}</p>
                    <p className="id11">{status}</p>
                </div>
            </div>
        </>
    )
}
