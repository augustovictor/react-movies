import React from 'react';
import { Link } from 'react-router-dom';

export default ({ movie }) => {
    return(
        <div>
            <Link to={ `/movies/${ movie._id }` }>{ movie.title }</Link>
        </div>
    )
};