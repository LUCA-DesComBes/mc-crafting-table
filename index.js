const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";
const MATERIAL_DIAMOND_INGOT_ID = "DIAMOND-INGOT";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";
const MATERIAL_DIAMOND_INGOT_IMG = "./assets/diamond-ingot.webp";

const materials = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_DIAMOND_INGOT_ID,
];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
	MATERIAL_DIAMOND_INGOT_IMG,
];

const pickaxeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];
const axeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";

const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [1, 2, 2, 1, 3, 1];

// Coder ici
const inventoryRows = document.getElementById("inv-r");
const caseCrafts = document.querySelectorAll(".case-craft");
const caseResult = document.querySelector(".case-result");

let pipette = "";
// let selectedMaterialName = "";
let selectedMaterialImgSrc = "";
// let selectedButton = null;
let btnOldActive = null;
let caseOldActive = null;

function validTwoArray(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		const recetteItem = arr1[i];
		const tableItem = arr2[i];

		if (recetteItem !== tableItem) {
			return false;
		}
	}
	return true;
}

function createElement(tag, attributes = {}) {
	const element = document.createElement(tag);
	for (const key in attributes) {
		if (key === "className") element.className = attributes[key];
		else element.setAttribute(key, attributes[key]);
	}
	return element;
}

function createBtnInventory(name, imgSrc) {
	const button = document.createElement("button");
	const img = document.createElement("img");

	button.classList.add("case-inv");

	img.src = imgSrc;
	img.alt = name;

	button.appendChild(img);

	return button;
}

for (const caseCraft of caseCrafts) {
	caseCraft.addEventListener("click", () => {
		const img = caseCraft.lastElementChild; // .createElement("img");

		console.log(img);

		if (img == null) return;

		console.log(false);
		img.src = selectedMaterialImgSrc;
		img.alt = pipette;

		// for(let i = 0; i < pipette.length; i++) {
		// 	craftingTable.splice(pickaxeRecipe[i], 1, pipette)
		// }

			if (pickaxeRecipe.length !== pipette) {
				craftingTable.splice(pickaxeRecipe.length, 1, pipette);
				console.log(craftingTable);
			} 

		let result = validTwoArray(pickaxeRecipe, craftingTable);
		console.log(result, craftingTable, pickaxeRecipe);
	});
}
for (let i = 0; i < inventoryTable.length; i++) {
	const newItemNumber = inventoryTable[i];
	const materialName = materials[newItemNumber];
	const materialImgSrc = materialsImageSrc[newItemNumber];

	const newButton = createBtnInventory(materialName, materialImgSrc);

	newButton.addEventListener("click", () => {
		if (pipette == materialName && newButton.classList.contains("active")) {
			pipette = "";
			newButton.classList.remove("active");
			btnOldActive = null;
			selectedMaterialImgSrc = "";
		} else {
			if (btnOldActive) {
				btnOldActive.classList.remove("active");
			}

			pipette = materialName;
			selectedMaterialImgSrc = materialImgSrc;
			newButton.classList.add("active");
			btnOldActive = newButton;
		}
		//createRecipes(selectedMaterialImgSrc, pipette);
		console.log(btnOldActive, pipette, selectedMaterialImgSrc);
	});

	inventoryRows.appendChild(newButton);
}
// for (let i = 0; i < inventoryTable.length; i++) {
// 	const truc = inventoryTable[i];
// 	const btnInv = createElement("button", { className: "case-inv" });

// 	btnInv.addEventListener("click", () => {
// 		if (materials[truc] === materials[1]) {
// 			pipette = MATERIAL_IRON_INGOT_IMG;
// 			console.log(pipette);
// 		} else {
// 			pipette = "";
// 		}
// 		if (materials[truc] === materials[2]) {
// 			pipette = MATERIAL_STICK_IMG;
// 			console.log(pipette);
// 		} else {
// 			pipette = "";
// 		}
// 		if (materials[truc] === materials[3]) {
// 			pipette = MATERIAL_DIAMOND_INGOT_IMG;
// 			console.log(pipette);
// 		} else {
// 			pipette = "";
// 		}
// 	});
// 	const ingotImg = createElement("img", {
// 		src: materialsImageSrc[truc],
// 		alt: materials[truc],
// 	});
// 	btnInv.appendChild(ingotImg);
// 	inventoryRows.appendChild(btnInv);
// }
