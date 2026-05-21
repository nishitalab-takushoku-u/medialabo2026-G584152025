//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function printDom(){
	let p = document.querySelector('h2#addr') ;
	let a = document.createElement('a');
	p.insertAdjacentElement('afterend', a) ;
	a.textContent = campus.address;

	p = document.querySelector('h2#dept') ;
	let u = document.createElement('ul');
	p.insertAdjacentElement('afterend', u);
	for (let gname of gakka){  		
	let l = document.createElement('li');
	l.textContent = gname.name;
	u.insertAdjacentElement('beforeend', l);
	} 

}
let p = document.querySelector('button#show');
p = addEventListener('click', printDom)