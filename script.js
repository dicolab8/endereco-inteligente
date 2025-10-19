//script principal para configurar mascara de campos
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enderecoForm");
  const cepInput = document.getElementById("cep");
  const ufInput = document.getElementById("uf");
  const numeroInput = document.getElementById("numero");
  const logradouroInput = document.getElementById("logradouro");

  // Máscara e validação de CEP
  cepInput.addEventListener("input", () => {
    let value = cepInput.value.replace(/\D/g, ""); // remove tudo que não é número
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d{0,3}).*/, "$1-$2");
    }
    cepInput.value = value;
  });

  // Converter UF para maiúsculo automaticamente
  ufInput.addEventListener("input", () => {
    ufInput.value = ufInput.value.toUpperCase();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cep = cepInput.value.trim();
    const logradouro = logradouroInput.value.trim();
    const numero = numeroInput.value.trim();
    const uf = ufInput.value.trim();

    // Regex
    const cepRegex = /^\d{5}-\d{3}$/;
    const ufRegex = /^[A-Z]{2}$/;

    // Validações
    if (!cep) {
      alert("O campo CEP é obrigatório.");
      return;
    }
    if (!cepRegex.test(cep)) {
      alert("CEP inválido. Use o formato 00000-000.");
      return;
    }

    if (!logradouro) {
      alert("O campo Logradouro é obrigatório.");
      return;
    }
    if (logradouro.length < 5) {
      alert("O Logradouro deve conter no mínimo 5 caracteres.");
      return;
    }

    if (!numero) {
      alert("O campo Número é obrigatório.");
      return;
    }
    if (!/^\d+$/.test(numero)) {
      alert("O campo Número deve conter apenas dígitos numéricos.");
      return;
    }

    if (!uf) {
      alert("O campo UF é obrigatório.");
      return;
    }
    if (!ufRegex.test(uf)) {
      alert("UF inválida. Use apenas 2 letras maiúsculas (ex: SP, RJ).");
      return;
    }

    alert("Endereço cadastrado com sucesso");
    form.reset();
  });
});
