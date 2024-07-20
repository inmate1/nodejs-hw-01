import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';
export const removeAllContacts = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(data);
    if (!Array.isArray(contacts)) {
      throw new Error('Data is not an array');
    }
         contacts = [];
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }

  }
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing to file:', error);
    throw error;
  }
};

removeAllContacts();
