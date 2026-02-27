const data = {
  drinks:[
    {name:"Cold Coffee", img:"https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee.jpg", price:"$3"},
    {name:"Mint Mojito", img:"https://abeautifulmess.com/wp-content/uploads/2022/07/mojito-recipe-1-1.jpg", price:"$4"},
    {name:"Lemonade", img:"https://assets.malibudrinks.com/wp-content/uploads/2024/03/Malibu_Lemonade_1x1-scaled.jpg?tr=q-80,w-2560", price:"$2"},
    {name:"Chocolate Shake", img:"https://greenheartlove.com/wp-content/uploads/2024/02/chocolate-milk-shake-8.jpg", price:"$5"},
    {name:"Strawberry Shake", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkrVU4_dHblJcM9XujuRuJ_T4y09V5_11oA&s", price:"$5"},
    {name:"Iced Latte", img:"https://www.peanutbutterandfitness.com/wp-content/uploads/2023/08/Smores-Iced-Latte-Recipe-7.jpg", price:"$4"},
    {name:"Orange Juice", img:"https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-1-of-1.jpeg", price:"$3"},
    {name:"Energy Drink", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35M4YEkJHMuEgcB8Dy3qYt3vYxW50jCBrpQ&s", price:"$4"}
  ],

  desserts:[
    {name:"Chocolate Cake", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7mYb2zvY2IGO9_EocEptv0k-JTabTeh58g&s", price:"$6"},
    {name:"Ice Cream", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNb4qLVc8li_M2NHBfEl14DaVpUCmplY5lg&s", price:"$3"},
    {name:"Brownie", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzmbySkOEQSrSvM9BKtzXFoMwyUtxoDA0tg&s", price:"$4"},
    {name:"Donuts", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnycfVBS0XsRdFIsp2tnCpOMYw0840ysnehQ&s", price:"$3"},
    {name:"Cupcake", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjKGUMra2IrMVOJI1SWf3VC9h0FAPF1c4lA&s", price:"$2"},
    {name:"Cheesecake", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHwemILGijFpOj9B858aFDL9cc6V1mtnreg&s", price:"$5"},
    {name:"Waffles", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1d9If9mgPJL41_zkD-ICCq-6CjubVLtn9A&s", price:"$4"},
    {name:"Macarons", img:"https://thescranline.com/wp-content/uploads/2024/09/CHOOCLATE-MACARONS-S-02.jpg", price:"$5"}
  ],

  dishes:[
    {name:"Zinger Burger", img:"https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/c9dr/product/83751906/327db213-db6a-4fac-a269-1a61d797cfbf.jpg?width=%s", price:"$6"},
    {name:"Pizza Slice", img:"https://assets.indolj.io/upload/1771095173-20inch-slice-golootlo-jpg.jpeg", price:"$5"},
    {name:"Loaded Fries", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rJJJ7jnVYbiii3Gnqk3edvO08iqinDaUsg&s", price:"$4"},
    {name:"Chicken Wrap", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBdUtp1OVnhseslWFBlaFI9OnkniqMcZV6A&s", price:"$5"},
    {name:"Pasta", img:"https://www.pepperbowl.com/wp-content/uploads/2025/02/instant-pot-penne-pasta-recipe.jpg", price:"$6"},
    {name:"Fried Chicken", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCQPPdtGH6wqYZLbr7nf-RzugllaIMVPibw&s", price:"$7"},
    {name:"Club Sandwich", img:"https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/club_sandwich_16496_16x9.jpg", price:"$5"},
    {name:"Hot Wings", img:"https://www.budgetbytes.com/wp-content/uploads/2024/01/buffalo-wings-overhead-horizontal-WR-scaled.jpg", price:"$6"}
  ]
};

function showCategory(cat){
  const box = document.getElementById("menuCards");
  box.innerHTML = "";

  data[cat].forEach(item=>{
    box.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="${item.img}">
        </div>
        <div class="card-back">
          <h4>${item.name}</h4>
          <div class="price">${item.price}</div>
        </div>
      </div>
    </div>`;
  });
}

// default first page
showCategory('drinks');