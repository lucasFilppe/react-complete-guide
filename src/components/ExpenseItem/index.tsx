//ITENS DE COMPRA
import { Container } from "./styles";
interface ExpenseItemProps {
  id: number;
  title: string;
  date: string;
  amount: number;
}

function ExpenseItem({ id, title, date, amount }: ExpenseItemProps) {
  return (
    <Container>
      <h1>{date}</h1>
      <p>{title}</p>
      <button>{amount}</button>
    </Container>
  );
}

export default ExpenseItem;
