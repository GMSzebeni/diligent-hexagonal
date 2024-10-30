import { StoreGreetingSecondaryPort } from "../business/greeting-service";

export class FakeStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
  save(name: string) {
    console.log(`Saved: ${name}`)
  }
}