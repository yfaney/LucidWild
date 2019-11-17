import React from 'react';

import SearchView from './SearchView.jsx';
import YouTubePlayerView from './YouTubePlayerView.jsx';

import { lucidClient, KEY } from '../../service/LucidClient.jsx';

const wordCount = (text, keywords) => {
  const keyMap = {};
  keywords.forEach((keyword) => {
    keyMap[keyword] = true;
  });
  const tokens = text.split(' ');
  let count = 0;
  tokens.forEach((token) => {
    if (keyMap[token]) {
      count += 1;
    }
  });
  return count;
}

const findBestResult = (searchResult, keywords) => {
  let maxSearchCount = 0;
  let maxResultIndex = 0;
  searchResult.forEach((element, index) => {
    const { snippet } = element;
    debugger;
    let count = wordCount(snippet.title, keywords);
    if (count > maxSearchCount) {
      maxSearchCount = count;
      maxResultIndex = index;
    }
  });
  return maxResultIndex;
}

class YouTubeShowerView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
      searchResult: null,
    };
    
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchText) {
    lucidClient.get('/search', {
      params: {
        part: 'id,snippet',
        q: searchText,
        key: KEY,
      },
    }).then((response) => {
      this.setState({
        searchResult: response.data.items,
        searchText,
      });
    }).catch((error) => {
      console.log('The API returned an error: ' + error);
    });
  }

  render() {
    const {
      searchResult,
      searchText,
    } = this.state;

    console.log(searchResult)

    const bestResult = searchResult && searchResult.length > 0
      ? searchResult[findBestResult(searchResult, searchText.split(' '))] : null;

    const playerView = bestResult ? (
      <YouTubePlayerView videoId={bestResult.id.videoId} />
    ) : undefined;

    return (
      <div>
        <SearchView onSearch={this.handleSearch} />
        {playerView}
      </div>
    );
  }
}

export default YouTubeShowerView;
