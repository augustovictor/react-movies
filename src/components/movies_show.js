import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

class MoviesShow extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }
    render() {
        const { movie } = this.props;
        console.log(movie);
        if(!movie) return <i>Loading...</i>
        return(
            <div>
                <h3>{ movie.title }</h3>
                <p>{ movie.description }</p>
            </div>
        );
    }
}

function mapStateToProps({ movies }, ownProps) {
    return { movie: movies[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchMovie })(MoviesShow);