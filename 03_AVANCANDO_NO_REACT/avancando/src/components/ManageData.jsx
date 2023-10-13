import { useState } from "react"

const ManageData = () => {
    let [num, setNum] = useState(10)

    const add = () => {
        num += 10
        setNum(num)
    }
  return (
    <>
        <h2>ManageData {num}</h2>
        <button onClick={add}>Somar</button>
    </>
  )
}

export default ManageData