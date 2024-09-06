import pool from '@/config/db.config'

const information = {
  get: async () => {
    let data = await pool.query('select * from information');
    return data[0].length !== 0 ? data[0][0] : {};
  }
}
export default information