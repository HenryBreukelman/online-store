import React, { useState, useEffect } from 'react';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const clothingItems = data.filter(item => item.category.includes('clothing'));
      console.log('Fetched data:', clothingItems); // Log the fetched data
      setItems(clothingItems);
    };

    fetchItems();
  }, []);

  const handleSort = (event) => {
    const sortMethod = event.target.value;
    let sortedItems;

    switch (sortMethod) {
      case 'price_low_to_high':
        sortedItems = [...items].sort((a, b) => a.price - b.price);
        break;
      case 'price_high_to_low':
        sortedItems = [...items].sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems = [...items];
    }

    setItems(sortedItems);
  };

  return (
    <section className='container'>
      <div className='title flex space-between'>
        <h2>FEATURED PRODUCTS</h2>
        <select onChange={handleSort}>
          <option value="">Sort by</option>
          <option value="price_low_to_high">Low to High</option>
          <option value="price_high_to_low">High to Low</option>
        </select>
      </div>
    <div className="items-container grid-container">
      {Array.isArray(items) && items.map(item => (
        <div key={item.id} className="item">
          <div className="item-img">
            <img src={item.image} alt={item.title} />
          </div>
          <h2 className='description'>{item.title}</h2>
          <p><span>${item.price}</span></p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Items;