import BunqJSClient from '@bunq-community/bunq-js-client';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    public async test() {
        const bunqJSClient = new BunqJSClient();

        bunqJSClient.api.requestInquiry.post(0, 0, "asdflkjasdf", { currency: "EUR", value: "10" }, {
            type: "EMAIL",
            value: "ik@niekvangogh.nl",
        })

    }
}
