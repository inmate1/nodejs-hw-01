import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  let contacts = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found, create a new file.');
    } else {
      console.error('Error reading file:', error);
      throw error;
    }
  }
     return contacts;
};

console.log(await getAllContacts());
