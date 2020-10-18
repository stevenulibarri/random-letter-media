const showToEpisodesMap = {
  bestOfTheWorst: bestOfTheWorstEpisodes,
  halfInTheBag: halfInTheBagEpisodes,
  plinkettReviews: plinkettReviewsEpisodes,
  reView: reViewEpisodes,
};

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
}
