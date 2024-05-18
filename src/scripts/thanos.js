import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const thanos = async () => {
    try {
        //path для побудови абсолютного шляху
        const fullPath = path.resolve(PATH_DB);

        //прочитання вмісту файлу
        const data = await fs.readFile(fullPath, 'utf8');
        const contacts = JSON.parse(data);

        //для видалення контактів із ймовірністю 50%
        const updatedContacts = contacts.filter(() => Math.random() > 0.5);

        //запис оновленого масиву контактів у файл
        await fs.writeFile(fullPath, JSON.stringify(updatedContacts, null, 2), 'utf8');

        console.log('Thanos snapped his fingers.');
    } catch (error) {
        console.error('Error processing contacts:', error);
    }
};

await thanos();
