const data = require('../../data.json');

module.exports = (req, res) => {
    const model = req.model;
  
      res.status(404).send('Invalid car ID');
};

