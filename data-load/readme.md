## jquery to manually scrape playlists

just to speed up initial scrape  
use https://mreidsma.github.io/bookmarklets/jquerify.html  

maybe switch to youtube api in the future but this may only need to be done once so meh?  

```javascript
let out = [];
$("ytd-playlist-video-renderer").map((i, el) => ({
    time: $(el).find("#overlays ytd-thumbnail-overlay-time-status-renderer span")[0].textContent.trim(),
    title: $(el).find("#video-title")[0].textContent.trim(),
    link: $(el).find("#content a")[0].href
})).map((i, el) => { out.push(el); });

JSON.stringify(out, null, 2);
```

paste result into `./data-load/in.json`  
run from root:   
```
node ./data-load/parse.js
```
result written to `./data-load/out.json`  

parse script filters out videos less than 5 min