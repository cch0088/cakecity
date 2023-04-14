import { React, useState } from 'react';

function Registration(props) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); 
    
    function handleRegistration(e) {
        const API = props.API + "/register";
        if (username.length > 0 && password.length > 0)
        {
            setError("");

            const formData = {
                username: username,
                firstname: firstname,
                lastname: lastname,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zipcode: zipcode,
                phone: phone,
                email: email,
                password: password
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
            setError("Missing password or username!");
        }
    }

return (
    <div id="site-form">
        <div className="title-label">NEW ACCOUNT</div>
        {(error) ? <div className='error-label'>{error}</div> : null}
        <div className="form-item">
            <div className="label">Username</div>
            <input className="field" type="text" name="username" onChange={(e) => setUserName(e.target.value)} value={username} />
        </div>
        <div className="form-item">
            <div className="label">Password</div>
            <input className="field" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="form-item">    
            <div className="label">First Name</div>
            <input className="field" type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
        </div>
        <div className="form-item">    
            <div className="label">Last Name</div>
            <input className="field" type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} value={lastname} />
        </div>
        <div className="form-item">    
            <div className="label">Address 1</div>
            <input className="field" type="text" name="address1" onChange={(e) => setAddress1(e.target.value)} value={address1} />
        </div>
        <div className="form-item">    
            <div className="label">Address 2</div>
            <input className="field" type="text" name="address2" onChange={(e) => setAddress2(e.target.value)} value={address2} />
        </div>
        <div className="form-item">    
            <div className="label">City</div>
            <input className="field" type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} />
        </div>
        <div className="form-item">    
            <div className="label">State</div>
            <input className="field" type="text" name="state" onChange={(e) => setState(e.target.value)} value={state} />
        </div>
        <div className="form-item">    
            <div className="label">Zip Code</div>
            <input className="field" type="text" name="zipcode" onChange={(e) => setZipCode(e.target.value)} value={zipcode} />
        </div>
        <div className="form-item">    
            <div className="label">Phone</div>
            <input className="field" type="text" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>
        <div className="form-item">    
            <div className="label">E-mail</div>
            <input className="field" type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <input className="button" type="button" name="register" value="Create Account" onClick={handleRegistration} />
    </div>
    )
}

export default Registration;