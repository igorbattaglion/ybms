import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ConfigActions } from '../../store/ducks/config'
import { Creators as MoviesActions } from '../../store/ducks/movies'
import { Creators as SeriesActions } from '../../store/ducks/series'
import FavoriteIcon from '@material-ui/icons/Favorite';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.getConfig()
        this.props.getMovies()
        this.props.getSeries()

    }

    render(){
    console.log(this.props.series)
    const { config, movies, series } = this.props
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
            <div className={'list-title'}>
                <span>Top 15 Movie list:</span>
            </div>
            <div className={'list'}>
                { config.data && !movies.loading &&
                    movies.data.results.map((movie, index)=>{
                        if(index < 15){
                            return( 
                                <>
                                <FavoriteIcon/>
                                <img src={`${imageUrl}${posterSize.w185}/${movie.poster_path}`} alt={`poster${index}`}/>
                                </>
                            )
                        } else {
                            return;
                        }
                    })
                }
            </div>
            

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