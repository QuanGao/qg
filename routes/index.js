const router = require("express").Router();

router.post('/submit', (req, res) => {
    console.log(req.body)
    const Email = require('emailjs/email');
    const server = Email.server.connect({
        user: process.env.Gmail, 
        password: process.env.GmailPassword, 
        host:    "smtp.gmail.com", 
        ssl:     true
    });
    server.send({
      'text': req.body.message,
      'from': req.body.name,
      'to': "quangaowork@gmail.com",
      "subject": "from portofolio site",
      'reply-to': req.body.email,
    //   'subject': 'Tell us about your project: ' + req.body.company
    }, (error) => {
        console.log("error",error)
      if (error) {
        return res.send({status: 'KO'});
      } else {
        return res.send({status: 'OK'});
      }
    });
})


module.exports = router;
