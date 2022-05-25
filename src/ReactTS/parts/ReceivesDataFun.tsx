import { LargeNumberLike } from 'crypto'
import React, { useState } from 'react'

const ReceivesDataFun: React.FC<{
    numbervalue: number, numberArray: Array<number>,
    addarray(element: number):
        void, contact: [string, number]
}> = (props) => {


    const [input, setInputvar] = useState<string>('')

    const [placeholder, setPlaceholder] = useState<string>('Введите число для отправки в массив')


    const addelement = () => {


        if (Number.isInteger(Number(input))) {// убераем NaN при пустой отправки 

            props.addarray(Number(input))
        }
        else {
            if (input.length !== 0) {
                setPlaceholder("Не явлется числом")
            }
        }

    }

    return (
        <div>
            <p>ReceivesDataFun</p>
            <p>{placeholder}</p>
            <input onClick={addelement}
                onChange={event => (setInputvar(event.target.value))}
                placeholder={"Введите число"}
            />
        </div>
    )
}

export default ReceivesDataFun