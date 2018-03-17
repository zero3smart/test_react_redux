import React from 'react';
import MarketsList from './MarketsList';
import { connect } from 'react-redux';
import { fetchMarkets } from '../actions/marketsActions';
import classnames from 'classnames';

import '../assets/stylesheets/components/Reservations.scss';

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchMarkets().then(res => {
      this.setState({loading: false});
    }, err => {

    });
  }

  render() {
    const loading = (
      <div style={{height: '544px'}}>
        <div className="ui active centered loader"></div>
      </div>
    );

    const marketsList = (
      <div>
        <h1>Markets List</h1>
        <MarketsList markets={this.props.markets} />
      </div>
    );

    return (
      <div>
        { this.state.loading ? loading : marketsList }
      </div>
    );
  }
}

Reservations.propTypes = {
  markets: React.PropTypes.array.isRequired,
  fetchMarkets: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    markets: state.markets
  }
}

export default connect(mapStateToProps, { fetchMarkets })(Reservations);
