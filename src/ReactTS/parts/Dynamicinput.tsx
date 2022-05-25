import React, { useState } from 'react'


const Dynamicinput = () => {
    const [titele, setTitele] = useState<string>('Динимический input')
    const [dinput, setDinput] = useState<string>('TS Input проверка')
    const [textAreaValue, setTextAreaValue] = useState<string>("textarea");
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [selectValue, setSelectValue] = useState<string>("optionA");

    const [sliderValueFunction, setSliderValueFunction] = useState<number>(0);


    const tsinput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDinput(event.target.value);

    }

    const slider = (e: { target: { value: string; }; }) => {
        console.log(e);
        setSliderValueFunction(parseInt(e.target.value, 10));
    }

    console.log("1")

    const clickinputone = (e: React.KeyboardEvent) => {
        console.log(e)
        if (e.key === 'Enter') {
            console.log('Клик на клавишу "Enter" ')
            setTitele('');
        }
    }




    return (
        <>
            <p>{titele}</p>

            <input value={titele} onKeyPress={clickinputone} onChange={event => (setTitele(event.target.value))}
                placeholder="Динамичкесий инпут и Отслеживание клик enter"
            />
            <p>
                {dinput}
            </p>
            <input onChange={tsinput}
                placeholder="TS Input проверка"
            />
            <p>{textAreaValue}</p>
            <textarea
                value={textAreaValue}
                onChange={(
                    e: React.ChangeEvent<HTMLTextAreaElement>,
                ): void => setTextAreaValue(e.target.value)}
                placeholder="textarea"
            />

            <p>{sliderValue}</p>
            <input
                type="range" /* ползунок*/
                min={0}
                max={100}
                value={sliderValue}

                onChange={(
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void => {
                    setSliderValue(
                        parseInt(e.target.value, 10),
                    )
                }

                }
            />
            <p>

                Реализация через функцию sliderValueFunction
            </p>
            <p>
                {sliderValueFunction}
            </p>

            <input
                type="range" /* ползунок*/
                min={0}
                max={100}
                value={sliderValueFunction}
                onChange={slider}
            />

            <p>select</p>
            <select
                value={selectValue}
                onChange={(
                    ev: React.ChangeEvent<HTMLSelectElement>,
                ): void => setSelectValue(ev.target.value)}
            >
                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
                <option value="optionC">Option C</option>
            </select>

        </>
    )
}

export default Dynamicinput