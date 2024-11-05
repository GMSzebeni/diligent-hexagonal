import { StoreGreetingSecondaryPort } from "../business/greeting-service";
import { FileStore } from "../file-store";

export class TxtStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
    private readonly store: FileStore<string>;

    constructor(store: FileStore<string>) {
        this.store = store;
    }
    
    save(name: string) {
        this.store.write(`Saved: ${name}`);
    }
}