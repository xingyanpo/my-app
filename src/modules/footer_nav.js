import pool from '@/config/db.config'

const data ={
  get: async () => {
    let data = await pool.query('select * from footer_routes f left join footer_sub_routes fs on f.id = fs.footer_routes_id');
    return data[0].length !== 0 ? data[0] : [];
  }
}

export default data