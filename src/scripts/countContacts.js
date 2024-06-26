import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
        //path для побудови абсолютного шляху
        const fullPath = path.resolve(PATH_DB);

        //читання вмісту файлу
        const data = await fs.readFile(fullPath, 'utf8');
        
        //парсинг JSON в об'єкт
        const contacts = JSON.parse(data);
        
        //повернення кількості контактів
        return contacts.length;
    } catch (error) {
        console.error('Error counting contacts:', error);
        return 0;
    }
};

const contactCount = await countContacts();
console.log(`Number of contacts: ${contactCount}`);
