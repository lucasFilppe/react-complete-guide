
import  {Container}  from "./styled"

function Card(props: any) {
    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default Card;