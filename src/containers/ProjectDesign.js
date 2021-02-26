import { connect } from 'react-redux';
import ProjectDesign from '../components/Projects/ProjectDesign';
import { getIdTitle } from 'src/actions/projectDesignWeb';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getIdTitle: (titleId) => {
    dispatch(getIdTitle(titleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDesign);
