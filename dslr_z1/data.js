var APP_DATA = {
  "scenes": [
    {
      "id": "0-dslr",
      "name": "DSLR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8861380954344416,
        "pitch": 0.3082589173987067,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 0.062705760279405,
          "pitch": -0.049654846026138344,
          "rotation": 0,
          "target": "1-theta-z1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-theta-z1",
      "name": "Theta Z1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.7313502570246158,
        "pitch": 0.28718271637768567,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 2.7715111302320263,
          "pitch": -0.06623675290044417,
          "rotation": 0,
          "target": "0-dslr"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DSLR_Z1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
