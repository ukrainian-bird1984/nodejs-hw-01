import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
    try {
        //читання вмісту файлу
        const data = await fs.readFile(PATH_DB, 'utf8');
        //парсинг JSON в об'єкт
        const contacts = JSON.parse(data);
        //повернення масиву контактів
        return contacts;
    } catch (error) {
        console.error('Error reading contacts:', error);
        return [];
    }
};

console.log(await getAllContacts());
