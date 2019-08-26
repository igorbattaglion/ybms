import { call, put } from 'redux-saga/effects'
import api from '../../service/apis'


import { Creators as MoviesActions } from '../ducks/movies'

export function* getMovies(action){
  try{
    const response = yield call(api.getMovies)
    yield put(MoviesActions.getMoviesSuccess(response.data))    
    
  }catch(err){
    yield put(MoviesActions.getMoviesFailure(err.response))
  }
}

