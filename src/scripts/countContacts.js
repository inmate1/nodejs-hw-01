import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (!Array.isArray(contacts)) {
      throw new Error('Data is not an array');
    } else {
      const count = contacts.length;
      return count;
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
};

console.log(await countContacts());
