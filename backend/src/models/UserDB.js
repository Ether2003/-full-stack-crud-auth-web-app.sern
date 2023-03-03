import db from '../db/db.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * this file exports a User model.
 */
class UserDB {
    constructor(email, password) {
        this.id = uuidv4();
        this.email = email;
        this.password = password;
    }

    // this method returns a list of User objects
    async getAll() {
        const results = await db.query('SELECT * FROM users');
        return results[0];
    }

    // this method returns a user User object specified by its id
    async getById(id) {
        const results = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return results[0];
    }

    // this method returns a user object by its email
    async getByEmail(email) {
        const results = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return results[0][0];
    }
    
    // this method inserts a new User into the database
    async create(User) {
        await db.query('INSERT INTO users (id, email, password) VALUES (?, ?, ?)', [User.id, User.email, User.password]);
    }

    // this method updates an existing User from the databaes
    async update(id, email) {
        await db.query('UPDATE users SET email = ? WHERE id = ? ', [email, id]);
    }

    // this method deletes an existing User from the database
    async delete(id) {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

export default UserDB;