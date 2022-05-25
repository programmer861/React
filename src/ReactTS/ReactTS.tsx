import React from "react";
import "./ReactTS.scss";
import TSfile from "./parts/TSfile";
import Fragment from "./parts/Fragment";
import Dynamicinput from "./parts/Dynamicinput";
import ReceivesDataFun from "./parts/ReceivesDataFun";
import ReceivesDataInterface from "./parts/ReceivesDataInterface";
import TypeOptions from "./parts/typeoptions";
import AddArray from "./parts/AddArray";
import Object from "./parts/Object";
import { ArrayTS, ArrayObgectInterface } from "./parts/Interface";
import WorkingWithanArray from "./parts/workingWithanArray";
import { isConstructorDeclaration } from "typescript";

const ReactTS = () => {

  const numbervalue: number = 1;
  const numberArray: Array<number> = [1, 1, 2, 3, 4];
  const contact: [string, number] = ["Oleg", 1313232];
  function addarray(element: number): void {
    numberArray.push(element);
  }


  const objectTS: ArrayTS = {
    id: "1234",
    size: {
      width: 20,
      heidth: 30,
    },
    color: "fff",
    dynamicVariable: "Любой тип",
    interfaceArray: [1, 2, 3],
    setValue(value: number): number {
      return value;
    }
  };

  let ArrayObgect: ArrayObgectInterface[] = [
    { 'id': 1, 'test': 1, 'name': 'Иван' },
    { 'id': 2, 'test': 2, 'name': 'Олег' },
    { 'id': 3, 'test': 3, 'name': 'Виталий' },
    { 'id': 4, 'test': 4, 'name': 'Аркадий' },
    { 'id': 5, 'test': 5, 'name': 'Максим' },

  ]

  const array_handler = (action: string, arrayelement: ArrayObgectInterface, indexArray: number): void => {

    if (action === "addend") {
      ArrayObgect.push(arrayelement);
      console.log(ArrayObgect);
    }
    else if (action === "addbegining") {
      ArrayObgect.unshift(arrayelement);
      console.log(ArrayObgect);
    }
    else if (action === "delete") {
      ArrayObgect.splice(indexArray, 1);
      console.log(ArrayObgect);


      // удалить из массива объект по id
      // const index = ArrayObgect.findIndex(n => n.id === 3);
      // console.log(index);
      // if (index !== -1) {
      //   ArrayObgect.splice(index, 1);
      // }



    }

  }


  return (
    <div className="ReactTS">
      <div className="block_line_start"></div>
      <p>ReactTS Module start</p>

      <TSfile />
      <Fragment />
      <Dynamicinput />
      {/* передача данных по одному: пример */}
      <ReceivesDataFun numbervalue={numbervalue} numberArray={numberArray} addarray={addarray} contact={contact} />
      <ReceivesDataInterface numbervalue={numbervalue} numberArray={numberArray} addarray={addarray} contact={contact} />
      <TypeOptions numbervalue={numbervalue} numberArray={numberArray} addarray={addarray} contact={contact} />
      <AddArray />
      {/*передача обьекта */}
      <Object objectTS={objectTS} />

      <p>ReactTS Module end</p>
      <WorkingWithanArray ArrayObgect={ArrayObgect} array_handler={array_handler} />
      <div className="block_line_end"></div>
    </div>
  );
};

export default ReactTS;
