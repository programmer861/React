import React from 'react'
import { ArrayObgectInterface } from "./Interface";

interface Propsinterface {
    ArrayObgect: ArrayObgectInterface[],
    array_handler(action: string, arrayelement: ArrayObgectInterface, indexArray: number): void,

}



const WorkingWithanArray: React.FC<Propsinterface> = (props) => {

    const AddArray = (action: string): void => {

        const TemporaryObject: ArrayObgectInterface = {
            'id': 100,
            'test': 1,
            'name': 'Иван'
        }

        if (action === "addend") {// в конец

            props.array_handler(action, TemporaryObject, 2);

        }

        else if (action === "addbegining") {

            props.array_handler(action, TemporaryObject, 2); // в начало

        }

        else if (action === "delete") {

            props.array_handler(action, TemporaryObject, 2); // в начало

        }

    }



    return (
        <div><p>workingWithanArray</p>
            <button onClick={() => AddArray('addend')}> Добавить в массив в конец</button>
            <button onClick={() => AddArray('addbegining')}> Добавить в массив в начало</button>
            <button onClick={() => AddArray('delete')}> Удалить из массива</button>
        </div>
    )
}

export default WorkingWithanArray