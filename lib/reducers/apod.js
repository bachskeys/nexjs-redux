import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false,user:{} };

export const { fetchApodStart, fetchApodSuccess, fetchApodFail,logIn,logInSucess,logInFail } = createActions({
  FETCH_APOD_START: date => ({ date }),
  FETCH_APOD_SUCCESS: apod => ({ apod }),
  FETCH_APOD_FAIL: error => ({ error }),
  LOG_IN: () => ({}),
  LOG_IN_SUCESS:  user => ({user}),
  LOG_IN_FAIL:(error) =>({error})
});

export const reducer = handleActions(
  {
    [fetchApodStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchApodSuccess]: (state, { payload: { apod } }) => ({
      error: null,
      isLoading: false,
      data: apod,
    }),
    [fetchApodFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
      [logIn]:state=>({error:null,isLoading:true,...state}),
    [logInSucess]: (state,{payload:{user}}) => ({user,isLoading:false,error:null}),
    [logInFail]: (state,{payload:{error}}) => ({error,isLoading:false}),
  },
  defaultState,
);
