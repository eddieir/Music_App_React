import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { choosePlaylist } from 'helperFunctions'
import './style.scss'

export class ArtistPlaylist extends Component {
  render() {
    const { artistPlaylists } = this.props

    return artistPlaylists && artistPlaylists.length ? (
      <section className="artist__playlists">
        <h2>Playlists</h2>
        <ul>
          {artistPlaylists.map(playlist => (
            <li key={playlist.id}>
              <NavLink
                to={`/playlist/${playlist.id}`}
                onClick={() => choosePlaylist(playlist.id, this.props)}
              >
                <div className="artist__playlist">
                  <img
                    src={playlist.picture_medium}
                    alt=""
                    className="artist__playlist__cover"
                  />
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    ) : null
  }
}