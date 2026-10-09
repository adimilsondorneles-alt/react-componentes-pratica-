function Nota({ disciplina, nota }) {
    return (
      <div className="card">
        <h2>{disciplina}</h2>
        <p>Nota: {nota}</p>
      </div>
    );
  }
  
  export default Nota;