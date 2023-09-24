const TemplateExpressions = () =>{

    const name = "Humberto"
    const data = {
        age:19,
        job:"Jovem aprendiz",
        dream: "Become a front-end developer"
    }
    return(
        <div>
            <h1>Olá, {name}, tudo bem? vi que você tem
            {data.age} anos, trabalha como {data.job} e
            seu sonho é {data.dream}</h1>

        </div>

    );
};

export default TemplateExpressions