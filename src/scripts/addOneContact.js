import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const generateRandomContact = () => {
    const names = ["John Doe", "Jane Smith", "Alice Johnson", "Robert Brown"];
    const emails = ["john@example.com", "jane@example.com", "alice@example.com", "robert@example.com"];
    const phones = ["123-456-7890", "234-567-8901", "345-678-9012", "456-789-0123"];

    const name = names[Math.floor(Math.random() * names.length)];
    const email = emails[Math.floor(Math.random() * emails.length)];
    const phone = phones[Math.floor(Math.random() * phones.length)];

    return {
        id: uuidv4(),
        name,
        email,
        phone
    };
};

export const addOneContact = async () => {
    try {
        //читання вмісту файлу
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        //генерація нового контакту
        const newContact = generateRandomContact();

        //дод. нового контакту до масиву
        contacts.push(newContact);

        //занесення оновленого масиву назад у файл
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        
        console.log('New contact added:', newContact);
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

await addOneContact();
