import { mailOptions, transporter } from "../configs/nodemailer"

export const sendEmail = async (data) => {

  const text = JSON.stringify(data)
  try {
    transporter.sendMail({
      ...mailOptions,
      subject: 'prueba de web3',
      text
    })
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}