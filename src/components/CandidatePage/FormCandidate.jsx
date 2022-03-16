import { React, useState, useEffect } from 'react';
import './stylesheets/FormCandidate.css'
import CandidateService from '../LoadService/CandidateService';
import Validator from 'hero-validate'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const rules = {
    name: "required|min:1",
    email: "required|email|min:8",
    phone_number: "required|min:10|max:20",
    dateOfBirth: "required",
    description: "required|max:1000"
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
    },
    dateOfBirth: {
        required: "Ngày sinh không được để trống"
    },
    description: {
        required: "Mô tả không được để trống",
        max: "Độ dài của mô tả bản thân nhỏ hơn 1000 kí tự"
    }
});

Validator.setLocale(Validator.languages.vi);

const FormCandidate = () => {

    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phone_number: '',
        dateOfBirth: new Date(),
        description: ''
    })

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone_number: false,
        dateOfBirth: false,
        description: false
    });

    const [errors, setErrors] = useState(Validator.getEmpty());

    const [startDate, setStartDate] = useState(new Date());

    const [resultSubmit, setResultSubmit] = useState(0)

    const hasErr = (name) => {
        return touched[name] && errors.isError(name);
    };

    const inputsHandler = (e) => {
        e.persist();
        setTouched({ ...touched, [e.target.name]: true });
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const changeDate = (e) => {
        setStartDate(e)
        setInputField({ ...inputField, dateOfBirth: e })
    }

    const submitForm = () => {
        if (!errors.isError()) {
            console.log(inputField)
            CandidateService.create(inputField).then((res) => {
                setResultSubmit(res.data)
            })
        }
    }

    useEffect(() => {
        setErrors(Validator.validate(inputField, rules));
    }, [inputField]);

    return (
        <div className="container-form">
            <form>
                <legend>Hãy gửi thông tin cho chúng tôi</legend>
                <div className="form-group">
                    <label>Họ tên <span>*</span></label>
                    <input type="text" className="form-control" placeholder="Họ tên ứng viên" name='name' onChange={inputsHandler} value={inputField.name} />
                    {hasErr("name") && (
                        <div className="text-red">{errors.getError("name")}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Email <span>*</span></label>
                    <input type="email" className="form-control" placeholder="Email ứng viên" name='email' onChange={inputsHandler} value={inputField.email} />
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
                <div className="form-group">
                    <label>Ngày sinh <span>*</span></label>
                    <DatePicker className="form-control" name='dateOfBirth' selected={startDate} onChange={changeDate} value={inputField.dateOfBirth} dateFormat='yyyy-MM-dd'/>
                </div>
                <div className="form-group">
                    <label>Mô tả bản thân <span>*</span></label>
                    <textarea type="text" className="form-control " placeholder="Thông tin giới thiệu bản thân" name='description' onChange={inputsHandler} value={inputField.description} />
                    {hasErr("description") && (
                        <div className="text-red">{errors.getError("description")}</div>
                    )}
                </div>
                {(hasErr("name") || hasErr("email") || hasErr("phone_number") || hasErr("dateOfBirth") || hasErr("description")) ? (
                    <button type="submit" className="btn btn-primary btn-block" id="btnsubmit" onClick={submitForm} disabled>Submit</button>
                    ) :
                    <button type="submit" className="btn btn-primary btn-block" id="btnsubmit" onClick={submitForm}>Submit</button>
                }
            </form>
        </div>
    )
}

export default FormCandidate