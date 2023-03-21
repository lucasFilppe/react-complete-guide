//ITENS DE COMPRA
import { title } from "process";
import { useState } from "react";
import { Container } from "./styles";

interface ExpenseItemProps {
  id: number;
  title: string;
  date: string;
  amount: number;
}

function ExpenseItem(props: ExpenseItemProps){

  const [title, setTitle] = useState(props.title)
  function clickHandler(){
    setTitle('update')
    console.log(title)
  }
  return (
    <Container>
      <h1>{props.date}</h1>
      <p>
        {title}
        <button type="button" onClick={clickHandler}>
          {props.amount}
        </button>
      </p>
    </Container>
  );
}

export default ExpenseItem;
