// gatsby-browser.js
exports.onServiceWorkerUpdateReady = () => {
	if (
		window.confirm(
			'Ta strona została zaktualizowana. Czy chcesz przeładować stronę, aby zobaczyć nową wersje?'
		)
	) {
		window.location.reload(true);
	}
};
