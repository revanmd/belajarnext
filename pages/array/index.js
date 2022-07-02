import { useState } from "react"


export default function Handler(){
    const [Data, setData] = useState([])
    const [inputNav, setInputNav] = useState()

    const handlerSetNavData = ()=>{
        let tempData = [...Data]
        tempData.push(inputNav)

        setData(tempData)

    }
    return (

        <>
            <input
                onChange={
                    (e)=>{
                        setInputNav(e.target.value)
                    }
                }
            />
            <button
                onClick={handlerSetNavData}
            >
                Tambah Navbar
            </button>
            <ul>
                {
                    Data.map((item,id)=>(
                        <li key={id}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>

    )

}