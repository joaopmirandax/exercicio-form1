import { useState } from "react";

function FormPesquisa() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [satisfacao, setSatisfacao] = useState("neutro");
  const [comentario, setComentario] = useState("");
  const [aceiteTermos, setAceiteTermos] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // Mostra no console todos os dados preenchidos
    console.log("Dados da pesquisa:", {
      nome,
      email,
      satisfacao,
      comentario,
      aceiteTermos,
    });

    // Volta todos os campos para o estado inicial
    setNome("");
    setEmail("");
    setSatisfacao("neutro");
    setComentario("");
    setAceiteTermos(false);
  }

  return (
    <main className="pagina">
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Pesquisa de satisfação</h1>
        <p>Conte para nós como foi a sua experiência.</p>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <fieldset>
          <legend>Nível de satisfação</legend>

          <label className="opcao">
            <input
              type="radio"
              name="satisfacao"
              value="insatisfeito"
              checked={satisfacao === "insatisfeito"}
              onChange={(event) => setSatisfacao(event.target.value)}
            />
            Insatisfeito
          </label>

          <label className="opcao">
            <input
              type="radio"
              name="satisfacao"
              value="neutro"
              checked={satisfacao === "neutro"}
              onChange={(event) => setSatisfacao(event.target.value)}
            />
            Neutro
          </label>

          <label className="opcao">
            <input
              type="radio"
              name="satisfacao"
              value="satisfeito"
              checked={satisfacao === "satisfeito"}
              onChange={(event) => setSatisfacao(event.target.value)}
            />
            Satisfeito
          </label>
        </fieldset>

        <label htmlFor="comentario">Comentário</label>
        <textarea
          id="comentario"
          rows="4"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
        />

        <label className="opcao aceite">
          <input
            type="checkbox"
            checked={aceiteTermos}
            onChange={(event) => setAceiteTermos(event.target.checked)}
          />
          Aceito os termos de privacidade da pesquisa
        </label>

        <input type="submit" value="Enviar pesquisa" disabled={!aceiteTermos} />
      </form>
    </main>
  );
}

export default FormPesquisa;
