import React, { useState } from 'react'
import styles from './OrderForm.module.scss'
import buttonStyles from './../../Button/Button.module.scss'

import { Validate } from '../../../hooks/validate.hook'
import { sendOrder } from '../../../services/api'

import { Button, Input } from '../../index'
import { ArrowIcon } from '../../Icons/index'

interface IOrderForm {
    setIsFetchingDone: (args: boolean) => void;
}

const OrderForm: React.FC<IOrderForm> = ({ setIsFetchingDone }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [validMessageName, setValidMessageName] = useState<string | null>('')
    const [validMessagePhone, setValidMessagePhone] = useState<string | null>(
        ''
    )
    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')

    const [validateName, validatePhone] = Validate(
        setValidMessageName,
        setValidMessagePhone
    )

    const onBlurHandler = (evt: React.FocusEvent<HTMLInputElement>) => {
        switch (evt.target.name) {
            case 'name':
                validateName(nameValue)
                break
            case 'tel':
                validatePhone(phoneValue)
                break
        }
    }
    const handleSubmitForm = async () => {
        validateName(nameValue)
        validatePhone(phoneValue)

        if (validMessageName === null && validMessagePhone === null) {
            setIsLoading(true)
            await sendOrder({ nameValue, phoneValue })
            setIsLoading(false)
            setIsFetchingDone(true)
            console.log(nameValue, phoneValue)
        }
    }

    return (
        <form action="" className={styles.form}>
            <Input
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                    setNameValue(evt.target.value)
                    setValidMessageName('')
                }}
                onBlur={onBlurHandler}
                name="name"
                type="text"
                placeholder="Name"
                validateText={validMessageName}
            />
            <Input
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                    setPhoneValue(evt.target.value)
                    setValidMessagePhone('')
                }}
                onBlur={onBlurHandler}
                name="tel"
                type="tel"
                placeholder="Number"
                validateText={validMessagePhone}
            />
            <div className={styles.formFooter}>
                <Button
                    onClick={handleSubmitForm}
                    text="Order"
                    mod={buttonStyles.buttonSecond}
                    isLoading={isLoading}
                    icon={ArrowIcon}
                />
            </div>
        </form>
    )
}

export default OrderForm
