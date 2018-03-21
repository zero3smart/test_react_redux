import React from 'react';
import { connect } from 'react-redux';
import { fetchComponents } from '../actions/marketsActions';
import '../assets/stylesheets/components/HomePage.scss';
import MainContainer from './MainContainer';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchComponents().then(res => {
      this.setState({ loading: false });
    }, err => {

    });
  }

  render() {
    const compList = this.props.components.map(comp => (
      <MainContainer title={comp.name} key={comp.id} />
    ));

    return (
      <div className={'main-container'}>
        {compList}
      </div>
    );
  }
}

HomePage.propTypes = {
  components: React.PropTypes.array.isRequired,
  fetchComponents: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    components: state.components
  }
}

export default connect(mapStateToProps, { fetchComponents })(HomePage);