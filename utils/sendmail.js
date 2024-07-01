const nodemailer = require("nodemailer");

exports.sendMail = (req, res) =>{
const transport = nodemailer.createTransport({
    service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sh491441si@gmail.com",
    pass: "vosgxrsylvbwdeii",
  },
});

  // send mail with defined transport object

  const mailOptions = {

    from: '"XYZ pvt. ltd." <sh491441si@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Subscription to XYZ", // Subject line
    // text: "Hello world?", // plain text body
    html: `<h1>Congratulation!!! You have successfully register.</h1> 
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quibusdam necessitatibus reiciendis, laborum tenetur numquam?</p>`, // html body
  } ;

  transport.sendMail(mailOptions, (err, info)=>{
    if(err) return res.send(err);
        console.log(info);
        return res.send(
            "<h1><span>✔</span><br>Email sent! Check your inbox.</h1>"
        )
    
  })
}