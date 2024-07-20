import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let contacts = [];
  try {
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      // Если ошибка связана с отсутствием файла, просто создаём новый пустой массив
      if (error.code !== 'ENOENT') {
        // Если ошибка другого типа, выбрасываем её для дальнейшей обработки
        throw error;
      }
    }

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);

