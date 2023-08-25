import React from 'react';

const demo = () => {
    const handleDate = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <input type="date" placeholder='data' onChange={handleDate} />
        </div>
    );
};

export default demo;