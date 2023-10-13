const MessgaeChange = ({changeMsg}) => {
  const messages = ['Opa', 'Beleza?', 'Tmj', 'hahahaha']
  
  return (
    <>
        <button onClick={() => changeMsg((messages[0]))}> 1 </button>
        <button onClick={() => changeMsg((messages[1]))}> 2 </button>
        <button onClick={() => changeMsg((messages[2]))}> 3 </button>
        <button onClick={() => changeMsg((messages[3]))}> 4 </button>
    </>
  )
}

export default MessgaeChange