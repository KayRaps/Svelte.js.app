<!-- src/App.svelte -->
<script>
  import Nav from './components/Nav.svelte';
  import ProductList from './components/ProductList.svelte';
  import Modal from './components/Modal.svelte';
  
  let products = [];
  let filteredProducts = [];
  let categories = [];
  let searchQuery = "";
  let selectedCategory = "";
  let sortOrder = "";
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let showModal = false;
  let modalProduct = {};
  let loading = true;
  
  async function init() {
    await fetchCategories();
    await fetchProducts();
  }
  
  async function fetchProducts() {
    loading = true;
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();
    filteredProducts = products;
    loading = false;
  }
  
  async function fetchCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    categories = await response.json();
  }
  
  function toggleFavorite(productId) {
    // Toggle favorite logic
  }
  
  function isFavorite(productId) {
    return favorites.includes(productId);
  }
  
  function openModal(product) {
    modalProduct = product;
    showModal = true;
  }
  
  function closeModal() {
    showModal = false;
  }
  
  function filterProducts() {
    // Filtering logic
  }
  
  init();
</script>

<Nav 
  showModal={showModal}
  toggleModal={() => showModal = !showModal}
  categories={categories}
  selectedCategory={selectedCategory}
  setCategory={category => selectedCategory = category}
  searchQuery={searchQuery}
  setSearchQuery={query => searchQuery = query}
  sortOrder={sortOrder}
  setSortOrder={order => sortOrder = order}
  filterProducts={filterProducts}
/>

{#if loading}
  <p>Loading...</p>
{:else}
  <ProductList 
    filteredProducts={filteredProducts}
    toggleFavorite={toggleFavorite}
    isFavorite={isFavorite}
    openModal={openModal}
  />
{/if}

<Modal 
  showModal={showModal}
  closeModal={closeModal}
  modalProduct={modalProduct}
/>
