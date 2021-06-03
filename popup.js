// set current tab url
chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
	// get url
	let url = tabs[0].url;
	// set url on popup
	document.querySelector('.url').innerHTML = url;

	// set option for article type
	if (url.includes('medium')) {
		document.getElementById('article_type').value = 'medium';
	} else if (url.includes('dev.to')) {
		document.getElementById('article_type').value = 'dev.to';
	} else {
		document.getElementById('article_type').value = 'webpage';
	}
});

// set select option for article type

const onClick = () => {
	let url = document.querySelector('.url').textContent;

	// set form data
	const data = {
		url: url,
		user: '3',
		title: '',
		article_type: document.getElementById('article_type').value,
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
