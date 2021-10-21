import {useState} from 'react';
import axios from "axios";

const VerifyCode = () => {
    const [values, setValues] = useState({
        code: '',
    });

    const [isVerified, setIsVerified] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const uid = localStorage.getItem('uid');
        values.uid = uid;
        let jsonData = JSON.stringify(values);
        const now = new Date();

        if (localStorage.getItem('freeze') !== null && localStorage.getItem('freeze')) {
            let a = JSON.parse(localStorage.getItem('freeze'));

            if (now.getTime() > a.expiry) {
                localStorage.removeItem('freeze')
            } else {
                alert('Too many attempts');
                return;
            }
        }

        let res = await axios({
            method: 'post',
            url: 'http://localhost:8080/verification/code.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: jsonData
        });

        if(res.data.freeze) {
            const val = {
                value: 1,
                expiry: now.getTime() + 6000,
            }
            localStorage.setItem('freeze', JSON.stringify(val));
        }
    }

    return {handleChange, values, handleSubmit}
}

export default VerifyCode;