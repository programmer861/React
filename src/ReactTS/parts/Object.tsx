import React from 'react'
import { isConstructorDeclaration } from 'typescript';
import { ArrayTS } from "./Interface";





interface Propsinterface {
    objectTS: ArrayTS,

}

const Object: React.FC<Propsinterface> = ({ objectTS }) => {
    // const React.FC<{objectTS: object}> без интерфейса


    // console.log(objectTS.setValue(3132));



    return (
        <div>Object</div>
    )
}

export default Object