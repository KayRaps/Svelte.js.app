<script>
  import { onMount } from "svelte";
  import Modal from "./Components/ProductCard.svelte";
  import NavBar from "./Components/NavBar.svelte";
  import ProductCard from "./Components/ProductCard.svelte";
  import ProductFilter from "./Components/ProductFilter.svelte";
  import ProductList from "./Components/ProductList.svelte";

  let products = [];
  let categories = [];
  let selectedCategory = "";
  let sortOrder = "";

  // Reactive statement to compute filtered and sorted products
  $: filteredProducts = products
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) =>
      sortOrder === "low-to-high"
        ? a.price - b.price
        : sortOrder === "high-to-low"
        ? b.price - a.price
        : 0
    );

  onMount(async () => {
    await fetchCategories();
    await fetchProducts();
  });

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();
  }

  async function fetchCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    categories = await response.json();
  }

  function updateCategory(category) {
    selectedCategory = category;
  }

  function updateSortOrder(order) {
    sortOrder = order;
  }
</script>

<main>
  <ProductFilter
    categories={categories}
    selectedCategory={selectedCategory}
    onCategoryChange={updateCategory}
    onSortChange={updateSortOrder}
  />

  <ProductList products={filteredProducts} />
</main>
