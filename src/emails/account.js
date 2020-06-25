const sgmail = require('@sendgrid/mail')
const sendgridapi = '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'

sgmail.setApiKey(sendgridapi)


sgmail.send({
    from: 'dishantsethi266@gmail.com',
    to: 'sethi.dishant22@gmail.com',

    subject: 'hi first mail',
    text: 'lerning to send first mail'
})