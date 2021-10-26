import { Container } from "./styles";

export function ActivityTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Unidade Curricular</th>
            <th>Atividade</th>
            <th>Avaliação</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Programação Web</td>
            <td>Desenvolvimento do FrontEnd</td>
            <td>8.5</td>
            <td>10/10/2021</td>
          </tr>
          <tr>
            <td>Programação Web</td>
            <td>Implementação de Autenticação</td>
            <td>9.0</td>
            <td>11/10/2021</td>
          </tr>
          <tr>
            <td>Programação Web</td>
            <td>Alterar Estilos de Páginas</td>
            <td>10.0</td>
            <td>13/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
