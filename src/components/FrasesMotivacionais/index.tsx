//exercicio para treinar componentes

interface FrasesProps{
  id: number;
  assunto: string
  frase: string;
  autor: string
}

function FrasesMotivacionais({assunto, frase, autor}: FrasesProps){
    return(
        <>  
          <div>
            <h1>{assunto}</h1>
            <p>{frase}</p>
            <span>{autor}</span>
          </div>
        </>
    )
}

export default FrasesMotivacionais;