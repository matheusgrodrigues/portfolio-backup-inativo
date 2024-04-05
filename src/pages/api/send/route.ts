import type { NextApiRequest, NextApiResponse } from 'next';

import { Resend } from 'resend';

import EmailTemplate from '@/src/components/template/EmailTemplate';
import { EmailBodySchema } from '@/schemas/EmailSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body = {
            ...req.body,
        } as EmailBodySchema;

        try {
            await resend.emails.send({
                from: `Portfólio - <${process.env.RESEND_DELIVERED_EMAIL}>`,
                to: [`${process.env.NEXT_PUBLIC_BRAND_EMAIL}`],
                subject: 'Novo Lead Gerado',
                react: EmailTemplate(body),
                text: body.mensagem,
            });

            res.status(200);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    res.status(200).send(null);
}
