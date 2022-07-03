const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/user', require('./user'));
routes.use('/insurance', require('./insurance'));
routes.use('/jewelry', require('./jewelry'));
routes.use('/market', require('./market'));

routes.get('/', (req, res) => {
	res.render('index', {
		title: 'Welcome to Jewelry Cataloger',
		//   isAuthenticated: req.oidc.isAuthenticated(),
	});
});

module.exports = routes;
