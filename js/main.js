(function () {

	init();

	function init() {
		const likes = document.querySelectorAll('.like');
		const likesCount =  likes.length;
		for(like of likes) {
			like.addEventListener('click', toogleLikeAnimation);
		}
	}

	function toogleLikeAnimation(event) {
		event.target.classList.toggle('is-liked');
	}
})();
