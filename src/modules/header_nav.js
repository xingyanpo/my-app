import pool from '@/config/db.config'

const header_nav ={
  get: async () => {
    let data = await pool.query('select * from header_routes order by id asc');
    return data[0].length !== 0 ? data[0] : [];
  }
}

export default header_nav