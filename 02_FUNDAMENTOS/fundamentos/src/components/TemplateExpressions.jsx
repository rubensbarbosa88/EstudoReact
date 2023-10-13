const TemplateExpressions = () => {
    const name = 'Rubinho'
    const data = {
        job: 'Programador',
        city: 'São Paulo'
    }
    return (
        <>
            <p> Olá {name}!</p>
            <p>Você é de {data.city}, sua profissão é {data.job}.</p>
        </>
    )
}

export default TemplateExpressions