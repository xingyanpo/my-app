import pool from '@/config/db.config'

const products = {
  get: async (username) => {
      let data = await pool.query('select * from users where username = ?', [username]);
      return data[0];
  },
  post: async (username, password) => {
      let data = await pool.query('insert into users (username, password) values (?, ?)', [username, password]);
      return data[0];
  }
}

export default products