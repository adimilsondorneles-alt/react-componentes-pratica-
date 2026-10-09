function Aluno({ nome, turma }) {
    return (
      <div className="card">
        <h2>{nome}</h2>
        <p>Turma: {turma}</p>
      </div>
    );
  }
  
  export default Aluno;