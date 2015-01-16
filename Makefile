.PHONY: watch

watch:
	watchify public/js/index.js -t [ 6to5ify --experimental ] --debug -o public/scripts.js
