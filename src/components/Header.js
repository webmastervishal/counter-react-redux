import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About Counter</Link>
        </div>
    );
};