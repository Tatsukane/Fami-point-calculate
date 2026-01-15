const calculateButton = document.querySelector(".button");

calculateButton.addEventListener("click", () => {
	const diemGiuaky = parseFloat(document.getElementById("dgk").value) || 0;
	const diemLientuc = parseFloat(document.getElementById("dlt").value) || 0;
	const diemChuyencan = parseFloat(document.getElementById("dcc").value) || 0;
	const diemTichcuc = parseFloat(document.getElementById("dtc").value) || 0;
	const diemCuoiky = parseFloat(document.getElementById("dck").value) || 0;
	const color = document.querySelector(".active");
	
	let diemQuatrinh = diemGiuaky * 0.2 + diemTichcuc + diemLientuc * 0.2 + diemChuyencan;
	let diemHocPhan = diemQuatrinh * 0.5 + diemCuoiky * 0.5;
	let diemChu = "F"

	document.getElementById("gk").textContent = (diemGiuaky / 3).toFixed(2);
	document.getElementById("qt").textContent = (diemQuatrinh).toFixed(1);
	document.getElementById("hp").textContent = diemHocPhan.toFixed(1);

	if(color){
		color.classList.remove("active");
	}

	if (diemHocPhan >= 9.5) {
		document.querySelector(".m9").classList.add("active");
		diemChu = "A+";
	} 
	else if (diemHocPhan >= 8.5) {
		document.querySelector(".m8").classList.add("active");
		diemChu = "A";
	} 
	else if (diemHocPhan >= 8.0) {
		document.querySelector(".m7").classList.add("active");
		diemChu = "B+";
	}
	else if (diemHocPhan >= 7.0) {
		document.querySelector(".m6").classList.add("active");
		diemChu = "B";
	} 
	else if (diemHocPhan >= 6.5) {
		document.querySelector(".m5").classList.add("active");
		diemChu = "C+";
	} 
	else if (diemHocPhan >= 5.5) {
		document.querySelector(".m4").classList.add("active");
		diemChu = "C";
	} 
	else if (diemHocPhan >= 5.0) {
		document.querySelector(".m3").classList.add("active");
		diemChu = "D+";
	} 
	else if (diemHocPhan >= 4.0) {
		document.querySelector(".m2").classList.add("active");
		diemChu = "D";
	} 
	else {
		document.querySelector(".m1").classList.add("active");
		diemChu = "F";
	}

	document.getElementById("c").textContent = diemChu;

	document.getElementById("b").textContent = ((7.0 / 0.5 - diemQuatrinh) > 10 ? ((7.0 / 0.5 - diemQuatrinh).toFixed(2)).toString() + " (không khả thi)" : (7.0 / 0.5 - diemQuatrinh).toFixed(2));
	document.getElementById("bp").textContent = ((8.0 / 0.5 - diemQuatrinh) > 10 ? ((8.0 / 0.5 - diemQuatrinh).toFixed(2)).toString() + " (không khả thi)" : (8.0 / 0.5 - diemQuatrinh).toFixed(2));
	document.getElementById("a").textContent = ((8.5 / 0.5 - diemQuatrinh) > 10 ? ((8.5 / 0.5 - diemQuatrinh).toFixed(2)).toString() + " (không khả thi)" : (8.5 / 0.5 - diemQuatrinh).toFixed(2));
})

console.log("Made by @Tatsukane at 3:46 AM 15.01.2026")