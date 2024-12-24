import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as Transport from 'winston-transport';

export const createWinstonLogger = (serviceName: string): LoggerService => {
  const transports: Transport[] = [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message, ...meta }) => {
          return `[${timestamp}] ${level}: ${message} ${
            Object.keys(meta).length ? JSON.stringify(meta) : ''
          }`;
        }),
      ),
    }),
    
    new winston.transports.Http({
      host: 'localhost',
      port: 8080,
      path: '/',
      ssl: false,
      format: winston.format.json(),
    }),
  ];

  return WinstonModule.createLogger({
    defaultMeta: {
      service: serviceName,
    },
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
    transports,
  });
};