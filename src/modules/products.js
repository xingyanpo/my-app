import pool from '@/config/db.config'

const products = {
  get: async (id) => {
    if (!!id) {
      let data = await pool.query('select * from products where id = ?', [id])
      return data[0]
    } else {
      let data = await pool.query('select * from products')
      return data[0]
    }
  }
}

export default products