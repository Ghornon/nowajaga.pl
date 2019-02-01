import React from 'react';

const WidgetsArea = ({ header, content }) => (
	<div className="widgets__area">
		<header className="widgets__area-header">
			<h4 className="header-light" dangerouslySetInnerHTML={{ __html: header }} />
		</header>
		<div className="widgets__content">{content}</div>
	</div>
);

export default WidgetsArea;
