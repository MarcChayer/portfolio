import { connect } from 'react-redux';
import ProjectWeb from '../components/Projects/ProjectWeb';
import { getIdTitle } from 'src/actions/projectDesignWeb';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getIdTitle: (titleId) => {
    dispatch(getIdTitle(titleId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectWeb);
