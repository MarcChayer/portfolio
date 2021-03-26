import { connect } from 'react-redux';
import { getIdTitle, handleClick } from 'src/actions/projectDesignWeb';
import ProjectWeb from '../components/Projects/ProjectWeb';

const mapStateToProps = (state) => ({
  projectId: state.projectDesignWeb.idToClick,
  open: state.projectDesignWeb.open,
});

const mapDispatchToProps = (dispatch) => ({
  getIdTitle: (titleId) => {
    dispatch(getIdTitle(titleId));
  },
  handleClick:(id, isOpen) => {
    dispatch(handleClick(id, isOpen))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectWeb);
