import { combineReducers } from 'redux';
import home from './home';
import header from './header';
import projects from './projects';
import projectDesignWeb from './projectDesignWeb';

export default combineReducers({
  home,
  header,
  projects,
  projectDesignWeb,
});
