"use client";

export default function Home() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
  
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch('/api/generatepdf', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated.pdf'; // Nome do arquivo para download
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('Falha ao gerar o PDF');
      }
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  };

  return (
    <div>
        <title>Gerador de Garantia</title>
      <div className="header">
        <img src="CasarãoHeader.jpg" alt="" />
      </div>
      <h1>Gerador de garantia</h1>
      <div className="formWrap">
        <form
          id="invoiceForm"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="group">
            <div className="firstGroupChild">
              <label htmlFor="produto">Produto:</label>
              <input
                type="text"
                className="fields"
                placeholder="Ex: Pelicula 3M"
                maxLength="23"
                id="produto"
                name="produto"
              />
            </div>

            <div className="firstGroupChild">
              <label htmlFor="marcaVeiculo">Marca do veículo:</label>
              <input
                type="text"
                className="fields"
                placeholder="Ex: Toyota"
                maxLength="19"
                id="marcaVeiculo"
                name="marcaVeiculo"
              />
            </div>

            <div className="firstGroupChild">
              <label htmlFor="modelo">Modelo:</label>
              <input
                type="text"
                className="fields"
                placeholder="Ex: Corolla"
                maxLength="19"
                id="modelo"
                name="modelo"
              />
            </div>
          </div>

          <div className="group">
            <div className="secondGroupChild">
              <label htmlFor="placa">Placa:</label>
              <input
                type="text"
                className="fields"
                placeholder="Ex: ABCD-1234"
                maxLength="11"
                id="placa"
                name="placa"
              />
            </div>
            <div className="secondGroupChild">
              <label htmlFor="periodoGarantia">Período de garantia:</label>
              <input
                type="text"
                className="fields"
                placeholder="Ex: 12 meses"
                maxLength="12"
                id="periodoGarantia"
                name="periodoGarantia"
              />
            </div>
            <div className="secondGroupChild">
              <label htmlFor="dataInst">Data:</label>
              <input
                type="text"
                className="fields"
                placeholder="Ex: 01/01/2024"
                maxLength="10"
                id="dataInst"
                name="dataInst"
              />
            </div>
          </div>

          <h2>Dados do cliente</h2>
          <div className="group">
            <div className="thirdGroupChild">
              <label htmlFor="nomeCliente">Nome do Cliente:</label>
              <input
                type="text"
                className="fields"
                maxLength="25"
                id="nomeCliente"
                name="nomeCliente"
              />
            </div>
            <div className="thirdGroupChild">
              <label htmlFor="telefoneCliente">Telefone do Cliente:</label>
              <input
                type="text"
                className="fields"
                maxLength="19"
                id="telefoneCliente"
                name="telefoneCliente"
              />
            </div>
            <div className="thirdGroupChild">
              <label htmlFor="emailCliente">Email do Cliente:</label>
              <input
                type="text"
                className="fields"
                maxLength="25"
                id="emailCliente"
                name="emailCliente"
              />
            </div>
          </div>

          <div className="buttonWrap">
            <button id="heroBtn" type="submit">
              GERAR PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
