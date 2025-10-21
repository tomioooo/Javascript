module.exports = {
  verificarLogin: (login, senha) => {
    let faixaEtaria;

    if (login === "Joedio" && senha === "12345") {
        acesso = "Logado";
    } else {
        acesso = "Negado";
    }

    return `Olá, ${login}! seu acesso foi: ${acesso}!`;
  }
};
