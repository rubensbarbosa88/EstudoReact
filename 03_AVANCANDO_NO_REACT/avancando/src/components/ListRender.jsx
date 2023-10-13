import { useState } from "react"
const ListRender = () => {
    const [list, setList] = useState(['Rubens', 'Camila', 'Calebe'])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * list.length)

        setList(prevList => {
            console.log(prevList)
            return prevList.filter((i, index) => randomNumber !== index)
        })
    }
    return (
        <div>
            <h2>ListRender</h2>
            <ul>
                { list.map((i, index) => (<li key={index}>{i}</li>)) }
            </ul>

            <button onClick={deleteRandom}> Deletar </button>
        </div>
    )
}

export default ListRender