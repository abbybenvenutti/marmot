(function marmot() {
	const createModal = () => {

		//extract cart info
		const total = document.querySelector('.order-value').innerHTML;
		const amt = document.querySelector('.mini-cart-container').getAttribute('data-quantity');
		const images = Array.from(document.querySelectorAll('.mini-cart-image')).map(
			(img) => img.firstElementChild.firstElementChild.src
		);

		//create modal and overlay elements
		const overlay = document.createElement('div');
		const inner = document.createElement('div');
		const imgDiv = document.createElement('div');
		const price = document.createElement('div');
		price.innerHTML = `Estimated total: ${total}`;
		const quantityDiv = document.createElement('div');
		quantityDiv.innerHTML = `Cart quantity: ${amt}`;

		overlay.appendChild(inner);
		inner.appendChild(quantityDiv);
		inner.appendChild(price);
		images.forEach((src) => {
			let img = document.createElement('img');
			img.src = src;
			imgDiv.appendChild(img);
		});
		inner.appendChild(imgDiv);

		const styleModal = () => {
			overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
			overlay.style.display = 'block';
			overlay.style.left = '0';
			overlay.style.top = '0';
			overlay.style.height = '100vh';
			overlay.style.width = '100vh';
			overlay.style.visibility = 'hidden';
			overlay.style.zIndex = '1';
			overlay.style.position = 'fixed';
			overlay.style.overflow = 'auto';

			inner.style.backgroundColor = 'white';
			inner.style.textAlign = 'center';
			inner.style.fontSize = '16px';
			inner.style.width = '35%';
			inner.style.margin = '10% auto';

			const content = inner.childNodes;
			content[0].style.display = 'inline-block';
			content[1].style.display = 'inline-block';
			content.forEach((el) => (el.style.padding = '4%'));
		};

		const createButtons = () => {
			const styleBtn = () => {
				const button = document.createElement('button');
				button.className = 'primary-button';
				button.style.margin = '5%';
				return button;
			};

			const exitButton = styleBtn();
			exitButton.innerHTML = `Exit`;
			exitButton.addEventListener('click', () => (overlay.style.visibility = 'hidden'));

			const cartButton = styleBtn();
			cartButton.innerHTML = `View cart`;
			const cartUrl = document.querySelector('.minicart-link').href;
			cartButton.addEventListener('click', () => (window.location.href = cartUrl));

			return [ cartButton, exitButton ];
		};

		styleModal();

		const buttons = createButtons();
		inner.appendChild(buttons[0]);
		inner.appendChild(buttons[1]);
		document.body.appendChild(overlay);

		return overlay;
	};

	const modal = createModal();

	const showModal = () => {

			if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

			return (modal.style.visibility = 'visible');
		}
	};

	window.addEventListener('scroll', showModal);
})();
