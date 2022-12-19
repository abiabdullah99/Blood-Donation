import React, { useState, useEffect } from 'react';
const UseBloodReq = () => {
    const [bloodReq, setBloodReq] = useState([])
    useEffect(() => {
        fetch("https://blood-donation-ai.onrender.com/bloodReq")
            .then(res => res.json())
            .then(data => setBloodReq(data))
    }, [bloodReq])
    return [bloodReq]
};

export default UseBloodReq;