const Menu = require('../../models/menu')
const Users = require('../../models/user')
function homeController() {
    return {
        async index(req, res) {
            // const users = await Users.find() //new line
            const pizzas = await Menu.find()
            return res.render('home', { pizzas: pizzas})
        }
    }
}

module.exports = homeController