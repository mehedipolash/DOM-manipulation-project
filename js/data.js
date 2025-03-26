const products = [
  {
    name: 'shopease',
    title: 'Fix Mobile Button Issue',
  },

  {
    name: 'cloudSync',
    title: 'Add dark mode',
  },

  {
    name: 'swiftpay',
    title: 'Optimize Home Paze',
  },

  {
    name: 'meta',
    title: 'Add new emoji',
  },

  {
    name: 'google llc',
    title: 'Integrate OpenAI API',
  },

  {
    name: 'glassdoar',
    title: 'Improve Job searching',
  },
];


function showCards() {
  for (let product of products) {
    console.log(product)


    const productCard = document.createElement('div');
    productCard.innerHTML = `
  <div class=" task-container   bg-slate-200 rounded-md shadow-md p-5 w-full max-w-xs space-y-3">

    <div class="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm w-fit">
      ${product.name}
    </div>
    <h2 class="text-xl font-semibold">${product.title}</h2>
    <p class="text-gray-500 bg-white text-sm truncate rounded-md p-2">
      Debug using Chrome <br> DevTools, check for overlappi...
    </p>
    <div class="border-t pt-4 flex justify-between items-center">
      <div class="text-sm text-gray-500">
        <span class="font-medium">Deadline</span><br>
        <span class="text-gray-900 font-semibold">21 March 2025</span>
      </div>
      <button class="task-btn bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
        Completed
      </button>
    </div>
  </div>
  
  
  `;
    document.getElementById('product-container').append(productCard);
  }

  

   
}
 showCards();
