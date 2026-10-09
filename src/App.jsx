import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
import Produto from "./components/Produto";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Titulo />

      <section>
        <h2>Alunos</h2>

        <div className="grade">
          <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Ana" turma="DS" />
          <Aluno nome="Pedro" turma="DS" />
          <Aluno nome="Adimilson" turma="DS" />
        </div>
      </section>

      <section>
        <h2>Notas</h2>

        <div className="grade">
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={9} />
          <Nota disciplina="HTML e CSS" nota={10} />
          <Nota disciplina="Banco de Dados" nota={10} />
        </div>
      </section>

      <section>
        <h2>Produtos</h2>

        <div className="grade">
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Headset Gamer"
            descricao="Fone com microfone"
            preco={180}
            disponivel={false}
          />

          <Produto
            nome="Monitor"
            descricao="Monitor Full HD de 24 polegadas"
            preco={850}
            disponivel={true}
          />
        </div>
      </section>

      <footer>
        <p>Atividade SENAI • React: Componentes e Props</p>
      </footer>
    </div>
  );
}

export default App;