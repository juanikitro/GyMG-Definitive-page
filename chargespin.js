window.onload = function () {
	const contenedor = document.getElementById('contenedor_carga');
	setTimeout(() => {
		contenedor.style.visibility = 'hidden';
		contenedor.style.opacity = '0';
		contenedor.style.display = 'none';
	}, 1250);
	const main = document.getElementById('main');
	const footer = document.getElementById('footer');
	const header = document.getElementById('header');
	setTimeout(() => {
		main.style.visibility = 'visible';
		footer.style.visibility = 'visible';
		header.style.visibility = 'visible';
		main.style.opacity = '1';
		footer.style.opacity = '1';
		header.style.opacity = '1';
	}, 1250);
};
