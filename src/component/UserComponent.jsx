import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from '../service/UserService';


class UserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        UserService.retrieveUser(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                age:response.data.age,
                address:response.data.address
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a Description'
        } else if (values.name.length < 5) {
            errors.name = 'Enter atleast 5 Characters in Description'
        }
        if (!values.age) {
            errors.age = 'Enter a Age'
        }
        if (!values.address) {
            errors.age = 'Enter a Address'
        }
        return errors

    }

    onSubmit(values) {

        let user = {
            id: this.state.id,
            name: values.name,
            age:values.age,
            address:values.address
        }

        if (this.state.id === -1) {
            UserService.createUser(user)
                .then(() => this.props.history.push('/users'))
        } else {
            UserService.updateUser(user)
                .then(() => this.props.history.push('/users'))
        }
        console.log(values);
    }

    render() {

        let { age, id ,name,address} = this.state

        return (
            <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, name,age,address }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Age</label>
                                        <Field className="form-control" type="text" name="age" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>address</label>
                                        <Field className="form-control" type="text" name="address" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default UserComponent