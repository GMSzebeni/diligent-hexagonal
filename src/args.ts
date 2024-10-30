import { runArgsApp } from "./primary-adapters/args-input-primary-adapter";
import { FakeStoreSecondaryAdapter } from "./secondary-adapters/fake-store-secondary-adapter";
import { GreetingService } from './business/greeting-service';

const storeAdapter = new FakeStoreSecondaryAdapter();
const greetingService = new GreetingService(storeAdapter);
runArgsApp(greetingService);