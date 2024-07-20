import * as path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.join(__dirname, '../db/db.json');

// export const PATH_DB = path.resolve('src', 'db', 'db.json'); 2var
// const pathDir = path.join(process.cwd());                              3var
// export const PATH_DB = path.join(pathDir, 'src', 'db', 'db.json');     3var

// console.log('Current file path:', __filename);
// console.log('Directory of the current file:', __dirname);
// console.log('Path to db.json:', PATH_DB);

