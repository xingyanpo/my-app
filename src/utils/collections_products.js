export default function collectionsProducts(data) {
  if (!data) return [];
  return data.reduce((acc, item) => {
    let collection = acc.find(col => col.collection_id === item.collection_id);
    if (!collection) {
      collection = {
        collection_id: item.collection_id || '',
        collection_name: item.collection_name || '',
        collection_description: item.collection_description || '',
        collection_featured_image: item.collection_featured_image || '',
        products: []
      };
      acc.push(collection);
    }
    collection.products.push({
      product_id: item.product_id || '',
      product_name: item.product_name || '',
      product_description: item.product_description || '',
      product_price: item.product_price || '',
      product_featured_image: item.product_featured_image || '',
      product_created_at: item.product_created_at || '',
      product_updated_at: item.product_updated_at || ''
    });
    return acc;
  }, []);
}