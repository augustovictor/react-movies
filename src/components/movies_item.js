import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions';

class MoviesItem extends Component {
    onDelete(id) {
        this.props.deleteMovie(id);
    }

    render() {
        const { movie } = this.props;
        return(
            <div>
                <Link to={ `/movies/${ movie._id }` }>{ movie.title }</Link> - 
                <button onClick={ this.onDelete.bind(this, movie._id) }>Delete</button>
            </div>
        )
    }
};

export default connect(null, { deleteMovie })(MoviesItem);