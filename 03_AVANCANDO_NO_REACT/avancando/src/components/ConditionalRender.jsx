const ConditionalRender = () => {
const x = false
  return (
    <>
    <h2>ConditionalRender</h2>
    {x && <p> Opa {x}</p>}
    {!x && <p> Ihh rapaiz {x}</p>}

    <p> Ternário</p>
    {x ? <p> Opa {x}</p> : <p> Ihh rapaiz {x}</p>}
    </>
  )
}

export default ConditionalRender