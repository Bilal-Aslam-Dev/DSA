const products = [
    { name: "Product A", rating: 4.8, totalReviews: 100 },
    { name: "Product B", rating: 3.5, totalReviews: 50 },
    { name: "Product C", rating: 4.2, totalReviews: 200 },
    { name: "Product D", rating: 4.7, totalReviews: 150 },
    { name: "Product E", rating: 2.7, totalReviews: 30 },
  ];
  
  // Function to sort products by weighted rating (considering both rating and total reviews)
  const sortByWeightedRating = (a, b) => {
    const weightedRatingA = (a.rating * a.totalReviews) / (a.totalReviews + 10);
    const weightedRatingB = (b.rating * b.totalReviews) / (b.totalReviews + 10);
    return weightedRatingB - weightedRatingA;
  };
  
  // Sort the products array using the weighted sorting function
  products.sort(sortByWeightedRating);
  
  // Display the sorted products

  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - Rating: ${product.rating} (${product.totalReviews} reviews)`);
  });
  
  