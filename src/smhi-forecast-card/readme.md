# smhi-forecast-card
## Usage
Download the files `smhi-forecast-card.js` to your home assistant config. Add a module link to the `smhi-forecast-card.js` file. The link needs to be the same as where you put it.
Example:
copy to `/config/www/custom_cards`

lovelace resource:
```yaml
resources:
  - url: /local/custom_cards/smhi-forecast-card.js
    type: module
```
then add the cards as usal
```yaml
    - type: custom:smhi-forecast-card
      entity: weather.smhi_hemma
```
