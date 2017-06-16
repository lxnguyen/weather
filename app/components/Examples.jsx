const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few examples locations to test it out:</p>
			<ol>
				<li>
					<Link to="/?location=Philadelphia">Philadelphia, PA</Link>
				</li>
				<li>
					<Link to="/?location=SanFrancisco">San Francisco, CA</Link>
				</li>
				<li>
					<Link to="/?location=NewYork">New York, NY</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;