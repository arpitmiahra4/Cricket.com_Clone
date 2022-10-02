# Cricket.com_Clone
# Free Cricket API 🍔

Live Cricket Score API 🏏

unofficial API Data Fetched from `Cricbuzz.com`

This is an unofficial API and not Linked or Partnered with Any Brands/Company.

> Recently we shutdown our Free API Server due to bulk API Calls Personally we Suggest you to Self Host this API on your server - instant Deploy on Vercel and Heroku - <https://github.com/mskian/cri-deploy#free-deploy->  

## How it Works? 🤔

We are just fetching the data from Cricbuzz using PHP cURL `preg_match` and `preg_math_all`. It's kind of scraping but we are not storing any data or link in our end.

Everything is scraped live and shown to end users in realtime.

Example: **API URL 🌐**

```sh
https://localhost:6001/cri.php?url=<Live Match URL>
```

## Requirements 📑

- Server with deploy heroku  
- vs code
- npm install
- npm i json-server
- HTTPS (For Secure SSL Connections)  

## Installation 🍯

- Download or Clone Repo to your Server

```sh
git clone https://github.com/arpitmiahra4/Cricket.com_Clone.git
cd Cricket.com_Clone
```

- Test the API

```sh
php -S localhost:8989
```

## Usage 🍟

- Get the Live Match Score URL from - `https://www.cricbuzz.com/cricket-match/live-scores`
- Enter them Directly or replace `www` with `m`

### Example 📋

```sh
http://localhost:8989/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020
```

(OR)

```sh
http://localhost:8989/cri.php?url=https://m.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020
```

### Example Response 🌐

![Cricket API](https://raw.githubusercontent.com/mskian/cricket-api/main/images/screenshot1.png)  

```json
{
    "success": true,
    "livescore": {
        "title": "Sunrisers Hyderabad vs Mumbai Indians, 56th Match",
        "current": "SRH - 145\/0 (16.2)",
        "batsman": "Wriddhiman Saha*",
        "batsmanrun": "57",
        "ballsfaced": "(43)",
        "fours": "7",
        "sixes": "1",
        "bowler": "Nathan Coulter-Nile*",
        "bowlerover": "3.2",
        "bowlerruns": "25",
        "bowlerwickets": "0",
        "partnership": "145(98)",
        "recentballs": "Data Not Found",
        "lastwicket": "... 0 0 4 1 | 0 4 1 1 0 1 | 1 0",
        "runrate": "CRR: 8.88",
        "commentary": [
            "16.2 Coulter-Nile to W Saha, no run, 139.1kph, ",
            "16.1 Coulter-Nile to Warner, 1 run, 124.4kph, length, nipping in off the pitch onto middle. Warner makes room and slaps it to deep point ",
            "15.5 Pattinson to Warner, no run, 139.7kph, backs away, cuts, but ends up miscuing it back down the pitch ",
            "15.4 Pattinson to W Saha, 1 run, swivels, one-legged, pulling it to the man in the deep behind square ",
            "15.3 Pattinson to Warner, 1 run, 118.2kph, back of a length, taking pace off, keeping it outside off for Warner to have to reach out. And he does connect this time, to guide it to third man ",
            "15.1 Pattinson to Warner, no run, 134.5kph, full, outside off, quick, just inside the tramline. Warner stretches, but can't quite connect ",
            "14.6 Coulter-Nile to Warner, 1 run, 130.6kph, length, nips back in, and Warner jumps away at the last moment with an opened bat face to steer it through point ",
            "14.4 Coulter-Nile to Warner, no run, skids through as it seams back in sharply to go under Warner's crouched swat, thudding off his thighs towards backward point ",
            "14.3 Coulter-Nile to Warner, no run, 136.4kph, serious bouncer, climbing back in. Nope, it's the circumstances that determines its ferocity, and with an 18 runs | 33 balls equation, this is gently left alone ",
            "14.2 Coulter-Nile to W Saha, 1 run, 136.9kph, full, on middle with the angle-in. Saha goes wristy, through mid-wicket ",
            "14.1 Coulter-Nile to W Saha, no run, 117kph, in-cutter into the tummy. Saha gets cramped in what looked like an initial attempt to cut, and so drops his wrists, opens his bat face and runs out to short third man ",
            "13.6 D Kulkarni to Warner, 2 runs, 105.4kph, and very comfortable. Around the fourth-stump, which Warner lines up to and punches through point ",
            "13.5 D Kulkarni to W Saha, 1 run, 127.6kph, full, on off, quiet flick, long-on "
        ],
        "teamone": "Data Not Found",
        "teamtwo": "Data Not Found",
        "update": "Sunrisers Hyderabad need 5 runs in 22 balls"
    }
}
```

## Code Examples ☕

- WordPress


## API Auth and Get data
function display_api_response() {
  $base_url = 'https://mr-mishra.herokuapp.com/';
  $score_path = 'https://www.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020';
  $url = $base_url.$score_path;
  $response = wp_remote_get($url);
  global $body;
  $body = json_decode( $response['body'], true );
}
add_action( 'init', 'display_api_response' );
```

Replace `YOUR-API-Domain` with your actual API Domain

- Fetch API (Javascript)

```js ranking
var url = 'https://mr-mishra.herokuapp.com/ranking';
<!-- 
js series
var url = 'https://mr-mishra.herokuapp.com/series';

``` js international , test, t20,odi,domestic,women, all (URL'S)
var url = 'https://mr-mishra.herokuapp.com/international';
var url = 'https://mr-mishra.herokuapp.com/test';
var url = 'https://mr-mishra.herokuapp.com/t20';
var url = 'https://mr-mishra.herokuapp.com/odi';
var url = 'https://mr-mishra.herokuapp.com/domestic';
var url = 'https://mr-mishra.herokuapp.com/women';
var url = 'https://mr-mishra.herokuapp.com/all';
 -->

async function fetchscore() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (exception) {
        console.log('Connection issue');
    }
}
fetchscore();
```

## Free Deploy 😍

- Deploy on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mskian/cri-deploy)  

- Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmskian%2Fcri-deploy)  

How Deploy Works? - <https://github.com/mskian/cri-deploy>

## Development 🍩

```sh
git clone https://github.com/arpitmiahra4/Cricket.com_Clone.git

```
## Deploy Netlify link; must vist...**
link --> "https://sweet-blancmange-3c6ad0.netlify.app/"


## Disclaimer 🗃

- This is not an Offical API from Cricbuzz - it's an Unofficial API
- This is for Education Purpose only - use at your own risk on Production Site

All Credits Goes to <https://www.cricbuzz.com/>

## Contribution members.. 🙌

1. Arpit mishra                     (arpitmiahra4)<-->Git-Username
2. khaja moinoddin                  (Khajamoinoddin)<-->Git-Username
1. Randeep Singh                    (randeep986)<-->Git-Username
2. jitendra                         (jitendra4545)<-->Git-Username
  
<!--                            .... Project for masai js211....                           -->