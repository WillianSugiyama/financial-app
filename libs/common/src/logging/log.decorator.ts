import { Logger } from '@nestjs/common';
import { LogOptions } from '../interfaces/logging.interface';

export function Log(options: LogOptions = {}) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    const logger = new Logger(options.serviceName || target.constructor.name);

    descriptor.value = async function (...args: any[]) {
      const startTime = Date.now();
      const methodName = propertyKey;

      try {
        logger.log(`Started ${methodName}`);

        const result = await originalMethod.apply(this, args);

        logger.log({
          message: `Completed ${methodName}`,
          executionTime: `${Date.now() - startTime}ms`,
          metadata: {
            args: JSON.stringify(args),
          },
        });

        return result;
      } catch (error) {
        logger.error({
          message: `Error in ${methodName}: ${error.message}`,
          executionTime: `${Date.now() - startTime}ms`,
          metadata: {
            args: JSON.stringify(args),
            stack: error.stack,
          },
        });
        throw error;
      }
    };

    return descriptor;
  };
}