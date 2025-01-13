import * as fs from 'fs';
import * as path from 'path';

export function readTestDataFromJson(fileName: string){
    const filePath = path.join(__dirname, `../data/${fileName}`);
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData); 
}