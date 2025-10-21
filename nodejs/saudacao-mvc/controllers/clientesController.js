const clientesModel = require('../models/saudacaoModel');

module.exports = {
    formLogin: (req, res) => {
    res.sendFile('formLogin.html', { root: './views' });
  },

    listarClientes: (req, res) => {
    const { login, senha } = req.body;
    const mensagem = saudacaoModel.verificarLogin(login, senha);
    res.send(`<h1>${mensagem}</h1>`);
  },

};
