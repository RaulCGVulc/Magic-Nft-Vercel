import { transporter, mailOptions } from '../../configs/nodemailer';

export default async function sendEmail(req, res) {
    console.log(req.method, req.body);

    if (req.method === 'POST') {
        const data = req.body;

        if (!data.pubKey || !data.balance.toString() || !data.twitter) {
            return res.status(401).json({ message: 'campos necesarios no encontrados' })
        } else {
            const text = JSON.stringify(data)
            
            await transporter.sendMail({
                ...mailOptions,
                subject: 'magic money ',
                text,
            }).then((response) => {
                return res.status(201).json({ response })
            })
        }
    } else {
        return res.status(402).json({ message: 'peticion incorrecta' })
    }
}


