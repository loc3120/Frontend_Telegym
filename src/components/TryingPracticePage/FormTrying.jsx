import { React, useState, useEffect } from 'react';
import './stylesheets/FormTrying.css'
import TryingPracticeService from '../LoadService/TryingPracticeService';
import Validator from 'hero-validate'

const rules = {
    name: "required|min:1",
    email: "required|email|min:8",
    phone_number: "required|min:10|max:20"
}

Validator.setMessages({
    name: {
        required: "Tên không được để trống"
    },
    email: {
        required: "Email không được để trống",
        min: "Không đúng định dạng email"
    },
    phone_number: {
        required: "Số điện thoại không được trống",
        min: "Số điện thoại phải lớn hơn 10",
        max: "Số điện thoại phải nhỏ hơn 20"
    }
});

Validator.setLocale(Validator.languages.vi);

const FormTrying = () => {

    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phone_number: ''
    })

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone_number: false
    });

    const [errors, setErrors] = useState(Validator.getEmpty());

    const [resultSubmit, setResultSubmit] = useState(0)

    const hasErr = (name) => {
        return touched[name] && errors.isError(name);
    };

    const inputsHandler = (e) => {
        e.persist();
        setTouched({ ...touched, [e.target.name]: true });
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitForm = () => {
        if (!errors.isError()) {
            TryingPracticeService.create(inputField).then((res) => {
                setResultSubmit(res.data)
            })
        }
    }

    useEffect(() => {
        setErrors(Validator.validate(inputField, rules));
    }, [inputField]);

    return (
        <div className="container-form">
            <div className="img-thumb">
                <img src={require('../ListImage/login.png')} alt='thumbnail' />
            </div>
            <form>
                <legend>Hãy gửi thông tin cho chúng tôi</legend>
                <div className="form-group">
                    <label>Họ tên <span>*</span></label>
                    <input type="text" className="form-control" placeholder="Họ tên khách hàng" name='name' onChange={inputsHandler} value={inputField.name} />
                    {hasErr("name") && (
                        <div className="text-red">{errors.getError("name")}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Email <span>*</span></label>
                    <input type="email" className="form-control" placeholder="Email khách hàng" name='email' onChange={inputsHandler} value={inputField.email} />
                    {hasErr("email") && (
                        <div className="text-red">{errors.getError("email")}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Số điện thoại liên hệ <span>*</span></label>
                    <input type="text" className="form-control" placeholder="Số điện thoại" name='phone_number' onChange={inputsHandler} value={inputField.phone_number} />
                    {hasErr("phone_number") && (
                        <div className="text-red">{errors.getError("phone_number")}</div>
                    )}
                </div>
                {(hasErr("name") || hasErr("email") || hasErr("phone_number")) ? (
                    <button type="submit" className="btn btn-primary btn-block" id="btnsubmit" onClick={submitForm} disabled>Submit</button>
                    ) :
                    <button type="submit" className="btn btn-primary btn-block" id="btnsubmit" onClick={submitForm}>Submit</button>
                }
            </form>
        </div>
    )
}

export default FormTrying