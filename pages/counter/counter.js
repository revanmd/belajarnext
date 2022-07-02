import { useState } from "react"

export default function Hander(){
    const [counter, setCounter] = useState(0)

    const handlerCounter = () => {
        setCounter(counter+1)
    }

    return (
        <>
            <button
                className="btn btn-primary mt-2 mb-2"
                onClick={handlerCounter}
            >
                Clicked
            </button>
            <h6>
                You clicked this page {counter}
            </h6>
        </>
    )
}