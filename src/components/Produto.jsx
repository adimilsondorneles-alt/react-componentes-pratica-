function Produto({ nome, descricao, preco, disponivel }) {
    return (
      <div className="produto">
        <h3>{nome}</h3>
  
        <p>{descricao}</p>
  
        <p className="preco">
          Preço: R$ {preco.toFixed(2).replace(".", ",")}
        </p>
  
        <p className={disponivel ? "disponivel" : "indisponivel"}>
          {disponivel ? "Disponível" : "Indisponível"}
        </p>
  
        <button>Comprar</button>
      </div>
    );
  }
  
  export default Produto;