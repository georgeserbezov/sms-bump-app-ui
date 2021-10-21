export default function validateInfo(values) {
    let errors = {};

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email.match(emailRegex)) {
        errors.email = 'Email is invalid';
    }

    if (!values.phone) {
        errors.phone = 'Phoone required';
    }

    if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
}