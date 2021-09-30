export  default {
    state(){
      return {
        playlists: [],
        playlist: {
          tracks : {
            contributors : []
          },
          contributors : []
        },
        track : {
          contributors : []
        }
      }
    },

    getters: {
      playlists(state) {
        return state.playlists
      },

      playlist(state) {
        return state.playlist
      },

      track(state) {
        return state.track
      }
    },

    mutations : {
      SET_PLAYLISTS (state, playlists){
        state.playlists = playlists
      },

      SET_PLAYLIST (state, playlists){
        state.playlist = playlists
      },
      SET_TRACK (state, track){
        state.track = track
      }
    },


    actions : {
      async listPlaylists({commit}){
          let playlists = await this.$axios.get('playlists')
          commit('SET_PLAYLISTS', playlists.data.data)
      },

      async Playlist({commit}, id){
        let playlist = await this.$axios.get('/playlist/'+id)
        commit('SET_PLAYLIST', playlist.data.data)
      },

      setTrack({commit}, play){
        commit('SET_TRACK', play)
      }
    }
}
