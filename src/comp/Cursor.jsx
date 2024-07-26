import React, { useEffect, useState } from 'react'

export default function Cursor(props) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    function handleMouseMove(event) {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }
    useEffect(() => {
        props.windo.addEventListener('mousemove', handleMouseMove);
        return () => {
            props.windo.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div
            className='mousePointer'
            style={{
                top: mousePosition.y,
                left: mousePosition.x,
              
            }}
        ></div>
    )
}
