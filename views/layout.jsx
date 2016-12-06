var React = require('react');
module.exports = React.createClass({
	displayName: 'Layout',
	_handleClick: function () {
		console.log('console');
	},
	render: function () {
		var custom = this.props.custom;
		return (
			<html>
			<head>
				<title>{custom.title}</title>
				<link rel="stylesheet" href="/style.css"/>
			</head>
			<body>
				<div>
					<h1>{custom.title}</h1>
					<button onClick={this._handleClick}>Click</button>
					{custom.children}
				</div>
				<script dangerouslySetInnerHTML={{
					__html: 'window.PROPS=' + JSON.stringify(custom)
				}}/>
				<script src="/bundle.js"/>
			</body>
			</html>
		);
	}
});
