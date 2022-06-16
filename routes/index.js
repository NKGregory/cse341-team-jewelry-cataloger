const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/user', require('./user'));
routes.use('/insurance', require('./insurance'));
routes.use('/jewelry', require('./jewelry'));
routes.use('/market', require('./market'));

module.exports = routes;