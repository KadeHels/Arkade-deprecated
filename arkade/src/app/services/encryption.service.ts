import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  encryptSecretKey: string;
  constructor() {
    this.encryptSecretKey = 'secretkey';
  }



  // encryptData(data: string) {

  //   try {
  //     return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // decryptData(data: string) {

  //   try {
  //     const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
  //     if (bytes.toString()) {
  //       return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //     }
  //     return data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}
