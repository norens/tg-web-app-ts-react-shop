import React, {useEffect, useState} from 'react'
import './Form.css'
import {useTelegram} from "../../hooks/userTelegram";

const Form = () => {
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('cash')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if (!street || !city)
            tg.MainButton.hide();
        else
            tg.MainButton.show();
    }, [city, street])

    const onChangeStreet = (e: any) => {
        setStreet(e.target.value)
    }
    const onChangeCity = (e: any) => {
        setCity(e.target.value)
    }
    const onSubject = (e: any) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'from'}>
            <h3>Wrote you data</h3>
            <input className={'input'} type={'text'} placeholder={'City'} value={city} onChange={onChangeCity}/>
            <input className={'input'} type={'text'} placeholder={'Street'} value={street} onChange={onChangeStreet}/>
            <select className={'select'} value={subject} onChange={onSubject}>
                <option value={'card'}>Card</option>
                <option value={'cash'}>Cash</option>
            </select>
        </div>
    )
}

export default Form;