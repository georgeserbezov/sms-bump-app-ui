import React from 'react'
import VerifyCode from './VerifyCode'

const CodeVerifyForm = () => {

    const {handleChange, values, handleSubmit} = VerifyCode();

    return (
        <div className="form-content">
            <form onSubmit={handleSubmit}>
                <div className="container">
                <label htmlFor="code"><b>Verification Code</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Verification Code from SMS" 
                        name="code" 
                        id="code" 
                        value={values.email}
                        onChange={handleChange}
                        required 
                    />


                    <button type="submit" className="verifybutton">Verify</button>
                </div>
            </form>
        </div>
    )
}

export default CodeVerifyForm