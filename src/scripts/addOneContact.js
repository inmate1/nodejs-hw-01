import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    contacts = JSON.parse(data);
  } catch (error) {
    //  Обработка ошибок при чтении файла
    if (error.code === 'ENOENT') {
      console.log('File not found, create a new file.');
    } else {
      // Если ошибка другого типа, выбрасываем её для дальнейшей обработки
      console.error('Error reading file:', error);
      throw error;
    }
  }
  try {
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing to file:', error);
    throw error;
  }
};

addOneContact();

// export const addOneContact = async () => {
//   let contacts = [];

//   try {
//     // Чтение файла базы данных
//     const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
//     console.log('Data read from file:', data);
//     // Парсинг JSON данных
//     contacts = JSON.parse(data);
//     console.log('Parsed contacts:', contacts);
//   } catch (error) {
//     // Обработка ошибок при чтении файла
//     if (error.code === 'ENOENT') {
//       // Если файл не существует, создать пустой массив контактов
//       console.log('File not found. Creating a new empty contacts array.');
//     } else {
//       // Если ошибка другого типа, выбрасываем её для дальнейшей обработки
//       console.error('Error reading file:', error);
//       throw error;
//     }
//   }

//   try {
//     // Создание нового контакта и добавление в массив
//     const newContact = createFakeContact();
//     contacts.push(newContact);
//     console.log('New contact added:', newContact);

//     // Запись обновлённых данных обратно в файл
//     await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
//     console.log('Successfully added one new contact.');
//   } catch (error) {
//     // Обработка ошибок при записи в файл
//     console.error('Error writing to file:', error);
//     throw error;
//   }
// };



// export const addOneContact = async () => {
//   let contacts = [];

//   try {
//     try {
//       const data = await fs.readFile(PATH_DB, 'utf8');
//       contacts = JSON.parse(data);
//     } catch (error) {
//       if (error.code !== 'ENOENT') {
//         throw error;
//       }
//     }

//     const newContact = createFakeContact();
//     contacts.push(newContact);

//     await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
//     console.log('Successfully added one new contact.');
//   } catch (error) {
//     console.error('Error adding contact:', error);
//   }
// };

// fs.readFile(DB_PATHf {encoding: "UTF-8"})
// .thenCCd-4-^ —^ ---------
// . then(/no const newHovies: any[]
// const ne&Movies = [ ... movies, {userld: 1, id: 1000, title: "Title 1", completed: fa
// t fs.writeFile(DB_PATH, JSON.stringifyCnewMovies, undefined, 2));|
// })
// .then(C) console.logC'Done"))
// .catchCerror => console.error(error));
