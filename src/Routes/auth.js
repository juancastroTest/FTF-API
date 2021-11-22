const express = require('express')
const router = express.Router()
const Controller = require('../controllers/authController') 


router.post('/user/login/callback', Controller.AuthGithub)

router.post('/user/', Controller.getDataUser)

router.post('/data-repos', Controller.getDataRepos)
 
router.post('/data-repository', Controller.getDataOfRepository)

router.post('/branchs', Controller.getDataOfBranch)

router.post('/languages', Controller.getDataOfLanguages)

 
module.exports = router
