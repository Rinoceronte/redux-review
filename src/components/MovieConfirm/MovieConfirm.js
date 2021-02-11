import React from 'react'
import styles from '../styles'
import {connect} from 'react-redux';
import {updateMovieList} from './state/actions';

const MovieConfirm = props => {
  const confirmMovie = () => {
    props.updateMovieList({title: props.title, poster: props.poster, rating: props.rating})
    props.history.push('/list')
  }

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${props.title} - ${props.rating}`}</p>
      <img src={`${props.poster}`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.movieFormReducer};
}
export default connect(mapStateToProps, {updateMovieList})(MovieConfirm)
