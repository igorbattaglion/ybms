import { call, put } from 'redux-saga/effects'
import api from '../../service/apis'


import { Creators as ConfigActions } from '../ducks/config'

export function* getConfig(action){
  try{
    const response = yield call(api.getConfiguration)
    yield put(ConfigActions.getConfigSuccess(response.data))
    
  }catch(err){
    yield put(ConfigActions.getConfigFailure(err.response))
  }
}

