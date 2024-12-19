document.addEventListener("DOMContentLoaded", function () {
    // Modal "Cadastrar Cliente"
    document.getElementById("openModalCliente").addEventListener("click", function () {
      console.log("Abrindo modal de cliente");
      document.getElementById("modalCliente").style.display = "grid";
    });
  
    document.getElementById("closeModalBtnCliente").addEventListener("click", function () {
      console.log("Fechando modal de cliente");
      document.getElementById("modalCliente").style.display = "none";
    });
  
    // Modal "Cadastrar Serviço"
    document.getElementById("openModalServico").addEventListener("click", function () {
      console.log("Abrindo modal de serviço");
      document.getElementById("modalServico").style.display = "grid";
    });
  
    document.getElementById("closeModalBtnServico").addEventListener("click", function () {
      console.log("Fechando modal de serviço");
      document.getElementById("modalServico").style.display = "none";
    });
  
    // Modal "Gerar Orçamento"
    document.getElementById("openModalOrcamento").addEventListener("click", function () {
      console.log("Abrindo modal de orçamento");
      document.getElementById("modalOrcamento").style.display = "grid";
    });
  
    document.getElementById("closeModalBtnOrcamento").addEventListener("click", function () {
      console.log("Fechando modal de orçamento");
      document.getElementById("modalOrcamento").style.display = "none";
    });
  });