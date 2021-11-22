const request = require('superagent');

exports.AuthGithub = (req, res) => {

    const { code } = req.body

    if(!code){
        return res.send({
            success: false, 
            message: "Error, no code" 
        })
    }
 
  
    request
    .post('https://github.com/login/oauth/access_token')
    .send({ 
        client_id: process.env.CLIENT_ID, 
        client_secret: process.env.CLIENT_SECRET,   
        code: code
    }) 
    .set('Accept', 'application/json')
    .end((error, result) => {
        if (error) {
            console.log('err', err)
        } else {
            const data = result.body
            return res.status(200).send(data)
        }
      });

}


exports.getDataUser = (req, res) => {

    const { accessToken } = req.body

   
    request
    .get('https://api.github.com/user')
    .set('Authorization','token ' + accessToken) 
    .set( {'user-agent': 'node.js' }) 
    .then((result) => {
       res.send(result.body)
    })

}


exports.getDataRepos = (req, res) => {

    const { accessToken, owner } = req.body
    
    request
    .get(`https://api.github.com/users/${owner}/repos`)
    .set('Authorization','token ' + accessToken) 
    .set( {'user-agent': 'node.js' }) 
    .then((result) => {
       res.send(result.body)
    })    
    .catch((err) => {
        console.log(err.badRequest)
    })
}




exports.getDataOfRepository = (req, res) => {

    const { accessToken, owner, repo } = req.body.data
   
    request
    .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
    .set('Authorization','token ' + accessToken) 
    .set( {'user-agent': 'node.js' }) 
    .then((result) => {
       res.send(result.body)
    })
    .catch((err) => {
        console.log(err.badRequest)
    })

}




exports.getDataOfBranch = (req, res) => {

    const { accessToken, owner, repo } = req.body.data
    
   
    request
    .get(`https://api.github.com/repos/${owner}/${repo}/branches`)
    .set('Authorization','token ' + accessToken) 
    .set( {'user-agent': 'node.js' }) 
    .then((result) => {
       res.send(result.body)
    })
    .catch((err) => {
       console.log(err)
    })
 

}


exports.getDataOfLanguages = (req, res) => {


    const { accessToken, owner, repo } = req.body.data
   
    request
    .get(`https://api.github.com/repos/${owner}/${repo}/languages`)
    .set('Authorization','token ' + accessToken) 
    .set( {'user-agent': 'node.js' }) 
    .then((result) => {
       res.send(result.body)
    })
    .catch((err) => {
    console.log(err)
    })
 

}

