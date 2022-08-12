async function api(){
     try{
      let result=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");

      let result1=await result.json();
      for(let i=0; i<result1.length; i++){
         var div=document.createElement("div");
         div.setAttribute("id","div");
         div.innerHTML=`<div class="card" style="width: 18rem;">
           <div class="card-body">
           <img src="${result1[i].api_featured_image}" class="img-thumbnail" alt="...">
             <h4 class="card-title"><span>Brand:</span> ${result1[i].brand}</h4>
             <h4><span>name: </span>${result1[i].name}</h4>
             <h4><span>price: </span>Rs. ${result1[i].price} only<h5>
             <p><span>Link </span>: ${result1[i].product_api_url}<h5>
             <p><span>description </span>:${result1[i].description}<h5>
           </div>
         </div>`;
        
         document.body.append(div)
      }
     }catch(err){
      // console.log(err)
     }

     }
     api();

