import BunqJSClient from '@bunq-community/bunq-js-client';
import { Injectable } from '@nestjs/common';
var forge = require('node-forge');
var crypto = require('crypto')


@Injectable()
export class PaymentsService {

    constructor() {

    }

    public async test() {
        var crypto = require('crypto');
        var sharedSecret = crypto.randomBytes(16); // should be 128 (or 256) bits
        var initializationVector = crypto.randomBytes(16); // IV is always 16-bytes
        
        var plaintext = "Everything's gonna be 200 OK!";
        var encrypted;
        

        let cipher = crypto.Cipheriv('aes-128-cbc', sharedSecret, initializationVector);
        encrypted += cipher.update(plaintext, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        

        const client = new BunqJSClient({
            get(key: string) {

            },
            set(key: string, value: any) {

            },
            remove(key: string) {

            }
        });
        await client.run("sandbox_e756aec5125eda792105d84db1fcc8e210508dc5cbb3cba0ff20ef49", [], "SANDBOX", cipher);
        await client.install();
        await client.registerDevice("NieksPC");
        await client.registerSession();


    }
}
