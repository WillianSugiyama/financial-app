import { BadRequestException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Observable } from 'rxjs';

@Injectable()
export class ValidationInterceptor implements NestInterceptor {
  constructor(private readonly validatorClass: any) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const [data] = context.getArgs();
    const validatorObject = plainToClass(this.validatorClass, data);

    const errors = await validate(validatorObject);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return next.handle();
  }
}