import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "logging";

export interface LogRequest {
  serviceName: string;
  level: string;
  message: string;
  metadata: { [key: string]: string };
  timestamp: number;
}

export interface LogRequest_MetadataEntry {
  key: string;
  value: string;
}

export interface LogResponse {
  success: boolean;
  message: string;
}

export interface BatchLogRequest {
  logs: LogRequest[];
}

export interface BatchLogResponse {
  success: boolean;
  message: string;
  processedCount: number;
}

export const LOGGING_PACKAGE_NAME = "logging";

export interface LoggingServiceClient {
  createLog(request: LogRequest): Observable<LogResponse>;

  createBatchLog(request: BatchLogRequest): Observable<BatchLogResponse>;
}

export interface LoggingServiceController {
  createLog(request: LogRequest): Promise<LogResponse> | Observable<LogResponse> | LogResponse;

  createBatchLog(request: BatchLogRequest): Promise<BatchLogResponse> | Observable<BatchLogResponse> | BatchLogResponse;
}

export function LoggingServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createLog", "createBatchLog"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("LoggingService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("LoggingService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const LOGGING_SERVICE_NAME = "LoggingService";
