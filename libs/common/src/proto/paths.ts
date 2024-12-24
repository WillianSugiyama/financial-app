import { join } from 'path';

export const PROTO_PATHS = {
  USER: join(__dirname, 'user.proto'),
} as const;

export type ProtoKeys = keyof typeof PROTO_PATHS;