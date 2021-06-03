const initPageData = () => {
	// set current tab url
	chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
		// get url from tabs
		let url = tabs[0].url;

		// set select option for article type
		if (url.includes('medium')) {
			document.getElementById('article_type').value = 'medium';
		} else if (url.includes('dev.to')) {
			document.getElementById('article_type').value = 'dev.to';
		} else {
			document.getElementById('article_type').value = 'webpage';
		}

		// set title
		document.querySelector('.title').innerHTML = tabs[0].title;
		// set url on popup
		document.querySelector('.url').innerHTML = url;
	});
};

const setTitle = () => {
	// set title from content
	chrome.runtime.onMessage.addListener((message) => {
		alert(message.title);
	});
};

const onClick = () => {
	// set data payload
	const data = {
		user: document.querySelector('.user').textContent,
		url: document.querySelector('.url').textContent,
		title: document.querySelector('.title').textContent,
		article_type: document.getElementById('article_type').value,
		description: document.getElementById('description').value,
		tags: document.getElementById('tags').value,
	};

	alert(JSON.stringify(data, null, 2));
};

// event listeners
document.addEventListener(
	'DOMContentLoaded',
	() => {
		document
			.querySelector('.button-primary')
			.addEventListener('click', onClick);
		initPageData();
		setTitle();
	},
	false
);
