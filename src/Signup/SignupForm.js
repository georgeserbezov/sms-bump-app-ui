import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';

const SignupForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="form-content">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <center><h1>Register</h1></center>
                    <hr/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Email" 
                        name="email" 
                        id="email" 
                        value={values.email}
                        onChange={handleChange}
                        required 
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        pattern="^08[7-9][0-9]{7}" 
                        placeholder="e.g. 0881234567" 
                        value={values.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="pass"><b>Password</b></label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        id="password" 
                        value={values.password}
                        onChange={handleChange}
                        required 
                    />
                    {errors.password && <p>{errors.password}</p>}
                    <hr/>

                    <button type="submit" className="registerbtn">Register</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
