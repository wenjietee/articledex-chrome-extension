// set current tab url
chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
	document.querySelector('.url').innerHTML = tabs[0].url;
});

const onClick = () => {
	let url = document.querySelector('.url').textContent;
	let article_type = '';

	// check for article type
	if (url.includes('medium')) {
		article_type = 'medium';
	} else if (url.includes('dev.to')) {
		article_type = 'dev.to';
	} else {
		article_type = 'webpage';
	}

	// set form data
	const data = {
		url: url,
		article_type: article_type,
		user: '3',
		description: document.getElementById('description').value,
		tags: document.getElementById('tags').value,
	};

	alert(JSON.stringify(data, null, 2));
};

// event listeners
document.addEventListener('DOMContentLoaded', () => {
	document
		.querySelector('.button-primary')
		.addEventListener('click', onClick);
});
