import { existsSync, PathLike, writeFileSync } from "node:fs";
import { appendFile } from "node:fs/promises";

export class FileStore<T> {
    constructor(private readonly path: PathLike) {
        if(!existsSync(this.path)) {
            writeFileSync(this.path, '', 'utf-8');
        }
    }

    async write(data: T) {
        const content = JSON.stringify(data, null, 2)
        await appendFile(this.path, content + '\r\n', 'utf-8');
    }
}