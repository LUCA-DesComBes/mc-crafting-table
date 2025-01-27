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

let pipette = "";
let btnOldActive = null; 
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

for (let i = 0; i < inventoryTable.length; i++) {
    const newItemNumber = inventoryTable[i];
    const materialName = materials[newItemNumber];
    const materialImgSrc = materialsImageSrc[newItemNumber];

    const newButton = createBtnInventory(materialName, materialImgSrc);

    newButton.addEventListener("click", () => {
        if (pipette == materialImgSrc) {
            pipette = "";
            newButton.classList.remove("active");
        } else {
            pipette = materialImgSrc;
            newButton.classList.add("active");
        }
		if(btnOldActive != null) {
			btnOldActive.classList.remove("active")
		}
		btnOldActive = newButton;
        console.log(pipette);
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
