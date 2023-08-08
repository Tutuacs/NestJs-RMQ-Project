"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const process_1 = require("process");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [`${process_1.env.RMQ_URL}`],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=listener.js.map