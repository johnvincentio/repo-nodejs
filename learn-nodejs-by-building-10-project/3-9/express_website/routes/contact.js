var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jv2351mf@gmail.com',
            pass: 'greet258$'
        }
    });
    var mailOptions = {
        from: 'john smith <jv2351it@gmail.com>',
        to: 'jv2351mf@gmail.com',
        subject: 'Test from Express Website',
        text: 'New submission from name :'+req.body.name+' email '+req.body.email+' Message '+req.body.message,
        html: '<p>New submission from </p><ul><li>Name: '+req.body.name+'</li><li>Email:  '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log (error);
            res.redirect('/');
        }
        else {
            console.log('Message Sent: '+info.response);
            res.redirect('/');
        }
    })
});

module.exports = router;
