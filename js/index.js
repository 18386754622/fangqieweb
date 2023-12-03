function showTab(index) {
	const navLst = document.querySelectorAll(".nav-item");
	const tabList=document.querySelectorAll('section')
	navLst.forEach((item) => {
		item.className = "nav-item";
	});
	navLst[index].classList = "nav-item active";
	// tabList.forEach(item=>{
	// 	item.style.display="none"
	// 	item.className=""
	// })
	// tabList[index].className="activesec"
	// tabList[index].style.display="block"
}
function showTab1() {
	const muenitem = document.querySelectorAll(".muen-item>li");
	muenitem.forEach((item, index) => {
		item.addEventListener("click", () => {
			muenitem.forEach((subitem) => {
				subitem.className = "";
				item.className = "muenactive";
			});
		});
	});
}

showTab1();
function lasotrelist(){
	const foterList = document.querySelectorAll('.footer-item')
	if(localStorage.getItem('index')){
		let index=localStorage.getItem('index')
		foterList.forEach(item=>item.className="footer-item")
		foterList[index].className="footer-item active"
	}	
}
lasotrelist()
function foterMuen() {
	const foterList = document.querySelectorAll('.footer-item')
	let arr = [
		'/home.html',
		'/index.html',
		'/welfare.html',
		"/shujia.html",
		"/mine.html"
	]
	foterList.forEach((item, index) => item.addEventListener('click', () => {
		let a = document.createElement('a');
		a.setAttribute('href', arr[index]);
		document.body.appendChild(a);
		a.click();
		localStorage.setItem('index',index)
		foterList.forEach((subitem) => {
			subitem.className = "footer-item";
			item.className = "footer-item active";
		});
	}))
}
foterMuen()
