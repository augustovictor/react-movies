import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createMovie } from '../actions';

class MoviesForm extends Component {
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
        this.props.createMovie(values, () => {
            this.props.history.push('/');
        })
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
    connect(null, { createMovie })(MoviesForm)
);