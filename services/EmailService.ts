import axios from 'axios';

class EmailService {
    url: string;

    constructor() {
        this.url = 'http://localhost:3000/api/send/route';
    }

    async sendEmail(data: object): Promise<object> {
        try {
            const req = await axios.post(this.url, {
                ...data,
            });

            return req.data;
        } catch {
            () => {};
        }

        return {};
    }
}

export default EmailService;
