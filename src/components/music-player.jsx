import React, {
  Component,
} from 'react';

import MusicListContext from './music-context';

import MusicList from './music-list';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 0,
          title: 'Music-1',
          artist: 'A',
          liked: false,
        },
        {
          id: 1,
          title: 'Music-2',
          artist: 'B',
          liked: true,
        },
        {
          id: 2,
          title: 'Music-3',
          artist: 'C',
          liked: false,
        },
        {
          id: 3,
          title: 'Music-4',
          artist: 'D',
          liked: false,
        },
      ],
      current: 0,
    };
  }

  play = (index) => {
    console.log('play', index);
    this.setState({
      current: index,
    });
  };

  toggleLiked = (id, liked) => {
    console.log('toggleLiked', id);
    this.setState((oldState) => {
      const list = [
        ...oldState.list,
      ];

      for (let i = 0; i < list.length; i += 1) {
        if (list[i].id === id) {
          list[i].liked = liked;
          break;
        }
      }

      return {
        list,
      };
    });
  };

  render() {
    const {
      state,
      play,
      toggleLiked,
    } = this;
    const {
      list,
      current,
    } = state;

    const contextData = {
      list,
      current,
      play,
      toggleLiked,
    };

    return (
      <div className="music-player">
        <MusicListContext.Provider
            value={ contextData }>
          <MusicList />
        </MusicListContext.Provider>
      </div>
    );
  }
}

export default MusicPlayer;
