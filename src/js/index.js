import bestOfTheWorstEpisodes from '../data/best-of-the-worst.json';
import halfInTheBagEpisodes from '../data/half-in-the-bag.json';
import plinkettReviewsEpisodes from '../data/plinkett-reviews.json';
import reViewEpisodes from '../data/re-view.json';

import fitvids from 'fitvids/dist/fitvids';

import '../css/reset.css';
import '../css/site.css';

const showToEpisodesMap = {
  bestOfTheWorst: bestOfTheWorstEpisodes,
  halfInTheBag: halfInTheBagEpisodes,
  plinkettReviews: plinkettReviewsEpisodes,
  reView: reViewEpisodes,
};

const videoContainer = '.video-container';

// setup onlicks
window.addEventListener('DOMContentLoaded', () => {
  Object.keys(showToEpisodesMap).forEach(key => {
    const el = document.getElementById(key);
    el.onclick = () => selectShow(el);
  });

  const getShowButton = document.getElementById('get-video-button');
  getShowButton.onclick = () => getRandomVideo();
});

// default on page load
let selectedShow = 'bestOfTheWorst';

function selectShow(src) {
  if (src.id === selectedShow) {
    return;
  }

  document
    .getElementById(selectedShow)
    .getElementsByTagName('span')[0]
    .classList.toggle('selected-show');

  src
    .getElementsByTagName('span')[0]
    .classList.toggle('selected-show');

  selectedShow = src.id;
}

function getRandomVideo() {
  const episodes = showToEpisodesMap[selectedShow];
  const episode = episodes[Math.floor(Math.random() * episodes.length)];

  const iframe = document.getElementById('video-iframe');
  iframe.src = episode.url;
  // fitvids(videoContainer);
}
