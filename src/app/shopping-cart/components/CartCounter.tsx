'use client'
import {useState} from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({value = 0}:Props) => {
    const [counter= value, setCounter] = useState<number>();

    const addCounter = (counter:number)=>{
        setCounter(counter + 1);
    }
    const substCounter = (counter:number)=>{
        if (counter === 0) return;
        setCounter(counter - 1);
    }

    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button onClick={() => {
                    addCounter(counter)
                }} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600
                transition-all w-[100px] mr-2">
                    +1
                </button>
                <button onClick={() => {
                    substCounter(counter)
                }} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600
                transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}
