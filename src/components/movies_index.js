import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMovie } from  '../actions';
import MovieItem from './movies_item';
import _ from 'lodash';

class MoviesIndex extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderMovies() {
        if(!_.size(this.props.movies)) return <i>Loading...</i>
        return _.map(this.props.movies, movie => {
            return <MovieItem key={ movie._id } movie={ movie } />
        });
    }

    render() {
        return(
            <div>
                <h3>Movies</h3>
                { this.renderMovies() }
            </div>
        );
    }
};

function mapStateToProps({ movies }) {
    return { movies };
}

export default connect(mapStateToProps, { fetchMovies, fetchMovie })(MoviesIndex);