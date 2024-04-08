import axios from 'axios';

import { EmailBodySchema } from '@/schemas/EmailSchema';

class EmailService {
    url: string;

    constructor() {
        this.url = `${process.env.API_URL}`;
    }

    async sendEmail(data: EmailBodySchema): Promise<void> {
        const req = await axios.post(`${this.url}/send/route`, {
            ...data,
        });

        return req.data;
    }
}

export default EmailService;
