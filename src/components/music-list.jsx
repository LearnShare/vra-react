import React, {
  Component,
} from 'react';

import MusicListContext from './music-context';

import MusicItem from './music-item';

class MusicList extends Component {
  static contextType = MusicListContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="music-list">
        <h2>music-list</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>playing</th>
              <th>liked</th>
              <th>title</th>
              <th>artist</th>
            </tr>
          </thead>
          <tbody>
            <MusicListContext.Consumer>
              {
                (data) => data.list.map((item, index) => (
                  <MusicItem
                      key={ item.id }
                      data={ item }
                      index={ index } />
                ))
              }
            </MusicListContext.Consumer>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MusicList;
