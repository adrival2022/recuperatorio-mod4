import "reflect-metadata"
import app from './app';
import { AppDataSource } from "./db"
const port = 3000

async function main() {
    try {
        await AppDataSource.initialize();
        console.log('Database Conected...');
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))        
    } catch (error) {
        console.log(error);
    }
}

main();