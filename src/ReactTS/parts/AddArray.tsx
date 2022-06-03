import React, { useState } from 'react'

const AddArray = () => {

    console.log("11");

    const [titele, setTitele] = useState<string>('Динимический input')

    const [arrayuse, setArrayuse] = useState([1, 2, 3, 4, 5])

    const [useStateArray, setUseStateArray] = useState<number[]>([1, 2, 3, 4]);
    const [useStateArray2, setUseStateArray2] = useState<Array<string>>(['1', '2', '3', '4']);


    const addarrayuse = () => {
        setUseStateArray([123, ...useStateArray])// добалвяет элмент в массив в перёд
        console.log(useStateArray);
    }


    return (
        <div><p>AddArray</p>
            <button onClick={addarrayuse}>Добавить в массив через use</button>
        </div>
    )
}

export default AddArray