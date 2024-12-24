# Microservices Finance App

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#development">Development</a> •
  <a href="#documentation">Documentation</a>
</p>

## Overview
Finance App is a modern financial management application built using a microservices architecture. It provides a robust platform for personal and family finance management, featuring real-time data processing, AI-powered insights, and comprehensive financial tracking.

## Architecture

### Core Services
```
finance-app/
├── apps/
│   ├── api-gateway/          # GraphQL API Gateway
│   ├── user-service/         # User Management Service
│   ├── logging-service/      # Centralized Logging Service
│   ├── family-service/       # Family Management Service (TODO)
│   ├── financial-service/    # Financial Operations Service (TODO)
│   ├── balance-service/      # Balance Management Service (TODO)
│   ├── bank-service/         # Bank Integration Service (TODO)
│   └── ai-chat-service/      # AI Assistant Service (TODO)
├── libs/
│   └── common/              # Shared Code
│       ├── src/
│       │   ├── proto/       # Protocol Buffers
│       │   ├── interfaces/  # TypeScript Interfaces
│       │   └── logging/     # Logging Infrastructure
└── docker/
    ├── docker-compose.yml
    └── elk/                 # ELK Stack Configuration
```

### Service Ports
| Service           | Port  | Protocol |
|-------------------|-------|----------|
| API Gateway       | 3000  | GraphQL  |
| User Service      | 50051 | gRPC     |
| Family Service    | 50052 | gRPC     |
| Financial Service | 50053 | gRPC     |
| Balance Service   | 50054 | gRPC     |
| Bank Service      | 50055 | gRPC     |
| AI Chat Service   | 50056 | gRPC     |

## Tech Stack

### Core Technologies
- **Backend**: NestJS with TypeScript
- **API Gateway**: GraphQL
- **Microservices Communication**: gRPC
- **Database**: MongoDB
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Containerization**: Docker & Docker Compose

### Monitoring & Logging
- Elasticsearch for log storage
- Logstash for log processing
- Kibana for visualization
- Custom logging service with Winston

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Docker and Docker Compose
- MongoDB
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/finance-app.git
cd finance-app
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Start the ELK Stack
```bash
docker-compose -f docker/elk/docker-compose.yml up -d
```

5. Start the development servers
```bash
pnpm start:dev
```

### Environment Setup

Create `.env` files for each service:

```env
# User Service (.env)
MONGODB_URI=mongodb://root:root123@localhost:27017/user_db?authSource=admin
GRPC_PORT=50051

# API Gateway (.env)
USER_SERVICE_URL=localhost:50051
PORT=3000
```

## Development

### Available Scripts
```json
{
  "scripts": {
    "start:dev:user": "nest start user-service --watch",
    "start:dev:gateway": "nest start api-gateway --watch",
    "start:dev": "concurrently \"npm run start:dev:user\" \"npm run start:dev:gateway\"",
    "build": "nest build user-service && nest build api-gateway"
  }
}
```

### Testing the API

#### GraphQL API
Access GraphQL Playground: http://localhost:3000/graphql

Example mutation:
```graphql
mutation {
  createUser(input: {
    email: "test@example.com"
    password: "123456"
    name: "Test User"
  }) {
    id
    email
    name
  }
}
```

#### gRPC Services
Using grpcurl for testing:
```bash
grpcurl -plaintext -d '{
  "email": "test@example.com",
  "password": "123456",
  "name": "Test User"
}' localhost:50051 user.UserService/Create
```

### Logging System

Access Kibana dashboard:
- URL: http://localhost:5601
- Default index pattern: `finance-app-logs-*`

Example of using the logging decorator:
```typescript
import { Log } from '@app/common/logging';

@Injectable()
export class UserService {
  @Log({ serviceName: 'user-service' })
  async createUser(data: CreateUserDto) {
    // Implementation
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes
```bash
git commit -m 'Add amazing feature'
```
4. Push to the branch
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap

### Phase 1 - Core Infrastructure ✅
- [x] Project setup
- [x] User service implementation
- [x] API Gateway
- [x] Logging service

### Phase 2 - Basic Features ⏳
- [ ] Family service
- [ ] Financial service
- [ ] Authentication & Authorization
- [ ] Basic financial operations

### Phase 3 - Advanced Features 🚧
- [ ] Balance tracking
- [ ] Bank integration
- [ ] AI-powered insights
- [ ] Advanced analytics

### Phase 4 - Production Ready 📈
- [ ] Comprehensive testing
- [ ] CI/CD pipeline
- [ ] Documentation
- [ ] Performance optimization

## Support
For support, email contato@williansugiyama.com

## Acknowledgments
- NestJS Documentation
- gRPC Documentation
- GraphQL Documentation
- MongoDB Documentation
- Elastic Stack Documentation