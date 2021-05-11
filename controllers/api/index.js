const router = require('express').Router();
const userRoutes = require('./userRoutes');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// router.use('/users', userRoutes);

module.exports = router;
