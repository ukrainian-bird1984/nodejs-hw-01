import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const removeAllContacts = async () => {
    try {
        //path для побудови абсолютного шляху
        const fullPath = path.resolve(PATH_DB);

        //запис порожнього масиву в файл
        await fs.writeFile(fullPath, JSON.stringify([], null, 2), 'utf8');
        
        console.log('All contacts removed.');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

await removeAllContacts();
