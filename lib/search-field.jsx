import React from 'react'

export default React.createClass({

	getDefaultProps: function() {
		return {
			onSearch: function() {}
		}
	},

	onSearch: function(e) {
		var query = this.refs.search.value;
		this.props.onSearch(query);
	},

	render: function() {
		return (
			<div className="search-field">
				<input ref="search" type="text" placeholder="Search" onChange={this.onSearch} />
			</div>
		);
	}
});