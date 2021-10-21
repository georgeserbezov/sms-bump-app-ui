import React, {useState} from 'react'
import SignupForm from './Signup/SignupForm'
import CodeVerifyForm from './CodeVerification/CodeVerifyForm'

const Main = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm () {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? <SignupForm submitForm={submitForm}/> : <CodeVerifyForm />}
        </div>
    )
}

export default Main
