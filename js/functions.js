const createProductCard = (obj, parentTag) => {
	const productCard = document.createElement("div");
	productCard.className = "product";
	productCard.innerHTML = `
		<span>${obj.name}</span>
		<span>${obj.price}</span>
		<span>${obj.cnt}</span>
		<span data-id=${obj.id}>
			<button>Изменить</button>
			<button>Удалить</button>
		</span>
	`
	parentTag.append(productCard);
}


export { createProductCard }