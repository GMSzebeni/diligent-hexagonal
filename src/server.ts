import { join } from "node:path";
import createApp from "./primary-adapters/fastify-api-primary-adapter";
import { GreetingService } from "./business/greeting-service";
import { JsonStoreSecondaryAdapter } from "./secondary-adapters/json-store-secondary-adapter";
import { FileStore } from "./file-store";

const PORT = 4400;

const options = {
  logger: {
    level: 'debug', 
    transport: {target: 'pino-pretty'}
  }
};

const store = new FileStore('greetings.json', 'json');
const storeAdapter = new JsonStoreSecondaryAdapter(store);
const greetingService = new GreetingService(storeAdapter);
const app = createApp(options, greetingService);

app.listen({port: PORT}, (error, address) => {
  if(error) {
    app.log.error(error);
    process.exit(1);
  }
  app.log.info(`Server is started successfully.`)
});