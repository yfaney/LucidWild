import React from 'react';

import lucidClient from '../../service/LucidClient';

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
  searchResult.forEach((index, element) => {
    const { snippet } = element;
    let count = wordCount(snippet.title, keywords);
    if (count > maxSearchCount) {
      maxSearchCount = count;
      maxResultIndex = index;
    }
  });
  return maxResultIndex;
}

class YouTubeShowerView extends React.Component {
  constructor() {
    this.state = {
      videoId: null,
      searchText: null,
      searchResult: null,
    };
    
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchText) {
    lucidClient.search.list({
      part: 'id,snippet',
      q: searchText,
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      console.log(JSON.stringify(response.data));
      this.setState({
        searchResult: response.data.items,
      })
    });
  }

  render() {
    const { searchResult } = this.state;
    const bestResult = searchResult[0];

    return (
      <div>
        <SearchView onSearch={this.handleSearch} />
        <YouTubePlayerView videoId={bestResult.id.videoId} />
      </div>
    );
  }
}

export default YouTubeShowerView;
