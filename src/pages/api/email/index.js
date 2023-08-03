import { transporter, mailOptions } from '../../../configs/nodemailer';

const sendEmail = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body
        if (!data.wallet || !data.balance.toString()|| !data.twitter) {
            return res.status(400).json({ message: 'campos necesarios no encontrados' })
        }
        const text = JSON.stringify(data)
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