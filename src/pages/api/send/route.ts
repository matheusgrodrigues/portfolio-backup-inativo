import type { NextApiRequest, NextApiResponse } from 'next';

import { Resend } from 'resend';

import EmailTemplate from '@/src/components/template/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: configurar service para enviar os dados no body via request (Axios).
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    /*const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['matheusgomes1203@hotmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
        text: '',
    });

    if (error) {
        return res.status(400).json(error);
    } */

    const data = {};

    res.status(200).json({ data: req.body });
}
