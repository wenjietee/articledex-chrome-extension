const onClick = () => {
    // set form data
	const data = {
		url: 'www.test.com',
		user: 'username',
		title: document.getElementById('title').value,
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
