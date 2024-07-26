import React, { useEffect } from 'react';
import "../css/herotext.css"
export default function Herotext(props) {

    const textToCharArr = (txt) => {
        let txtArr = [];
        for (let i = 0; i < txt.length; i++) {
            txtArr.push(txt.charAt(i));
        }
        return txtArr;
    }

    const applyRandomPosition = (element) => {
        const randomX = Math.floor(Math.random() * 65) - 25; // random value between -25 and 25
        const randomY = Math.floor(Math.random() * 65) - 25; // random value between -25 and 25
        element.style.setProperty('--random-x', `${randomX}px`);
        element.style.setProperty('--random-y', `${randomY}px`);
    }

    useEffect(() => {
        const spans = document.querySelectorAll('.paraOne span');
        spans.forEach(span => applyRandomPosition(span));
    }, []);

    let txt = props.txt;
    const tt = textToCharArr(txt);

console.log(tt)
    return (
        <>
            <p className="paraOne">
                {tt.map(
                    (e, index) => <span className='span'>{e}</span>
                )}
            </p>
        </>
    );
}
