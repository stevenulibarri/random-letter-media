const fs = require('fs');
const path = require('path');

const inPath = path.resolve(__dirname, 'in.json');
const outPath = path.resolve(__dirname, 'out.json');

const json = require(inPath);

const regex = /((?<hours>\d{1,2}):)*(?<minutes>\d{1,2}):(?<seconds>\d{1,2})/;

const res = [];
json.forEach(it => {
  const { time, title, link } = it;
  const {
    groups: {
      hours,
      minutes,
      seconds,
    },
  } = time.match(regex);

  const totalSeconds = (Number.parseInt(hours) || 0) * 3600
    + (Number.parseInt(minutes) || 0) * 60
    + Number.parseInt(seconds) || 0;

  if (totalSeconds > 300) {
    const url = `https://www.youtube.com/embed/${new URL(link).searchParams.get('v')}`;
    res.push({ title, url });
  }
});

fs.writeFileSync(outPath, JSON.stringify(res, null, 2));
