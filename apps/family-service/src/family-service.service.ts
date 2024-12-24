import { Injectable } from '@nestjs/common';

@Injectable()
export class FamilyServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
