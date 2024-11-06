import { StoreGreetingSecondaryPort } from "../business/greeting-service";
import { FileStore } from "../file-store";

export class TxtStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
    private readonly store: FileStore;

    constructor(store: FileStore) {
        this.store = store;
    }
    
    async save(greeting: string) {
        await this.store.write(`Saved: ${greeting}`);
    }
}