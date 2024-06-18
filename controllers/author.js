const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../models');

const getArticleByAuthorId = (req, res) => {
    models.Author.findByPk(req.params.id, {
        include: [{
            model: models.Article
        }]
    })
        .then(author => {
            return res.status(200).json({author});
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
}

module.exports = {
    getArticleByAuthorId
};