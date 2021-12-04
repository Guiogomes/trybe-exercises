import React from 'react';
import { connect } from 'react-redux';
import { getInfoWithThunk } from '../redux/actions';

class Subreeddit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		const { request } = this.props;
		request();
	}

	render() {
		const { frontend, react } = this.props;
		return(
			<div>
				{frontend.map((item) => <p>{item.data.selftext}</p>)}
				{react.map((item) => <p>{item.data.selftext}</p>)}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	react: state.reactReducer.react[0],
	frontend: state.frontendReducer.frontend[0],
})

const mapDispatchToProps = (dispatch) => ({
	request: () => dispatch(getInfoWithThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Subreeddit)