const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'blake.bailey09@gmail.com',
    subject:'Welcome!',
    text: `Welcome to the app, ${name}. Let me know how you like it!`
  })
}

const sendDeletionEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'blake.bailey09@gmail.com',
    subject:'So sad to see you go!',
    text:`We are dissappointed to see you go, ${name}! If you have the time, 
    send us a quick email on why you deleted your account, and if we can do anything better!`
  })
}
module.exports = {
  sendWelcomeEmail,
  sendDeletionEmail
}