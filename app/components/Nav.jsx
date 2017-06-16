const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
	onSearch: function(e) {
      e.preventDefault();

      const location = this.refs.search.value;
      const encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
	},
	render: function() {
		return (
			<nav className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li>
							<IndexLink to="/" className="menu-text">Weather App </IndexLink>
						</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
					<ul className="menu">
						<li>
							<input type="search" placeholder="Search Weather By City" ref="search"/>
						</li>
						<li>
							<input type="submit" className="button" value="Get Weather"/>
						</li>						
					</ul>
					</form>
				</div>
			</nav>
		)		
	}
});
module.exports = Nav;
