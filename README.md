# Custom cards development
I use this separate development environment to develop custom cards for lovelace. Please check my repository https://github.com/helto4real/hassio för my Home Assistant configuration

If you like what I do and want to buy me a cup of coffee. It is always appreciated :)

<a href="https://www.buymeacoffee.com/ij1qXRM6E" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Usage
All cards are built in the package dist/custom-cards.js, just copy that file and reference in the ui-lovelace.yaml. Please note that some cards require images to work. Check the folders and copy the images in that folder.

All cards can be used stand-alone under `dist/[cardname-card]` directory. Just copy the whole directory to hass.

**DO NOT COPY  CARDS UNDER `/src` FOR SINGLE USAGE!! USE dist/[cardname-card]` CAUSE IMPORTS WONT WORK OUTSIDE WEBPACK**

**See individual readme.md for details.**

## Setup the dev environment

1. First setup the npm tool that comes with nodejs. You can find it here. https://www.npmjs.com/get-npm by clicking on the "Download Node.js and npm" button.
2. while in git root folder, run `npm i -g webpack-cli` then run `npm i .` to install all dependecies (OBS: NPM DOES NOT SUPPORT UNC PATHS so make sure you are on a normal drive letter)
3. run `npm start` to compile and run the devserver
4. run the components html file in your browser under http://localhost:8081/dist/picture-status-card.html for example. Check your portsetting it might be different from 8081

if you want to build to production custom-cards.js file, run ```npm run-script prod``` then copy the custom_cards.js file to /www/{your custom card location} at your Home Assistant config folder

5. reference card in `ui-lovelace.yaml` like this:
```resources:
  - url: /local/{your custom card location}/custom-cards.js?v=1.001
    type: module

...
  cards:
    - type: custom:picture-status-card
      entity: device_tracker.presence_tomas
      image: /local/img/presence/tomas_presence_away.jpg
      state_image:
        Home: /local/img/presence/tomas_presence.jpg
        Just arrived: /local/img/presence/local/tomas_presence.jpg

```
The v=1.xxx is so you can make sure the broweser dont cache when you release new versions. Just increase the version when you copied a new version to hass.

## The structure

- webpack.*.js, contains the package information for dev and prod builds for webpack
- package.json, the package information, scripts, etc.
- src/*, here are all the card source files and corresponding test HTML file. All cards use packages
- dist/*, here are the built merged source scripts that can be used in Home assistant. **This is from where you copy files to use in Hass!!!**
