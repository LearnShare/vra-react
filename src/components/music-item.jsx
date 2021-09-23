import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import MusicListContext from './music-context';

class MusicList extends Component {
  static contextType = MusicListContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      index,
      data,
    } = this.props;

    return (
      <MusicListContext.Consumer>
        {
          (context) => ((
            <tr
                onDoubleClick={ () => { context.play(index); } }>
              <td>{ index + 1 }</td>
              <td>{ index === context.current ? 'true' : 'false' }</td>
              <td
                  onClick={ () => { context.toggleLiked(data.id, !data.liked); } }>{ data.liked ? 'true' : 'false' }</td>
              <td>{ data.title }</td>
              <td>{ data.artist }</td>
            </tr>
          ))
        }
      </MusicListContext.Consumer>
    );
  }
}

MusicList.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
};

export default MusicList;
