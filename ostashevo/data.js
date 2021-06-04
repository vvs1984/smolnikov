var APP_DATA = {
  "scenes": [
    {
      "id": "0--",
      "name": "Парадный вход",
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
        "yaw": -0.3181869482482078,
        "pitch": -0.17300985959867354,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -0.22795298428381017,
          "pitch": 0.1375982518602985,
          "rotation": 0,
          "target": "1-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-",
      "name": "1 этаж",
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
        "yaw": 0.3262416669426784,
        "pitch": -0.02790598198790839,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -2.805658235450599,
          "pitch": 0.1443017333415657,
          "rotation": 0,
          "target": "0--"
        },
        {
          "yaw": 0.2854193677900678,
          "pitch": 0.03844415364721954,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "Лестница",
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
        "yaw": -3.076281703246483,
        "pitch": 0.1424661847370654,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -3.0148795212265114,
          "pitch": 0.5262128340178869,
          "rotation": 0,
          "target": "1-1-"
        },
        {
          "yaw": -3.0344357713361045,
          "pitch": -0.14994171128516065,
          "rotation": 0,
          "target": "3-2--"
        },
        {
          "yaw": 0.6116911051207978,
          "pitch": 0.23746897725651905,
          "rotation": 0,
          "target": "5----"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2--",
      "name": "2-й этаж",
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
        "yaw": 0.057730121412122415,
        "pitch": 0.35531939624555875,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": 0.010585274692786584,
          "pitch": 0.5499292364164106,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -3.051658167939596,
          "pitch": 0.2517989577618529,
          "rotation": 0,
          "target": "4-2---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-2---",
      "name": "2-й этаж зал",
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
        "yaw": -2.8583122903814715,
        "pitch": 0.2288182499382394,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -2.951612127162564,
          "pitch": 0.3358416979788288,
          "rotation": 0,
          "target": "3-2--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5----",
      "name": "Вид со стороны реки",
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
        "yaw": -3.1071971044355546,
        "pitch": -0.046953498806745486,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -2.956745532504767,
          "pitch": 0.12203293399153026,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ostashevo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
