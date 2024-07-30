<!-- src/components/ProductList.svelte -->
<script>
    import ProductCard from './ProductCard.svelte';
    export let filteredProducts;
    export let toggleFavorite;
    export let isFavorite;
    export let openModal;
  </script>
  
  <div class="grid grid-cols-1 hidden:grid-cols-2 lg:grid-cols-4 gap-6 hover:shadow-lg">
    {#each filteredProducts as product (product.id)}
      <ProductCard 
        {product} 
        toggleFavorite={toggleFavorite} 
        isFavorite={isFavorite}
        openModal={openModal}
      />
    {/each}
  </div>
  