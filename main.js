function goodBtn() {
	let good = document.getElementById("good");
	if (goodBtn.value == "2") {
		goodBtn.value = "1";
	} else if ((goodBtn.value = "1")) {
		goodBtn.value = "2";
	}
}
if (good.value == "2" && fast.value == "2") {
	cheap.value = "1";
} else if (good.value == "2" && cheap.value == "2") {
	fast.value = "1";
} else if (fast.value == "2" && cheap.value == "2") {
	good.value = "1";
}
// if (goodBtn.value == "2") {
// 	goodBtn.value = "1";
// } else if ((goodBtn.value = "1")) {
// 	goodBtn.value = "2";
// }

let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");
