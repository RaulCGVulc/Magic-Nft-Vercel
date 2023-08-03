import nodemailer from 'nodemailer'


const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD


const config = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'raul@vulcanics.mx', // generated ethereal user
    pass: 'uwbzhmtrkcfgpofn', // generated ethereal password
  },
}

export const transporter = nodemailer.createTransport(config)

transporter.verify().then(() => {
  console.log('Ready to send email')
})

export const mailOptions = {
  from: 'raul@vulcanics.com',
  to: 'hector@vulcanics.com',
}