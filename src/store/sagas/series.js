import { call, put } from 'redux-saga/effects'
import api from '../../service/apis'


import { Creators as SeriesActions } from '../ducks/series'

export function* getSeries(action){
  try{
    const response = yield call(api.getSeries)
    yield put(SeriesActions.getSeriesSuccess(response.data))    
    
  }catch(err){
    yield put(SeriesActions.getSeriesFailure(err.response))
  }
}

