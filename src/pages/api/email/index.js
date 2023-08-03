
import { transporter, mailOptions } from '../../../configs/nodemailer';

const sendEmail = async (req, res) => {
    if (req.method === 'POST') {
        console.log('si entra')
        const data = req.body
        if (!data.wallet || !data.balance || !data.twitter) {
            return res.status(400).json({ message: 'campos necesarios no encontrados' })
        }
        console.log(data)
        const text = JSON.stringify(data)
        console.log(text)
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: 'esta es una prueba',
                text,
            })


            res.status(200).json({ success: true })
        } catch (err) {
            console.warn(err)
            return res.status(400).json({ message: err.message })
        }

    }

    return res.status(400).json({ message: 'peticion incorrecta' })
}

export default sendEmail