// src/ProductStore.js
import { writable } from 'svelte/store';

export const products = writable([]);
export const filteredProducts = writable([]);
export const categories = writable([]);
export const selectedCategory = writable('');
export const searchQuery = writable('');
export const sortOrder = writable('');
export const favorites = writable(JSON.parse(localStorage.getItem('favorites')) || []);
export const loading = writable(true);
