import typeToReducer from 'type-to-reducer';
import {fromJS} from 'immutable';
import {RESEND} from './constants';
import reducerParse from 'utils/reducerParse';
const initialState = fromJS({});

export default typeToReducer({
  [RESEND]: {
    SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
        return state;
      }
      ,
      (payload) => {
        const {data, status} = payload;
        return state.set('errors',fromJS(data));
      },
    ),
  },
}, initialState);
