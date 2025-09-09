import { useState } from "react";

import Message from "./Message.jsx";
import Err from "./Err.jsx";

export default function Card() {
    const [IsActive, SetIsActive] = useState(false);
    const [Error,SetError] = useState({});
    const [Inputs,SetInputs] = useState({
        firstName : '',
        lastName : '',
        email : '',
        queryType : '',
        message : '',
        checkbox : false,
    });

    function IsEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    }
    
    function Validation() {
        const errors = {};
        if (!Inputs.firstName.trim()) errors.firstName = 'This Field is requied';
        if (!Inputs.lastName.trim()) errors.lastName = 'This Field is requied';
        if (!Inputs.email.trim()) errors.email = 'This Field is requied';
        if (!Inputs.queryType) errors.queryType = 'Please select a queryType';
        if (!Inputs.message.trim()) errors.message = 'This Field is requied';
        if (!Inputs.checkbox) errors.checkbox = 'To submit this form, please consent to being contacted';
        if (Inputs.email && !IsEmail(Inputs.email)) errors.email = 'Please enter valid email address';
        SetError(errors);
        return Object.keys(errors).length === 0;
    }
    
    function HandleForm(e) {
    e.preventDefault();
    if(Validation()) {
        SetIsActive(true);
    }
}


    return(
        <>
            <form className="form-container" onSubmit={HandleForm}>
                <h1 className="form-title">Contact Us</h1>
                <section className="grid">
                    <div className="inputs firstName">
                        <label htmlFor="firstName">First Name <span className="required">*</span></label>
                        <input 
                            type="text" 
                            id="firstName"
                            value={Inputs.firstName}
                            onChange={(e)=>{ SetInputs({...Inputs, firstName : e.target.value}) }}
                        />
                        <Err name="firstName" msg={Error.firstName}/>
                    </div>
                    <div className="inputs lastName">
                        <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                        <input 
                            type="text" 
                            id="lastName"
                            value={Inputs.lastName}
                            onChange={ (e)=>{ SetInputs({...Inputs, lastName: e.target.value}) } }
                        />
                        <Err name="lastName" msg={Error.lastName}/>
                    </div>
                    <div className="inputs emailAddress">
                        <label htmlFor="emailAddress">Email Address <span className="required">*</span></label>
                        <input 
                            type="email" 
                            id="emailAddress"
                            value={Inputs.email}
                            onChange={(e)=>{SetInputs({...Inputs,email: e.target.value})}}
                        />
                        <Err name="emailAddress" msg={Error.email}/>
                    </div>
                    <div className="inputs queryType">
                        <label htmlFor="queryType">Query Type <span className="required">*</span></label>
                        <div className="radio-inputs" id="queryType">
                            <div>
                                <input 
                                    type="radio" 
                                    id="enquiry" 
                                    name="queryType"
                                    value="enquiry"
                                    checked={Inputs.queryType === "enquiry"}
                                    onChange={(e)=>{SetInputs({...Inputs,queryType: e.target.value})}}
                                />
                                <label htmlFor="enquiry">General Enquiry</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="support" 
                                    name="queryType"
                                    value="support"
                                    checked={Inputs.queryType === "support"}
                                    onChange={(e)=>{SetInputs({...Inputs,queryType: e.target.value})}}
                                    />
                                <label htmlFor="support">Support Request</label>
                            </div>
                        </div>
                        <Err name="queryType" msg={Error.queryType}/>
                    </div>
                    <div className="inputs message">
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea 
                            id="message" 
                            className="textarea"
                            value={Inputs.message}
                            onChange={(e)=>{SetInputs({...Inputs,message: e.target.value})}}
                        ></textarea>
                        <Err name="message" msg={Error.message}/>
                    </div>

                    <div className="Checkbox-input">
                        <input 
                            type="checkbox" 
                            id="checked"
                            checked={Inputs.checkbox}
                            onChange={(e)=>{SetInputs({...Inputs,checkbox:e.target.value})}}
                        />
                        <label htmlFor="checked">I consent to being contacted by the team <span className="required">*</span></label>
                        <Err name="Checked" msg={Error.checkbox}/>
                    </div>
                </section>
                <button 
                type="submit" 
                className="submit"
                >
                    Submit
                </button>
            </form>
            {IsActive && <Message/>}
        </>
    );
}