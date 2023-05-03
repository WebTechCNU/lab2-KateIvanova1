let products = [
    {
        img : "https://secretangel.kiev.ua/image/cache/products/1/1/3/128-1000x1340.jpg",
        name: "Product 1",
        description: "Парфумований спрей Victoria's Seckret Velnet Petals Shimmer Mist ",
        discount: "10% off",
        category: 1
    },
    {
        img : "https://angelsshop.com.ua/content/images/30/360x480l50nn0/81190998261791.png",
        name: "Product 2",
        description: "Парфумований спрей Victoria's Seckret Velvet Petals Mist ",
        discount: "20% off"
    },
    {
        img : "https://victoriassecretmx.vteximg.com.br/arquivos/ids/186331-380-506/11209243-2017_2.jpg?v=638101131339170000",
        name: "Product 3",
        description: "Парфумований спрей Victoria's Seckret Love Spell Mist and Lotion",
        discount: "5% off"
    },
    {
        img : "https://beangel.ua/23548/sprej-dlya-tila-cherry-elixir-no-33-vid-victoria-s-secret.jpg",
        name: "Product 4",
        description: "Парфумований спрей Victoria's Seckret Cherry Elixir Mist",
        discount: "15% off"
    },
    {
        img : "https://secretangel.kiev.ua/image/cache/catalog/panty/new/08.04/1244/blesk/newbra/17.09/newpanty09/pjsetviki/newoutlet/1324/sportsk/pjnew/vikapj/2021/trusiki2021/panty2021/new2901/newnew/newnewnew/brazpanty/maneken-panty/outletfebruary/bustie/eternalsunflowermist-1000x1340.jpg",
        name: "Product 5",
        description: "Парфумований спрей Victoria's Seckret Eternal Sunflower Mist",
        discount: "10% off"
    },
    {
        img : "https://www.victoriassecretbeauty.it/on/demandware.static/-/Sites-vs-catalog/default/dwaa100da3/images_vs/hires/111943048527_OF_B.jpg",
        name: "Product 6",
        description: "Парфумований спрей Victoria's Seckret Bare Vanilla Mist and Lotion",
        discount: "5% off"
    }
]

let userIsSubscribed = "user is subscribed";

function getProducts(){
    let container = document.querySelector("#cards-container");
    let output = "<div class='row'>";
    let i = 0;
    products.forEach(Element => {
        output += "<div class='col-sm-4'>";
        output += '<div class="card">';
        output +=  '<img src="'+Element.img+'" alt="'+Element.name+'">';
        output += '<p class="description"> '+Element.description+' </p>';
        output += '<p class="description discount"> '+Element.discount+' </p>';

        // TODO
        output += '</div>';
        output += '</div>';
        if(i % 3 == 2){
            output += "</div><div class='row'>"
        }
        i++;
    })
    output += "</div>"
    container.innerHTML = output;

}

function getCategory(){
    let filters = document.querySelector("#filters");
}

function getCategoryOne() {
    // отримати всі карточки продуктів
    let products = document.querySelectorAll('.card');
    // перебрати всі карточки продуктів
    products.forEach(function(product) {
      if (product.classList.contains('category-1')) {
        // показати продукт
        product.style.display = 'block';
      } else {
        // приховати продукт
        product.style.display = 'none';
      }
    });
  }

  // обрати картки продуктів, які відносяться до категорії 1, та додати їм клас "category-1"
let categoryOneProducts = document.querySelectorAll('.category-1');
categoryOneProducts.forEach(function(product) {
  product.classList.add('category-1');
});
// setTimeout(function () {
//     let modal = document.getElementById("modal");
//     let span = document.getElementById("close");
//     let timer = document.getElementById("timer");
//     let count = 5;
  
//     modal.style.display = "block";
//     const interval = setInterval(function () {
//       count--;
  
//       if (count >= 0) {
//         timer.innerHTML = "Зачекайте " + count + " секунд, щоб закрити рекламу";
//       } else {
//         ///clearInterval(interval);
//         timer.innerHTML = "Ви можете закрити рекламу";
  
//         span.classList.add("close-hover");
//         span.onclick = function () {
//           modal.style.display = "none";
//         };
  
//         window.onclick = function (event) {
//           if (event.target == modal) {
//             modal.style.display = "none";
//           }
//         };
//       }
//     }, 1000);
//   }, 9000000);

  // setTimeout(function () {
  //   let modal = document.getElementById("subcribe");
  //   let span = document.getElementById("close-sub");
  //   let sub_span = document.getElementById("sub-span");
  //   let reject_span = document.getElementById("reject-span");
  
  //   if (localStorage.getItem("subscribed") === "true") {
  //     return;
  //   }
  
  //   modal.style.display = "block";
  //   span.classList.add("close-hover");
  
  //    //SUB
  //    sub_span.onclick = function () {
  //       localStorage.setItem("subscribed", "true");
  //       modal.style.display = "none";
  //       alert("Дякуємо за підписку!");
  //     };
  
  //     reject_span.onclick = function () {
  //         modal.style.display = "none";
  //       };
  
  //       close_span.onclick = function () {
  //         modal.style.display = "none";
  //       };
  
  //     function Filter(option) {
  //         const nodes = document.querySelectorAll(".node");
        
  //         nodes.forEach((element) => {
  //           const text = element.textContent;
        
  //           if (!text.includes(option)) {
  //             if (element.classList.contains("view")) {
  //               element.classList.remove("view");
  //             }
  //             element.classList.add("hide");
  //             return;
  //           }
        
  //           element.classList.remove("hide");
  //           element.classList.add("view");
  //         });
  //       }}, 3000);
  function close(){
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
  }

  setTimeout(function(){
    let modal = document.querySelector("#myModal");
    if(!localStorage.getItem('user sub')){
      modal.style.display = "block";
    }
    let close = document.querySelector("#closeNew");//
    close.onclick = function(event) {
      modal.style.display = "none";
    }
  }, 3000)



  function subscribe(){
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
    // document.cookie = userIsSubscribed;
    localStorage.setItem("user sub", true)
  }