# canvas-gauge-card
This card allows you to use the awesome gauges at https://canvas-gauges.com/ in your lovelace GUI. This is still a very early and untested alpha version. Tested only on chrome and safari browsers. 

If you want to support the developer, please support the libdevs of the canvas-gauges.

## Screens 
Here is a som different screens from my own setup.

<a href="docs/screen1.png" target="_blank"><img src="docs/screen1.png"  width="254" height="204"/></a>
<a href="docs/screen2.png" target="_blank"><img src="docs/screen2.png"  width="313" height="239"/></a>

## Usage
Download the files `canvas-gauge-card.js` and `gauge.min.js` to your home assistant config.

Skip `name`property if you dont want the shadow or set height of the shadow with the property `shadow_height`

Use the javascript names of properties from the examples at https://canvas-gauges.com/. Just remove the ',' after copy from site. Here is an Example from one of my config for better clarity.

```yaml
- type: custom:canvas-gauge-card
    entity: sensor.processor_use
    name: Processor (%)
    shadow_height: 10%
    font_size: 1em
    gauge:
        type: "radial-gauge"
        width: 220
        height: 220
        units: "%"
        minValue: 0
        maxValue: 100
        startAngle: 40
        ticksAngle: 280
        valueBox: true
        majorTicks: [
            "0",
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "100",
        ]
        minorTicks: 2
        strokeTicks: true
        highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "rgba(200, 50, 50, .75)"
            }
        ]
        colorPlate: "#ddd"
        borderShadowWidth: 0
        borders: false
        needleType: "arrow"
        needleWidth: 2
        needleCircleSize: 7
        needleCircleOuter: true
        needleCircleInner: false
        animationDuration: 1500
        animationRule: "linear"
        colorBorderOuter: "#fff"
        colorBorderOuterEnd: "#ddd"
        colorBorderMiddle: "#ddd"
        colorBorderMiddleEnd: "#ddd"
        colorBorderInner: "#ddd"
        colorBorderInnerEnd: "#ddd"     
```

## Credits
- [Mikhus](https://github.com/Mikhus/canvas-gauges)