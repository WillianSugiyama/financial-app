import { status } from '@grpc/grpc-js';
import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

@Catch()
export class GrpcExceptionFilter implements RpcExceptionFilter<any> {
  catch(exception: any, host: ArgumentsHost): Observable<any> {
    return throwError(() => ({
      code: status.INTERNAL,
      message: exception.message || 'An error occurred',
      details: exception.details || exception.stack,
    }));
  }
}