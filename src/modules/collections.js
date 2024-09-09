import pool from '@/config/db.config'

const data = {
  get: async (id) => {
    if (!id) {
      let data = await pool.query('SELECT c.id AS collection_id, c.name AS collection_name, c.description AS collection_description, c.featured_image AS collection_featured_image, p.id AS product_id, p.name AS product_name, p.description AS product_description, p.price AS product_price, p.featured_image AS product_featured_image, p.created_at AS product_created_at, p.updated_at AS product_updated_at FROM collections c JOIN collections_products cp ON c.id = cp.collections_id JOIN products p ON cp.products_id = p.id');
      return data[0];
    } else {
      let data = await pool.query('SELECT c.id AS collection_id, c.name AS collection_name, c.description AS collection_description, c.featured_image AS collection_featured_image, p.id AS product_id, p.name AS product_name, p.description AS product_description, p.price AS product_price, p.featured_image AS product_featured_image, p.created_at AS product_created_at, p.updated_at AS product_updated_at FROM collections c JOIN collections_products cp ON c.id = cp.collections_id JOIN products p ON cp.products_id = p.id WHERE c.id = ?', [id]);
      return data[0];
    }
  }
}
export default data