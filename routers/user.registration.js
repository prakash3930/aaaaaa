const express = require('express');
const router = express.Router();

router.use(express.static('./views/publick'));

const { userRTS, userredirect, userLogin,home, contact, service, about } = require('../controllers/user.registration');
const { registrationMIddleware, loginMIddleware } = require('../middlewares/uRgistration.middleware');

// router start...


// registration post method
router.post('/registration',registrationMIddleware,userRTS);
// registration/redirect post method
router.get('/rgtr',userredirect);
// login post method...
router.post('/login',loginMIddleware,userLogin);

// all home page.....
router.get('/home',home);
router.get('/about',about);
router.get('/service',service);
router.get('/contact',contact);


module.exports = router;