import axios from 'axios';

import { EmailBodySchema } from '@/src/schemas/EmailSchema';

class EmailService {
    url: string;

    constructor() {
        this.url = `${process.env.NEXT_PUBLIC_API_URL}`;
    }

    async sendEmail(data: EmailBodySchema): Promise<void> {
        const req = await axios.post(`api/send/route`, {
            ...data,
        });

        return req.data;
    }
}

export default EmailService;
