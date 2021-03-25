import { connect } from 'react-redux';
import Projects from 'src/components/Projects';

const mapStateToProps = (state) => ({
  projectId: state.projectDesignWeb.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
