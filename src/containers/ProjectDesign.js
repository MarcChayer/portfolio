import { connect } from 'react-redux';
import { getIdTitle, handleClick } from 'src/actions/projectDesignWeb';
import ProjectDesign from '../components/Projects/ProjectDesign';

const mapStateToProps = (state) => ({
  projectId: state.projectDesignWeb.idToClick,
  close: state.projectDesignWeb.close,
});

const mapDispatchToProps = (dispatch) => ({
  getIdTitle: (titleId) => {
    dispatch(getIdTitle(titleId));
  },
  handleClick:(id, isOpen) => {
    dispatch(handleClick(id, isOpen))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDesign);
