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

const hoeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const shovelRecipe = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const swordRecipe = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";
const hoeRecipeImageSrc = "./assets/iron-hoe.webp";
const shovelRecipeImageSrc = "./assets/iron-shovel.webp";
const swordRecipeImageSrc = "./assets/iron-sword.webp";

const recipeList = [pickaxeRecipe, axeRecipe, hoeRecipe, shovelRecipe, swordRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc, hoeRecipeImageSrc, shovelRecipeImageSrc, swordRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [1, 2, 2, 1, 3, 1];

// Coder ici
const Inventaire = document.getElementById("inv-r");
const caseCraft = document.querySelectorAll(".case-craft");
const imgResult = document.getElementById("image-result");

let pipette = "";
let selecedImgSrc = "";
let btnOldActive = null;


function createBtnInventory(name, imgSrc) {
    const buttonInventory = document.createElement("button");
    const imgInventory = document.createElement("img");

    buttonInventory.classList.add("case-inv");

    imgInventory.src = imgSrc;
    imgInventory.alt = name;

    buttonInventory.appendChild(imgInventory);

    return buttonInventory;
}

for (let i = 0; i < inventoryTable.length; i++) {
    const newItemNumber = inventoryTable[i];
    const materialName = materials[newItemNumber];
    const materialImgSrc = materialsImageSrc[newItemNumber];

    const newButton = createBtnInventory(materialName, materialImgSrc);

    newButton.addEventListener("click", () => {

            if (pipette == materialName && newButton.classList.contains("active")) {
                pipette = "";
                selecedImgSrc = "";
                newButton.classList.remove("active");
            }else {
                if (btnOldActive != null) {
                    btnOldActive.classList.remove("active");
                }
                pipette = materialName;
                selecedImgSrc = materialImgSrc;
                newButton.classList.add("active");
                btnOldActive = newButton;
                
            }
            
        // console.log(btnOldActive, pipette, selecedImgSrc);
    });
    Inventaire.appendChild(newButton);
}

function validMaterial(tab1, tab2, result) {
    for (let i = 0; i <= tab1.length; i++) {
            if (tab1[i] !== tab2[i]) {
                return false
            }
    }
    const imgCaseResult = imgResult.querySelector("img");
    if (imgCaseResult && imgCaseResult.alt == "air" || imgCaseResult && imgCaseResult.alt == "outil") {
        imgCaseResult.src = result;
        imgCaseResult.alt = "outil";
    }
    return true
}

for (let i = 0; i < caseCraft.length; i++) {
	const caseCraftObject = caseCraft[i];

    caseCraftObject.addEventListener("click", () => {
        const newImg = caseCraftObject.firstElementChild;

        if (newImg == null) return;

        newImg.src = selecedImgSrc;
        newImg.alt = pipette;
        
		craftingTable[i] = pipette;

		for(let j = 0; j < recipeList.length; j++) {
			const isValidRecipe = validMaterial(recipeList[j], craftingTable);

			if (isValidRecipe != false) {
				imgResult.src = recipeImageSrcList[j];
				imgResult.alt = "outil";
                break;
			} else {
				imgResult.src = MATERIAL_AIR_IMG;
				imgResult.alt = "air"
			}
            // console.log(recipeList[j]);
		}
        // console.log(validMaterial(pickaxeRecipe, craftingTable, pickaxeRecipeImageSrc));
        // console.log(validMaterial(axeRecipe, craftingTable, axeRecipeImageSrc));
        // console.log(craftingTable, pickaxeRecipe);
        
    })
}