function payment() {
  let Name = document.getElementById("Name").value;
  let Phone = document.getElementById("Phone").value;
  let Email = document.getElementById("Email").value;
  let Place = document.getElementById("Place").value;


  let Biryani = document.getElementById("Biryani").value;
  let Chicken = document.getElementById("Chicken").value;
  let Staters = document.getElementById("Staters").value;



  let arr1 = [
    parseInt(Biryani),
    parseInt(Chicken),
    parseInt(Staters)
  ];

  let sum = 0;
  for (let i = 0; i <= arr1.length; i++) {
    if (!isNaN(arr1[i])){
      sum = sum + arr1[i];
    }
  }

  let GST = document.getElementById("GST").value || 0;

  let GST1 = (sum * GST) / 100;
  let Total = GST1 + sum;
  let result =
    "Name: " +
    Name +
    "<br>" +
    "Phone: " +
    Phone +
    "<br>" +
    "Email: " +
    Email +
    "<br>" +
    "Place: " +
    Place +
    "<br>" +
    "Total amount: " +
    sum +
    "<br>" +
    `Total amount with GST ${GST}%: ` +
    Math.round(Total);

  document.getElementById("paymentdetails").innerHTML = result;
}

function links() {
  const nav = document.querySelector(".navbar");
  const home = document.querySelector(".Items");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    home.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}
links();
