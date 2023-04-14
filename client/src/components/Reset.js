import { React, useState } from 'react';

function Reset(props) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); 
    
    function handleReset(event) {
        const API = props.API + "/reset";
        if (email.length > 0)
        {
            setError("");

            const formData = {
                email: email,
            };

            const API_OPT = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            };
            
            fetch(API, API_OPT)
            .then(resp => resp.json())
            .then(data => {
                for (let key in data)
                {
                    if (key === 'error')
                    {
                        setError(data[key]);
                    }
                }
            })
        }
        else
        {
            setError("Missing e-mail address!");
        }
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

return (
    <div id="site-form">
        <div className="title-label">RESET PASSWORD</div>
        {(error) ? <div className='error-label'>{error}</div> : null}
        <div className="label-login">E-mail</div>
        <input className="field-login" type="text" name="email" onChange={handleEmail} value={email}/>
        <input className="button" type="button" name="forgot" value="Reset Password" onClick={handleReset} />
    </div>
    )
}

export default Reset;