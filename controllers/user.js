const User = require('../models').User;

module.exports = {
  get(req, res) {
    return User.findAll()
        .then(datas => {
            res.status(200).send(datas);
        }) 
        .catch(error => res.status(400).send(error));
  },
  select(req, res) {
    return res.status(200).send(req.params.id);
  },
};