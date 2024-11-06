import { GreetingService } from "./business/greeting-service";
import { FileStore } from "./file-store";
import { runPromptApp } from "./primary-adapters/prompt-input-primary-adapter";
import { TxtStoreSecondaryAdapter } from "./secondary-adapters/txt-store-secondary-adapter";

const store = new FileStore('greetings.txt', 'txt');
const storeAdapter = new TxtStoreSecondaryAdapter(store);
const greetingService = new GreetingService(storeAdapter);
runPromptApp(greetingService);