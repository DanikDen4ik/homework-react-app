import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../productsSlice';
import { nanoid } from 'nanoid';

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    available: true,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...form, id: nanoid(), price: parseFloat(form.price) };
    dispatch(addProduct(newProduct));
    setForm({ name: '', description: '', price: '', available: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
      <label>
        Available:
        <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
