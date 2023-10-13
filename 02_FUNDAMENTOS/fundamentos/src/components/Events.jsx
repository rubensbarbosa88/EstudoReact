const Events = () => {
    const handleMyEvent = e => {
        console.log('Clicou!!')
        console.log(e)
    }

    const renderSomenthing = x => {
        if (x) return <p> Renderizando isso!</p>
        else return <p> Renderizando aquilo</p>
    }
    return (
        <>
            <div>
                <button onClick={handleMyEvent}> Clique aqui!</button>
                <br />
                {renderSomenthing(true)}
                {renderSomenthing(false)}
            </div>
        </>
    )
}

export default Events