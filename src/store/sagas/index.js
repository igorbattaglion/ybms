import { all, takeLatest } from 'redux-saga/effects'

import { Types as ConfigTypes } from '../ducks/config'
import { Types as MoviesTypes } from '../ducks/movies'
import { Types as SeriesTypes } from '../ducks/series'

import { getConfig } from './config'
import { getMovies } from './movies'
import { getSeries } from './series'


export default function* rootSaga(){
  yield all([
    takeLatest(ConfigTypes.GET, getConfig),
    takeLatest(MoviesTypes.GET, getMovies),
    takeLatest(SeriesTypes.GET, getSeries)
  ])
}
