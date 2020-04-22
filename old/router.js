const express = require("express");
const mainController = require('./controllers/mainController');
const exerciceController = require('./controllers/exerciceController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

const adminMiddleware = require('./middlewares/admin');

const router = express.Router();

router.get('/', mainController.home);
router.get('/exercice', exerciceController.list);

router.route('/signup')
        .get(userController.signupPage)
        .post(userController.signupAction)
        ;

router.route('/login')
        .get(userController.loginPage)
        .post(userController.loginAction)
        ;

router.get('/logout', userController.logout);
router.get('/profile', userController.profilePage);

router.get('/admin', adminMiddleware, adminController.homePage);
router.route('/admin/exercice')
        .get(adminMiddleware, adminController.addExercicePage)
        .post(adminMiddleware, adminController.addExerciceAction)
        ;

module.exports = router;