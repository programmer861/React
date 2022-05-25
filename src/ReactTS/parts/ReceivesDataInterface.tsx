import React from 'react'

// передача параметров через interface
interface Propsinterface {
    numbervalue: number,
    numberArray: Array<number>,
    addarray(element: number): void,
    contact: [string, number]

}

const ReceivesDataInterface: React.FC<Propsinterface> = (props) => {

 //{numbervalue} деструкторизация 


    return (
        <div>ReceivesDataInterface</div>
    )
}

export default ReceivesDataInterface