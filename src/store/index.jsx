import { createStore } from 'redux';

import reducer from './reducers';

const index = createStore(reducer);

export default index;