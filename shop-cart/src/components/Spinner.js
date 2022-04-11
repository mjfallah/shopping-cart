import React from 'react';

// Icons
import spinner from "../icons/Spinner.gif";

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt='waiting' />
        </div>
    );
};

export default Spinner;