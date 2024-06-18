const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../../models')

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,

        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        return res.status(200).json({ message: 'New article is added'});
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

const updateArticle = (req, res) => {
    const method = req.method

    if (method === 'GET') {
        models.Article.findByPk(req.params.id)
            .then(article => {
                return res.status(200).json({article})
            })
            .catch(error => {
                return res.status(500).send(error.message)
            })
    } else if (method === 'POST') {
        let name = req.body.name
        let slug = req.body.slug
        let image = req.body.image
        let body = req.body.body
        let authorId = req.body.authorId

        models.Article.update(
            {
                name: name,
                slug: slug,
                image: image,
                body: body,
                published: new Date().toISOString().slice(0, 19).replace('T', ' '),
                AuthorId: authorId
            }, 
            {
                where: {
                    id: req.params.id
                }
            })
                .then(article => {
                    return res.status(200).json({message: 'Article is updated'})
                })
                .catch(error => {
                    return res.status(500).send(error.message)
                })
    }
}



module.exports = {
    createArticle,
    updateArticle
}