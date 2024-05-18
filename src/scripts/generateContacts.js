import fs from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js'; 
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    // Зчитування даних з файлу db.json
    let dbData = [];
    try {
        const data = fs.readFileSync(PATH_DB, 'utf8');
        dbData = JSON.parse(data);
    } catch (err) {
        console.error('Error reading db.json file:', err);
    }

    // Генерування нових контактів та додавання їх до масиву
    for (let i = 0; i < number; i++) {
        const newContact = createFakeContact(); // коли функція createFakeContact створює новий контакт
        dbData.push(newContact);
    }

    // Запис оновленого масиву контактів назад у файл db.json
    try {
        fs.writeFileSync(PATH_DB, JSON.stringify(dbData, null, 2));
        console.log(`${number} contacts have been generated and added to db.json`);
    } catch (err) {
        console.error('Error writing to db.json file:', err);
    }
};

export default generateContacts;

