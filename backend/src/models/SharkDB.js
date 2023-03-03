import db from '../db/db.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * this file exports a Shark model.
 */
class SharkDB {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
    }

    // this method returns a list of Shark objects
    async getAll() {
        const results = await db.query('SELECT * FROM sharks');
        return results[0];
    }

    // this method inserts a new Shark into the database
    async create(Shark) {
        await db.query('INSERT INTO sharks (id, name) VALUES (?, ?)', [Shark.id, Shark.name]);
    }

    // this method updates an existing Shark from the databaes
    async update(id, name) {
        await db.query('UPDATE sharks SET name = ? WHERE id = ? ', [name, id]);
    }

    // this method deletes an existing Shark from the database
    async delete(id) {
        await db.query('DELETE FROM sharks WHERE id = ?', [id]);
    }
}

export default SharkDB;