export default function Validation(values) {
    let errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if(values.name === "") {
        errors.name = "Name Not Empty";
    } else if(values.name.length < 3 || values.name.length > 30) {
        errors.name = "Name Must Be Between 3-30 Characters";
    } else {
        errors.name = "";
    }

    if(values.email === "") {
        errors.email = "Email Not Empty";
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Invalid Email!!";
    } else {
        errors.email = "";
    }

    if(values.password === "") {
        errors.password = "password Not Empty";
    } else if(!password_pattern(values.email)) {
        errors.password = "Invalid Email!!";
    } else {
        errors.password = "";
    }

    return errors;
}
