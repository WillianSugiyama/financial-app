import { LogLevel } from "@nestjs/common";

export interface LogMetadata {
  [key: string]: string | number | boolean;
}

export interface LogOptions {
  serviceName?: string;
  includeMetadata?: boolean;
  level?: LogLevel;
  additionalMetadata?: LogMetadata;
}

export interface LogEntry {
  serviceName: string;
  level: LogLevel;
  message: string;
  metadata?: LogMetadata;
  timestamp: number;
  traceId?: string;
}