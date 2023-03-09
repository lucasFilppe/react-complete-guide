//exercicio para treinar componentes

interface FrasesProps{
  id: number;
  assunto: string
  frase: string;
  autor: string
}

function FrasesMotivacionais(props: FrasesProps){
    return(
        <>
          <h1>{props.assunto}</h1>
          <p>{props.frase}</p>
          <span>{props.autor}</span>
        </>
    )
}

export default FrasesMotivacionais;