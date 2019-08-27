import React, { Component, Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ConfigActions } from '../../store/ducks/config'
import { Creators as MoviesActions } from '../../store/ducks/movies'
import { Creators as SeriesActions } from '../../store/ducks/series'
// import FavoriteIcon from '@material-ui/icons/Favorite';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            listType: 'movies'
        }
    }

    componentDidMount(){
        this.props.getConfig()
        this.props.getMovies()
        this.props.getSeries()

    }

    render(){
    const { config, movies, series } = this.props
    const { listType } = this.state
    const imageUrl = config.data ? config.data.images.secure_base_url : '';
    const posterSize = config.data ? {
        w92      : config.data.images.poster_sizes[0],
        w154     : config.data.images.poster_sizes[1],
        w185     : config.data.images.poster_sizes[2],
        w342     : config.data.images.poster_sizes[3],
        w500     : config.data.images.poster_sizes[4],
        w780     : config.data.images.poster_sizes[5],
        original : config.data.images.poster_sizes[6]
    } : '' ;

    return(
        <div className={'home'}>
            <div className={'banners'}>
                {config.data && !movies.loading && !series.loading && 
                    <>
                        <div className={"top-1"}>
                            <span>Top 1 Movie: {movies.data.results[0].title}</span>
                            <img src={`${imageUrl}${posterSize.w500}/${movies.data.results[0].backdrop_path}`} alt={'bannerMovie'}/>
                        </div>
                        <div className={"top-1"}>
                            <span>Top 1 Serie: {series.data.results[0].name}</span>
                            <img src={`${imageUrl}${posterSize.w500}/${series.data.results[0].backdrop_path}`} alt={'bannerSerie'}/>
                        </div>
                    </>
                }
            </div>
            <div className={'change-action'}>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        name="gender2"
                        value={listType}
                        onChange={(e)=> this.setState({ listType: e.target.value })}
                    >
                        <FormControlLabel
                            value="movies"
                            control={<Radio color="primary" />}
                            label="Movies"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="series"
                            control={<Radio color="primary" />}
                            label="Series"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            { listType === 'movies' &&
            <>
                <div className={'list-title'}>
                    <span>Top 15 Movie list:</span>
                </div>
                <div className={'list'}>
                    { config.data && !movies.loading &&
                        movies.data.results.map((movie, index)=>{
                            if(index < 15){
                                return( 
                                    <Fragment key={`poster${index}`}>
                                    <img src={`${imageUrl}${posterSize.w185}/${movie.poster_path}`}  alt={`poster${index}`}/>
                                    </Fragment>
                                )
                            } else {
                                return '';
                            }
                        })
                    }
                </div>
            </>
            }
            { listType === 'series' &&
            <>
                <div className={'list-title'}>
                    <span>Top 15 Series list:</span>
                </div>
                <div className={'list'}>
                    { config.data && !series.loading &&
                        series.data.results.map((series, index)=>{
                            if(index < 15){
                                return( 
                                    <Fragment key={`poster${index}`}>
                                    <img src={`${imageUrl}${posterSize.w185}/${series.poster_path}`}  alt={`poster${index}`}/>
                                    </Fragment>
                                )
                            } else {
                                return '';
                            }
                        })
                    }
                </div>
            </>
            }

        </div>
    )
    }
}

const mapStateToProps = state => ({
    config: state.config,
    movies: state.movies,
    series: state.series
  })
  
const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, MoviesActions, SeriesActions, ConfigActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)