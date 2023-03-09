//ITENS DE COMPRA

import { Container } from "./styles";

interface ExpenseItemProps {
  title: string,
  date: string,
  amount: number,
}

function ExpenseItem(props: ExpenseItemProps) {

  return (
    <Container>
      <table>
        <tr>
          <th>{props.title}</th>
          <th>{props.date}</th>
          <th>
            <button>{props.amount}</button>
          </th>
        </tr>
      </table>
    </Container>
  );
}

export default ExpenseItem;
