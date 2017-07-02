import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize} from 'redux-form';
import { createMovie, fetchMovie, updateMovie } from '../actions';

class MoviesForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        if(id) {
            this.props.fetchMovie(id);
        }
            this.handleInitialize();
    }

    handleInitialize() {
        this.props.initialize(this.props.movie);
    }

    renderField(field) {
        const { input: { name, label }, meta: { touched, invalid, error } } = field;
        return(
            <div>
                <label htmlFor={`${name}Field`}>{ field.label }</label>
                <input
                    id={`${name}Field`}
                    type="text"
                    { ...field.input }
                />
                { touched ? error : true }
            </div>
        )
    }

    onSubmit(values) {
        if(this.props.match.params.id) {
            this.props.updateMovie(values, () => {
                this.props.history.push('/');    
            });
        } else {
            this.props.createMovie(values, () => {
                this.props.history.push('/');
            });
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <h3>New movie</h3>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field name="title" label="Title" component={ this.renderField } />
                    <Field name="description" label="Description" component={ this.renderField } />
                    <button type="submit">Create</button>
                    <Link to="/">Cancel</Link>
                </form>
            </div>
        )
    }
};

function mapStateToProps({ movies }, ownProps) {
    const movie = movies[ownProps.match.params.id];
    return {
        movie: movie
    }
}

function validate(values) {
    const errors = {};
    if(!values.title) errors.title = 'Title is required';
    if(!values.description) errors.description = 'Description is required';

    return errors;
}

export default reduxForm({
    form: 'MoviesNew',
    validate
})(
    connect(mapStateToProps, { createMovie, fetchMovie, updateMovie })(MoviesForm)
);