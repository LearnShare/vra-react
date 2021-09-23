import React from 'react';

const MusicListContext = React.createContext({
  musicList: [],
  current: 0,
  play: () => {},
  toggleLiked: () => {},
});
MusicListContext.displayName = 'MusicListContext';

export default MusicListContext;
