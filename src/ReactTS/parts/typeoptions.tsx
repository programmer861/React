import React from 'react'
import { createUnparsedSourceFile } from 'typescript'

// пример получения через type


type TypeOption = {
    numbervalue: number,
    numberArray: Array<number>,
    addarray(element: number): void,
    contact: [string, number]

}

const TypeOptions: React.FC<TypeOption> = (props) => {
  //{numbervalue} деструкторизация 


  return (
    <div>typeoptions</div>
  )
}

export default TypeOptions