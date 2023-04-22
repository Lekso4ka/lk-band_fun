import { createProductCard } from "./js/functions.js";

const data = localStorage.getItem("band-fruits"); // строка с данными или null
// const goods = (data && data[0] === "[" && data[1] === "{")  
// 	? JSON.parse(data) 
// 	: [];

const goods = (data?.[0] === "[" && data?.[1] === "{")  
	? JSON.parse(data) 
	: [];

console.log("ololo", goods);

const pr = {
	name: "Огурец",
	price: 67,
	cnt: 100
}

const goodsEl = document.querySelector(".goods");

// Ест товары в LS ? отобразить : добавить огурец и отобразить

if (!goods.length) {
	pr.id = 1;
	goods.push(pr);
	localStorage.setItem("band-fruits", JSON.stringify(goods));
}
goods.forEach(el => createProductCard(el, goodsEl));