import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
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
          <Nota disciplina="Banco de Dado" nota={10} />
        </div>
      </section>
    </div>
  );
}

export default App;