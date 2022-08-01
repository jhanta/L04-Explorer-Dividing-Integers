var sketch = {
  "metadata": {
    "width": 1028,
    "height": 745,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L04 Explorer Dividing Integers.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "pagecontrol": true,
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Comic Sans MS\", sans-serif",
      "\"Papyrus\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -11,
          "left": 22,
          "bottom": 734,
          "right": 1050
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "aqua"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 21,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 14
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4.246772667622913",
          "latentVisibility": true,
          "label": "quotient",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 127
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 150
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "horz shift",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 53
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4.399853511154515",
          "latentVisibility": true,
          "label": "divisor",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 110
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "9": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "5",
            "1": "1"
          },
          "geom": {
            "loc": {
              "x": 348,
              "y": 67
            }
          },
          "label": "New Quotient",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Quotient"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 2,
              "upperParamBound": 6,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 2,
              "upperParamBound": 6,
              "discrete": false
            }
          ]
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 190
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 212
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 255
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*4",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 272
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 132
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 375
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 398
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 421
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 444
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 467
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 511
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 533
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 555
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 308
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 330
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "29": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "24"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "30": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 396
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<six)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "31": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 418
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "32": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 461
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "33": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "28"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 504
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "34": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "29"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 547
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "35": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "30"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 590
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "36": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 41
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.15 cm",
          "latentVisibility": true,
          "label": "shift rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 91
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "3",
            "2": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*2+2*@0*(@2-2*@1)/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 50,
              "y": 126
            }
          },
          "textMFS": "<VL<H<T'If you divide '><?1xC0001<H<T'16'>>><T' into '><?1xC0002<H<T'4'>>><T' groups'>><H<T'there will be '><?1xC0003<H<T'4'>>><T' in each group.'>><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "40": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 182,
              "y": 40
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'16'>>><?1xC0002<H<T'4'>>>><T' =  '><?1xC0003<H<T'4'>>><T' '>>>",
          "style": {
            "font-size": 20,
            "text-decoration": "none"
          }
        },
        "41": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 65
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.15 cm",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "42": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "43": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "2",
            "2": "15",
            "3": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 243
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0*(@1)+(2*(@1-1)*(@2-2*@0))/2+2*@3",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "44": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "42"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 282
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0+2*(@1-@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "45": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 550,
              "y": 38
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'16'>>><?1xC0002<H<T'4'>>>><T' =  '><?1xC0003<H<T'4'>>><T' '>>>",
          "style": {
            "font-size": 20,
            "text-decoration": "none"
          }
        },
        "46": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 429,
              "y": 124
            }
          },
          "textMFS": "<VL<H<T'If you divide '><?1xC0001<H<T'16'>>><T' into groups of'>><H<?1xC0002<H<T'4'>>><T' there will be '><?1xC0003<H<T'4'>>><T' groups.'>><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "47": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 56,
              "y": 522
            }
          },
          "textMFS": "<VL<SW2<T'Partitive:'>><H<T'Divide into '><?1xC0001<H<T'4'>>>><T'groups.'><F1FxxFFFFFFFFx20x4x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "48": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 421,
              "y": 522
            }
          },
          "textMFS": "<VL<SW2<T'Quotative:'>><T'Divide into groups of'><H<?1xC0001<H<T'4'>>><T'.'>><F1FxxFFFFFFFFx20x4x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "49": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "3",
            "3": "4",
            "4": "5",
            "5": "6",
            "6": "7",
            "7": "8",
            "8": "10",
            "9": "11",
            "10": "12",
            "11": "13",
            "12": "14",
            "13": "15",
            "14": "16",
            "15": "17",
            "16": "18",
            "17": "19",
            "18": "20",
            "19": "21",
            "20": "22",
            "21": "23",
            "22": "24",
            "23": "25",
            "24": "26",
            "25": "27",
            "26": "28",
            "27": "29",
            "28": "30",
            "29": "31",
            "30": "32",
            "31": "33",
            "32": "34",
            "33": "35",
            "34": "36",
            "35": "37",
            "36": "38",
            "37": "41",
            "38": "42",
            "39": "43",
            "40": "44"
          },
          "geom": {
            "loc": {
              "x": 1283,
              "y": 75
            }
          },
          "label": "Show Measurements",
          "style": {
            "hidden": true,
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true
        },
        "50": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 45,
              "y": 6
            }
          },
          "textMFS": "<VL<T'Dividing Two Integers Explorer: (+) Dividend (+) Divisor'>>",
          "style": {
            "font-size": 22
          }
        },
        "51": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 43,
              "y": 629
            }
          },
          "textMFS": "<T'Use each model to explain why the quotient of two positive integers is positive.'>",
          "style": {
            "text-decoration": "none"
          }
        },
        "52": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 733,
              "y": 14
            }
          },
          "label": "Next Page",
          "style": {
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "2"
        },
        "53": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 784,
              "y": 117
            }
          },
          "label": "Q",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 4,
              "labelOffsetY": -15
            },
            "radius": 2
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 40,
              "y": 117
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -13,
              "labelOffsetY": -15
            },
            "radius": 2
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "54",
            "p1": "53"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "56": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "55"
          },
          "value": 0.49193548387096775,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "56",
            "line": "55"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "54",
            "line": "55"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "53",
            "line": "55"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "60": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "58"
          },
          "value": 1.1706989247311828,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "60",
            "line": "58"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "59",
            "line1": "61"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "57",
            "line1": "61"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "64": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "54",
            "p1": "60"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "53",
            "p1": "62"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "66": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "60",
            "p1": "62"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "67": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "56",
            "p1": "63"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "69": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "68",
            "2": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 577
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/trunc((@0-@1)/@2)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 361
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "one<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "16",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 383
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "two<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "17",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 405
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "three<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "18",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 427
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "four<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "19",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 449
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "five<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "20",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "six<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "70",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "71",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "73",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "74",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "75",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -25,
              "y": 218
            }
          },
          "label": "U",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "83": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "84": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "83",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "85": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "84"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 36
          }
        },
        "86": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "85",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 42
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "83",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "88": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "83",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "88",
            "center": "83"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "90": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "89",
            "p1": "88"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "91": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "90",
            "p0": "83",
            "p1": "87"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "92": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "p0": "83",
            "p1": "87"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "center": "94"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "97": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "96",
            "p1": "95"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "98": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "97",
            "p0": "83",
            "p1": "87"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "99": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "83",
            "1": "84",
            "2": "85",
            "3": "86",
            "4": "87",
            "5": "88",
            "6": "89",
            "7": "90",
            "8": "91",
            "9": "98",
            "10": "92",
            "11": "93",
            "preimage0": "82",
            "map0image0": "83",
            "depth": "76"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "100": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "86",
            "map": "99"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 48
          }
        },
        "101": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "91",
            "map": "99"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "102": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "98",
            "map": "99"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "103": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "84",
            "map": "99"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "104": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "94",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "104"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 37
          }
        },
        "106": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "105",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 43
          }
        },
        "107": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "94",
            "1": "104",
            "2": "105",
            "3": "106",
            "4": "95",
            "5": "96",
            "6": "97",
            "7": "98",
            "preimage0": "93",
            "map0image0": "94",
            "depth": "77"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "108": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "106",
            "map": "107"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 49
          }
        },
        "109": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "98",
            "map": "107"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "110": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "104",
            "map": "107"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "111": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "112": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 953,
              "y": 661
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "87",
            "distance": "112"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "114": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "91",
            "p0": "87",
            "p1": "113"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true
        },
        "115": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 730
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "distance": "115"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "117": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "98",
            "distance": "115"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "118": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 949,
              "y": 782
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "122": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "121",
            "center": "120"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "123": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "122",
            "p1": "121"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "120",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "125": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "124"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 38
          }
        },
        "126": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "125",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 44
          }
        },
        "127": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 956,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "130": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "129",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "131": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "123",
            "p0": "129",
            "p1": "130"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "132": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "131",
            "distance": "118"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "133": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "120",
            "1": "124",
            "2": "125",
            "3": "126",
            "4": "121",
            "5": "122",
            "6": "123",
            "7": "131",
            "preimage0": "119",
            "map0image0": "120",
            "depth": "78"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "134": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "126",
            "map": "133"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 50
          }
        },
        "135": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "124",
            "map": "133"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "136": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "131",
            "map": "133"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "129",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "138": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "137",
            "center": "129"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "139": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "138",
            "p1": "137"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "140": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "139",
            "p0": "129",
            "p1": "130"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "141": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "140",
            "distance": "127"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "142": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "129",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "143": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "142"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 39
          }
        },
        "144": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "143",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 45
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "146",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "146",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "149": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "148",
            "center": "146"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "149",
            "p1": "148"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "151": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "150",
            "p0": "129",
            "p1": "130"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "152": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "146",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "153": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "152"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 40
          }
        },
        "154": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "153",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 46
          }
        },
        "155": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "146",
            "1": "152",
            "2": "153",
            "3": "154",
            "4": "148",
            "5": "149",
            "6": "150",
            "7": "151",
            "preimage0": "145",
            "map0image0": "146",
            "depth": "80"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "156": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "154",
            "map": "155"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 52
          }
        },
        "157": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "152",
            "map": "155"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "158": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "151",
            "map": "155"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "159": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "160": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "161": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "160",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "160",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "163": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "162",
            "center": "160"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "163",
            "p1": "162"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "165": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "164",
            "p0": "129",
            "p1": "130"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "166": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "129",
            "1": "142",
            "2": "143",
            "3": "144",
            "4": "137",
            "5": "130",
            "6": "131",
            "7": "138",
            "8": "139",
            "9": "140",
            "10": "151",
            "11": "165",
            "preimage0": "128",
            "map0image0": "129",
            "depth": "79"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "167": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "151",
            "map": "166"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "168": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "140",
            "map": "166"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "169": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "131",
            "map": "166"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "170": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "144",
            "map": "166"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 51
          }
        },
        "171": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "142",
            "map": "166"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "172": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "165",
            "map": "166"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "173": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "160",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "174": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "173"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 41
          }
        },
        "175": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "174",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 47
          }
        },
        "176": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "160",
            "1": "173",
            "2": "174",
            "3": "175",
            "4": "162",
            "5": "163",
            "6": "164",
            "7": "165",
            "preimage0": "159",
            "map0image0": "160",
            "depth": "81"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "177": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "175",
            "map": "176"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 53
          }
        },
        "178": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "173",
            "map": "176"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "179": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "165",
            "map": "176"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "180": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 951,
              "y": 903
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "181": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "151",
            "distance": "180"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "182": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 958
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "165",
            "distance": "182"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "184": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 351,
              "y": 215
            }
          },
          "label": "A[1]",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "185": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "184",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "186": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "185",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "187": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "186"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 54
          }
        },
        "188": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "187",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 60
          }
        },
        "189": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "185",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "190": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "189",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "191": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "189",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "192": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "191",
            "p1": "190"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "193": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "191",
            "distance": "112"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "194": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "112"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "195": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "192",
            "distance": "112"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "196": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "185",
            "1": "186",
            "2": "187",
            "3": "188",
            "4": "189",
            "5": "190",
            "6": "191",
            "7": "192",
            "8": "193",
            "9": "194",
            "10": "195",
            "preimage0": "184",
            "map0image0": "185",
            "depth": "76"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "197": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "186",
            "map": "196"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "198": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "188",
            "map": "196"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 66
          }
        },
        "199": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "200": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "192",
            "distance": "199"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "201": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "199"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "202": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "191",
            "distance": "199"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "193",
            "p1": "202"
          },
          "constraint": "Segment"
        },
        "204": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "194",
            "p1": "201"
          },
          "constraint": "Segment"
        },
        "205": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 707
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "206": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "184",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "206",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "208": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "207",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "209": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "208",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "210": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "209",
            "distance": "205"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "211": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "209",
            "distance": "115"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "212": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "211",
            "p1": "210"
          },
          "constraint": "Segment"
        },
        "213": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "208",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "214": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "213",
            "distance": "205"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "215": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "213",
            "distance": "115"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "216": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "215",
            "p1": "214"
          },
          "constraint": "Segment"
        },
        "217": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "209",
            "p1": "213"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "217",
            "distance": "205"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "219": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "217",
            "distance": "115"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "220": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "207",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "221": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "220"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 55
          }
        },
        "222": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "221",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 61
          }
        },
        "223": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "207",
            "1": "220",
            "2": "221",
            "3": "222",
            "4": "208",
            "5": "213",
            "6": "209",
            "7": "217",
            "8": "215",
            "9": "211",
            "10": "219",
            "preimage0": "206",
            "map0image0": "207",
            "depth": "77"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "224": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "220",
            "map": "223"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "225": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "222",
            "map": "223"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 67
          }
        },
        "226": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "206",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "228": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "227",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "229": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "230": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "231": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "229",
            "p1": "230"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "232": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "227",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "233": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "232"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 56
          }
        },
        "234": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "233",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 62
          }
        },
        "235": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "235",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "239": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "240": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "238",
            "p1": "239"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "241": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "236",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "242": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "241"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "navy",
            "layerOrder": 57
          }
        },
        "243": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "242",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 63
          }
        },
        "244": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "235",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "244",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "247": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "248": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "249": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "247",
            "p1": "248"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "250": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "245",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "251": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "250"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 58
          }
        },
        "252": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "251",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 64
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "244",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "254": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "253",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "255": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "256": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "255",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "257": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "255",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "258": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "256",
            "p1": "257"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "259": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "254",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "260": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "259"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 59
          }
        },
        "261": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "260",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 65
          }
        },
        "262": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "231",
            "distance": "118"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "263": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "230",
            "distance": "118"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "264": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "229",
            "distance": "118"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "265": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "227",
            "1": "232",
            "2": "233",
            "3": "234",
            "4": "228",
            "5": "230",
            "6": "229",
            "7": "231",
            "8": "235",
            "9": "262",
            "10": "263",
            "11": "264",
            "preimage0": "226",
            "map0image0": "227",
            "depth": "78"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "266": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "232",
            "map": "265"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "267": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "234",
            "map": "265"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 68
          }
        },
        "268": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 755
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "269": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "230",
            "distance": "268"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "270": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "231",
            "distance": "268"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "271": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "229",
            "distance": "268"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "272": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "263",
            "p1": "269"
          },
          "constraint": "Segment"
        },
        "273": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "264",
            "p1": "271"
          },
          "constraint": "Segment"
        },
        "274": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "239",
            "distance": "127"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "275": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "127"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "276": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "240",
            "distance": "127"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "277": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "236",
            "1": "241",
            "2": "242",
            "3": "243",
            "4": "237",
            "5": "239",
            "6": "238",
            "7": "240",
            "8": "244",
            "9": "274",
            "10": "275",
            "11": "276",
            "preimage0": "235",
            "map0image0": "236",
            "depth": "79"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "241",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "279": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "243",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 69
          }
        },
        "280": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 803
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "281": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "239",
            "distance": "280"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "282": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "280"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "283": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "240",
            "distance": "280"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "284": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "275",
            "p1": "282"
          },
          "constraint": "Segment"
        },
        "285": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "274",
            "p1": "281"
          },
          "constraint": "Segment"
        },
        "286": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "248",
            "distance": "180"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "287": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "distance": "180"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "288": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "249",
            "distance": "180"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "289": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "245",
            "1": "250",
            "2": "251",
            "3": "252",
            "4": "246",
            "5": "248",
            "6": "247",
            "7": "249",
            "8": "253",
            "9": "286",
            "10": "287",
            "11": "288",
            "preimage0": "244",
            "map0image0": "245",
            "depth": "80"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "290": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "250",
            "map": "289"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "291": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "252",
            "map": "289"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 70
          }
        },
        "292": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 851
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "293": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "248",
            "distance": "292"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "294": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "249",
            "distance": "292"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "295": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "distance": "292"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "296": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "286",
            "p1": "293"
          },
          "constraint": "Segment"
        },
        "297": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "287",
            "p1": "295"
          },
          "constraint": "Segment"
        },
        "298": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "258",
            "distance": "182"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "299": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "257",
            "distance": "182"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "300": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "182"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "301": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "254",
            "1": "259",
            "2": "260",
            "3": "261",
            "4": "255",
            "5": "257",
            "6": "256",
            "7": "258",
            "8": "298",
            "9": "299",
            "10": "300",
            "preimage0": "253",
            "map0image0": "254",
            "depth": "81"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "302": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "259",
            "map": "301"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "303": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "261",
            "map": "301"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 71
          }
        },
        "304": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 783,
              "y": 893
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "305": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "258",
            "distance": "304"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "306": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "257",
            "distance": "304"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "307": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "304"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "308": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "306",
            "p1": "299"
          },
          "constraint": "Segment"
        },
        "309": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "300",
            "p1": "307"
          },
          "constraint": "Segment"
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": -11,
          "left": 10,
          "bottom": 734,
          "right": 1038
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "aqua"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 21,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 14
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5.418439283425398",
          "latentVisibility": true,
          "label": "quotient",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 127
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 150
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "horz shift",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 53
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5.287453840754417",
          "latentVisibility": true,
          "label": "divisor",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 110
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "9": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "5",
            "1": "1"
          },
          "geom": {
            "loc": {
              "x": 362,
              "y": 56
            }
          },
          "label": "New Quotient",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Quotient"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -6,
              "upperParamBound": -2,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 2,
              "upperParamBound": 6,
              "discrete": false
            }
          ]
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 190
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 212
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 255
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*4",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 272
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 132
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 375
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 398
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 421
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 444
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 467
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 511
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 533
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 555
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 308
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 330
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "29": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "24"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "30": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 396
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<six)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "31": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 418
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "32": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 461
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "33": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "28"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 504
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "34": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "29"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 547
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "35": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "30"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 590
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "36": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 41
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.15 cm",
          "latentVisibility": true,
          "label": "shift rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 91
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "3",
            "2": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*2+2*@0*(@2-2*@1)/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 50,
              "y": 126
            }
          },
          "textMFS": "<H<T'Can you divide '><?1xC0001<H<T'\u201325'>>><T' into '><?1xC0002<H<T'\u20135'>>><T' groups?'>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "40": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 159,
              "y": 39
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'\u201325'>>><?1xC0002<H<T'\u20135'>>>><T' =  '><?1xC0003<H<T'5'>>>><0><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "text-decoration": "none"
          }
        },
        "41": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 65
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.15 cm",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "42": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "43": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "2",
            "2": "15",
            "3": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 243
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0*(@1)+(2*(@1-1)*(@2-2*@0))/2+2*@3",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "44": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "42"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 282
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0+2*(@1-@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "45": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 549,
              "y": 41
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'\u201325'>>><?1xC0002<H<T'\u20135'>>>><T' =  '><?1xC0003<H<T'5'>>>><0><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "text-decoration": "none"
          }
        },
        "46": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 429,
              "y": 124
            }
          },
          "textMFS": "<VL<H<T'If you divide '><?1xC0001<H<T'\u201325'>>><T' into groups of'>><H<?1xC0002<H<T'\u20135'>>><T' there will be '><?1xC0003<H<T'5'>>><T' groups.'>><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "47": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 56,
              "y": 522
            }
          },
          "textMFS": "<VL<SW2<T'Partitive:'>><T'It doesn\\'t make sense to divide'><H<T'into '><?1xC0001<H<T'\u20135'>>><T' groups.'>><F1FxxFFFFFFFFx20x4x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "48": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 421,
              "y": 522
            }
          },
          "textMFS": "<VL<SW2<T'Quotative:'>><H<T'Divide into groups of '><?1xC0001<H<T'\u20135'>>><T'.'>>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "49": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "3",
            "3": "4",
            "4": "5",
            "5": "6",
            "6": "7",
            "7": "8",
            "8": "10",
            "9": "11",
            "10": "12",
            "11": "13",
            "12": "14",
            "13": "15",
            "14": "16",
            "15": "17",
            "16": "18",
            "17": "19",
            "18": "20",
            "19": "21",
            "20": "22",
            "21": "23",
            "22": "24",
            "23": "25",
            "24": "26",
            "25": "27",
            "26": "28",
            "27": "29",
            "28": "30",
            "29": "31",
            "30": "32",
            "31": "33",
            "32": "34",
            "33": "35",
            "34": "36",
            "35": "37",
            "36": "38",
            "37": "41",
            "38": "42",
            "39": "43",
            "40": "44"
          },
          "geom": {
            "loc": {
              "x": 1283,
              "y": 75
            }
          },
          "label": "Show Measurements",
          "style": {
            "hidden": true,
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true
        },
        "50": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 733,
              "y": 5
            }
          },
          "label": "Next Page",
          "style": {
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "3"
        },
        "51": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 784,
              "y": 117
            }
          },
          "label": "Q",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 4,
              "labelOffsetY": -15
            },
            "radius": 2
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 40,
              "y": 117
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -13,
              "labelOffsetY": -15
            },
            "radius": 2
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "51"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "54": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 636,
              "y": 5
            }
          },
          "label": "Previous Page",
          "style": {
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "1"
        },
        "55": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "53"
          },
          "value": 0.49193548387096775,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "56": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "55",
            "line": "53"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "52",
            "line": "53"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "51",
            "line": "53"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "59": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "57"
          },
          "value": 1.1706989247311828,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "59",
            "line": "57"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "58",
            "line1": "60"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "56",
            "line1": "60"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "63": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "59"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "64": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "51",
            "p1": "61"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "59",
            "p1": "61"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "66": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "55",
            "p1": "62"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "67": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "67",
            "2": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 577
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/trunc((@0-@1)/@2)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "69": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "67",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 361
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "one<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "16",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 383
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "two<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "17",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 405
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "three<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "18",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 427
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "four<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "19",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 449
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "five<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "20",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "six<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "69",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "70",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "71",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "73",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "74",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -25,
              "y": 218
            }
          },
          "label": "U",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "83": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "82",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "84": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "83"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 36
          }
        },
        "85": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "84",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 42
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "88": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "87",
            "center": "82"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "89": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "88",
            "p1": "87"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "90": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "89",
            "p0": "82",
            "p1": "86"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "p0": "82",
            "p1": "86"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "92": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "92",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "center": "93"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "96": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "95",
            "p1": "94"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "97": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "96",
            "p0": "82",
            "p1": "86"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "98": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "82",
            "1": "83",
            "2": "84",
            "3": "85",
            "4": "86",
            "5": "87",
            "6": "88",
            "7": "89",
            "8": "90",
            "9": "97",
            "10": "91",
            "11": "92",
            "preimage0": "81",
            "map0image0": "82",
            "depth": "75"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "99": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "85",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 48
          }
        },
        "100": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "90",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "101": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "97",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "102": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "83",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "103": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "93",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "103"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 37
          }
        },
        "105": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "104",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 43
          }
        },
        "106": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "93",
            "1": "103",
            "2": "104",
            "3": "105",
            "4": "94",
            "5": "95",
            "6": "96",
            "7": "97",
            "preimage0": "92",
            "map0image0": "93",
            "depth": "76"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "107": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "105",
            "map": "106"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 49
          }
        },
        "108": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "97",
            "map": "106"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "109": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "103",
            "map": "106"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "111": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "69"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 953,
              "y": 661
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "113": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "90",
            "p0": "86",
            "p1": "112"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "114": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 730
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "110",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "116": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "97",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "117": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 949,
              "y": 782
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "118": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "92",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "118",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "122": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "121",
            "p1": "120"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "123": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "119",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "123"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 38
          }
        },
        "125": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "124",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 44
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 956,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "118",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "130": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "122",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "131": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "130",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "132": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "119",
            "1": "123",
            "2": "124",
            "3": "125",
            "4": "120",
            "5": "121",
            "6": "122",
            "7": "130",
            "preimage0": "118",
            "map0image0": "119",
            "depth": "77"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "133": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "125",
            "map": "132"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 50
          }
        },
        "134": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "123",
            "map": "132"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "135": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "130",
            "map": "132"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "136": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "center": "128"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "138": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "137",
            "p1": "136"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "139": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "138",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "140": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "139",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "141": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "128",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "142": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "141"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 39
          }
        },
        "143": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "142",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 45
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "147",
            "center": "145"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "149": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "148",
            "p1": "147"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "149",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "151": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "145",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "152": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "151"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 40
          }
        },
        "153": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "152",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 46
          }
        },
        "154": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "145",
            "1": "151",
            "2": "152",
            "3": "153",
            "4": "147",
            "5": "148",
            "6": "149",
            "7": "150",
            "preimage0": "144",
            "map0image0": "145",
            "depth": "79"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "155": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "153",
            "map": "154"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 52
          }
        },
        "156": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "151",
            "map": "154"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "157": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "150",
            "map": "154"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "158": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "159": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "158",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "160": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "161": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "161",
            "center": "159"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "163": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "162",
            "p1": "161"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "163",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "165": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "128",
            "1": "141",
            "2": "142",
            "3": "143",
            "4": "136",
            "5": "129",
            "6": "130",
            "7": "137",
            "8": "138",
            "9": "139",
            "10": "150",
            "11": "164",
            "preimage0": "127",
            "map0image0": "128",
            "depth": "78"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "166": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "150",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "167": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "139",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "168": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "130",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "169": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "143",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 51
          }
        },
        "170": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "141",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "171": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "164",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "172": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "159",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "173": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "172"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 41
          }
        },
        "174": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "173",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 47
          }
        },
        "175": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "159",
            "1": "172",
            "2": "173",
            "3": "174",
            "4": "161",
            "5": "162",
            "6": "163",
            "7": "164",
            "preimage0": "158",
            "map0image0": "159",
            "depth": "80"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "176": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "174",
            "map": "175"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 53
          }
        },
        "177": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "172",
            "map": "175"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "178": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "164",
            "map": "175"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 951,
              "y": 903
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "180": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "150",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "181": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 958
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "164",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "183": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 351,
              "y": 215
            }
          },
          "label": "A[1]",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "184": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "183",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "185": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "184",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "186": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "185"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 54
          }
        },
        "187": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "186",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 60
          }
        },
        "188": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "184",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "189": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "188",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "190": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "188",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "190",
            "p1": "189"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "192": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "193": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "189",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "195": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "184",
            "1": "185",
            "2": "186",
            "3": "187",
            "4": "188",
            "5": "189",
            "6": "190",
            "7": "191",
            "8": "192",
            "9": "193",
            "10": "194",
            "preimage0": "183",
            "map0image0": "184",
            "depth": "75"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "196": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "185",
            "map": "195"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "197": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "187",
            "map": "195"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 66
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "69"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "199": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "distance": "198"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "200": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "189",
            "distance": "198"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "201": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "198"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "202": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "192",
            "p1": "201"
          },
          "constraint": "Segment"
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "193",
            "p1": "200"
          },
          "constraint": "Segment"
        },
        "204": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 707
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "205": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "183",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "206": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "206",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "208": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "207",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "209": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "208",
            "distance": "204"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "210": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "208",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "211": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "210",
            "p1": "209"
          },
          "constraint": "Segment"
        },
        "212": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "207",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "213": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "212",
            "distance": "204"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "214": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "212",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "215": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "214",
            "p1": "213"
          },
          "constraint": "Segment"
        },
        "216": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "208",
            "p1": "212"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "217": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "216",
            "distance": "204"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "216",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "219": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "206",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "220": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "219"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 55
          }
        },
        "221": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "220",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 61
          }
        },
        "222": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "206",
            "1": "219",
            "2": "220",
            "3": "221",
            "4": "207",
            "5": "212",
            "6": "208",
            "7": "216",
            "8": "214",
            "9": "210",
            "10": "218",
            "preimage0": "205",
            "map0image0": "206",
            "depth": "76"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "223": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "219",
            "map": "222"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "224": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "221",
            "map": "222"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 67
          }
        },
        "225": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "226": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "225",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "228": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "227",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "229": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "227",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "230": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "228",
            "p1": "229"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "231": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "226",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "232": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "231"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 56
          }
        },
        "233": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "232",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 62
          }
        },
        "234": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "225",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "235": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "234",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "235",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "239": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "237",
            "p1": "238"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "240": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "235",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "241": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "240"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "navy",
            "layerOrder": 57
          }
        },
        "242": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "241",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 63
          }
        },
        "243": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "234",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "244": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "243",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "244",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "247": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "248": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "246",
            "p1": "247"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "249": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "244",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "250": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "249"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 58
          }
        },
        "251": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "250",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 64
          }
        },
        "252": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "243",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "252",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "254": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "253",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "255": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "256": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "257": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "255",
            "p1": "256"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "258": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "253",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "259": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "258"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 59
          }
        },
        "260": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "259",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 65
          }
        },
        "261": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "230",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "262": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "229",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "263": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "264": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "226",
            "1": "231",
            "2": "232",
            "3": "233",
            "4": "227",
            "5": "229",
            "6": "228",
            "7": "230",
            "8": "234",
            "9": "261",
            "10": "262",
            "11": "263",
            "preimage0": "225",
            "map0image0": "226",
            "depth": "77"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "265": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "231",
            "map": "264"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "266": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "233",
            "map": "264"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 68
          }
        },
        "267": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 755
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "268": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "229",
            "distance": "267"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "269": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "230",
            "distance": "267"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "270": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "267"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "271": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "262",
            "p1": "268"
          },
          "constraint": "Segment"
        },
        "272": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "263",
            "p1": "270"
          },
          "constraint": "Segment"
        },
        "273": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "274": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "275": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "239",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "276": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "235",
            "1": "240",
            "2": "241",
            "3": "242",
            "4": "236",
            "5": "238",
            "6": "237",
            "7": "239",
            "8": "243",
            "9": "273",
            "10": "274",
            "11": "275",
            "preimage0": "234",
            "map0image0": "235",
            "depth": "78"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "277": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "240",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "242",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 69
          }
        },
        "279": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 803
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "280": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "279"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "281": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "279"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "282": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "239",
            "distance": "279"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "283": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "274",
            "p1": "281"
          },
          "constraint": "Segment"
        },
        "284": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "273",
            "p1": "280"
          },
          "constraint": "Segment"
        },
        "285": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "286": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "287": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "248",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "288": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "244",
            "1": "249",
            "2": "250",
            "3": "251",
            "4": "245",
            "5": "247",
            "6": "246",
            "7": "248",
            "8": "252",
            "9": "285",
            "10": "286",
            "11": "287",
            "preimage0": "243",
            "map0image0": "244",
            "depth": "79"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "289": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "249",
            "map": "288"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "290": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "251",
            "map": "288"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 70
          }
        },
        "291": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 851
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "292": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "distance": "291"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "293": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "248",
            "distance": "291"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "294": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "291"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "295": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "285",
            "p1": "292"
          },
          "constraint": "Segment"
        },
        "296": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "286",
            "p1": "294"
          },
          "constraint": "Segment"
        },
        "297": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "257",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "298": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "299": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "255",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "300": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "253",
            "1": "258",
            "2": "259",
            "3": "260",
            "4": "254",
            "5": "256",
            "6": "255",
            "7": "257",
            "8": "297",
            "9": "298",
            "10": "299",
            "preimage0": "252",
            "map0image0": "253",
            "depth": "80"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "301": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "258",
            "map": "300"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "302": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "260",
            "map": "300"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 71
          }
        },
        "303": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 783,
              "y": 893
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "304": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "257",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "305": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "306": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "255",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "307": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "305",
            "p1": "298"
          },
          "constraint": "Segment"
        },
        "308": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "299",
            "p1": "306"
          },
          "constraint": "Segment"
        },
        "309": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 40,
              "y": 633
            }
          },
          "textMFS": "<T'Use the second model to explain why the quotient of two negative integers is positive.'>",
          "style": {
            "text-decoration": "none"
          }
        },
        "310": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 0
            }
          },
          "textMFS": "<VL<T'Dividing Two Integers Explorer: (-) Dividend (-) Divisor'>>",
          "style": {
            "font-size": 22
          }
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": -13,
          "left": 6,
          "bottom": 732,
          "right": 1034
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "aqua"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 21,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 14
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5.922360911893064",
          "latentVisibility": true,
          "label": "quotient",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 127
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 150
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "horz shift",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 53
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.445356608783227",
          "latentVisibility": true,
          "label": "divisor",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 110
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "9": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "5",
            "1": "1"
          },
          "geom": {
            "loc": {
              "x": 352,
              "y": 59
            }
          },
          "label": "New Quotient",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Quotient"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 2,
              "upperParamBound": 6,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -6,
              "upperParamBound": -2,
              "discrete": false
            }
          ]
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 190
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 212
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 255
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*4",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 272
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 132
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 375
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 398
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 421
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 819,
              "y": 444
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 467
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 511
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 533
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 819,
              "y": 555
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 308
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 330
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "29": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "24"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "30": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 396
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<six)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "31": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 418
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "32": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 461
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "33": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "28"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 504
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "34": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "29"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 547
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "35": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "30"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 590
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "36": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 41
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.15 cm",
          "latentVisibility": true,
          "label": "shift rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 91
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "3",
            "2": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*2+2*@0*(@2-2*@1)/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 50,
              "y": 126
            }
          },
          "textMFS": "<VL<H<T'If you divide '><?1xC0001<H<T'\u201318'>>><T' into '><?1xC0002<H<T'3'>>><T' groups'>><H<T'there will be '><?1xC0003<H<T'\u20136'>>><T' in each group.'>><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "40": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 158,
              "y": 38
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'\u201318'>>><?1xC0002<H<T'3'>>>><T' =  '><?1xC0003<H<T'\u20136'>>>><0><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "text-decoration": "none"
          }
        },
        "41": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 65
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.15 cm",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "42": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "43": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "2",
            "2": "15",
            "3": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 243
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0*(@1)+(2*(@1-1)*(@2-2*@0))/2+2*@3",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "44": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "42"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 282
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0+2*(@1-@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "45": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 559,
              "y": 38
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'\u201318'>>><?1xC0002<H<T'3'>>>><T' =  '><?1xC0003<H<T'\u20136'>>>><0><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 20,
            "text-decoration": "none"
          }
        },
        "46": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "8",
            "1": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 429,
              "y": 124
            }
          },
          "textMFS": "<H<T'Can you divide '><?1xC0001<H<T'\u201318'>>><T' into groups of '><?1xC0002<H<T'3'>>><T'?'>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "47": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "6"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 52,
              "y": 534
            }
          },
          "textMFS": "<VL<SW2<T'Partitive:'>><H<T'Divide into '><?1xC0001<H<T'3'>>><T' groups.'>>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "48": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "6",
            "1": "8"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 420,
              "y": 533
            }
          },
          "textMFS": "<VL<SW2<T'Quotative:'>><H<T'There are no groups of '><?1xC0001<H<T'3'>>><T' in '><?1xC0002<H<T'\u201318'>>><T'.'>>>",
          "style": {
            "font-size": 20,
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "49": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "3",
            "3": "4",
            "4": "5",
            "5": "6",
            "6": "7",
            "7": "8",
            "8": "10",
            "9": "11",
            "10": "12",
            "11": "13",
            "12": "14",
            "13": "15",
            "14": "16",
            "15": "17",
            "16": "18",
            "17": "19",
            "18": "20",
            "19": "21",
            "20": "22",
            "21": "23",
            "22": "24",
            "23": "25",
            "24": "26",
            "25": "27",
            "26": "28",
            "27": "29",
            "28": "30",
            "29": "31",
            "30": "32",
            "31": "33",
            "32": "34",
            "33": "35",
            "34": "36",
            "35": "37",
            "36": "38",
            "37": "41",
            "38": "42",
            "39": "43",
            "40": "44"
          },
          "geom": {
            "loc": {
              "x": 1283,
              "y": 75
            }
          },
          "label": "Show Measurements",
          "style": {
            "hidden": true,
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true
        },
        "50": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 733,
              "y": 3
            }
          },
          "label": "Next Page",
          "style": {
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "4"
        },
        "51": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 784,
              "y": 117
            }
          },
          "label": "Q",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 4,
              "labelOffsetY": -15
            },
            "radius": 2
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 40,
              "y": 117
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -13,
              "labelOffsetY": -15
            },
            "radius": 2
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "51"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "54": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 636,
              "y": 3
            }
          },
          "label": "Previous Page",
          "style": {
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "2"
        },
        "55": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "53"
          },
          "value": 0.49193548387096775,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "56": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "55",
            "line": "53"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "52",
            "line": "53"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "51",
            "line": "53"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "59": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "57"
          },
          "value": 1.1706989247311828,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "59",
            "line": "57"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "58",
            "line1": "60"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "56",
            "line1": "60"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "63": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "59"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "64": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "51",
            "p1": "61"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "59",
            "p1": "61"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "66": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "55",
            "p1": "62"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "67": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "67",
            "2": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 577
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/trunc((@0-@1)/@2)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "69": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "67",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 361
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-abs(@1))))/2",
          "label": "one<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "16",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 383
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-abs(@1))))/2",
          "label": "two<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "17",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 405
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-abs(@1))))/2",
          "label": "three<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "18",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 427
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-abs(@1))))/2",
          "label": "four<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "19",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 449
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-abs(@1))))/2",
          "label": "five<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "20",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-abs(@1))))/2",
          "label": "six<=m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "69",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "70",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "71",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "73",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "74",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1067,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*abs(@1)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -25,
              "y": 218
            }
          },
          "label": "U",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "83": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "82",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "84": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "83"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 36
          }
        },
        "85": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "84",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 42
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "88": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "87",
            "center": "82"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "89": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "88",
            "p1": "87"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "90": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "89",
            "p0": "82",
            "p1": "86"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "p0": "82",
            "p1": "86"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "92": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "92",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "center": "93"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "96": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "95",
            "p1": "94"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "97": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "96",
            "p0": "82",
            "p1": "86"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "98": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "82",
            "1": "83",
            "2": "84",
            "3": "85",
            "4": "86",
            "5": "87",
            "6": "88",
            "7": "89",
            "8": "90",
            "9": "97",
            "10": "91",
            "11": "92",
            "preimage0": "81",
            "map0image0": "82",
            "depth": "75"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "99": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "85",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 48
          }
        },
        "100": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "90",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "101": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "97",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "102": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "83",
            "map": "98"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "103": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "93",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "103"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 37
          }
        },
        "105": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "104",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 43
          }
        },
        "106": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "93",
            "1": "103",
            "2": "104",
            "3": "105",
            "4": "94",
            "5": "95",
            "6": "96",
            "7": "97",
            "preimage0": "92",
            "map0image0": "93",
            "depth": "76"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "107": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "105",
            "map": "106"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 49
          }
        },
        "108": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "97",
            "map": "106"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "109": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "103",
            "map": "106"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "111": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "69"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 953,
              "y": 661
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "113": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "90",
            "p0": "86",
            "p1": "112"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true
        },
        "114": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 730
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "110",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "116": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "97",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "117": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 949,
              "y": 782
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "118": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "92",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "118",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "122": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "121",
            "p1": "120"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "123": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "119",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "123"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 38
          }
        },
        "125": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "124",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 44
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 956,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "118",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "130": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "122",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "131": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "130",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "119",
            "1": "123",
            "2": "124",
            "3": "125",
            "4": "120",
            "5": "121",
            "6": "122",
            "7": "130",
            "preimage0": "118",
            "map0image0": "119",
            "depth": "77"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "133": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "125",
            "map": "132"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 50
          }
        },
        "134": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "123",
            "map": "132"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "135": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "130",
            "map": "132"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "136": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "center": "128"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "138": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "137",
            "p1": "136"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "139": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "138",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "140": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "139",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "141": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "128",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "142": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "141"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 39
          }
        },
        "143": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "142",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 45
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "147",
            "center": "145"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "149": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "148",
            "p1": "147"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "149",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "151": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "145",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "152": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "151"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 40
          }
        },
        "153": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "152",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 46
          }
        },
        "154": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "145",
            "1": "151",
            "2": "152",
            "3": "153",
            "4": "147",
            "5": "148",
            "6": "149",
            "7": "150",
            "preimage0": "144",
            "map0image0": "145",
            "depth": "79"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "155": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "153",
            "map": "154"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 52
          }
        },
        "156": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "151",
            "map": "154"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "157": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "150",
            "map": "154"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "158": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "159": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "158",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "160": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "42"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "161": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "161",
            "center": "159"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "163": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "162",
            "p1": "161"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "163",
            "p0": "128",
            "p1": "129"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "165": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "128",
            "1": "141",
            "2": "142",
            "3": "143",
            "4": "136",
            "5": "129",
            "6": "130",
            "7": "137",
            "8": "138",
            "9": "139",
            "10": "150",
            "11": "164",
            "preimage0": "127",
            "map0image0": "128",
            "depth": "78"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "166": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "150",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "167": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "139",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "168": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "130",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "169": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "143",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 51
          }
        },
        "170": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "141",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "171": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "164",
            "map": "165"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "172": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "159",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "173": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "172"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 41
          }
        },
        "174": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "173",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 47
          }
        },
        "175": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "159",
            "1": "172",
            "2": "173",
            "3": "174",
            "4": "161",
            "5": "162",
            "6": "163",
            "7": "164",
            "preimage0": "158",
            "map0image0": "159",
            "depth": "80"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "176": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "174",
            "map": "175"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 53
          }
        },
        "177": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "172",
            "map": "175"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "178": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "164",
            "map": "175"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 951,
              "y": 903
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "180": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "150",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "181": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "42",
            "2": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 958
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(abs(@0)+1)*@1*2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "164",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true
        },
        "183": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 351,
              "y": 215
            }
          },
          "label": "A[1]",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "184": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "183",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "185": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "184",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "186": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "185"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 54
          }
        },
        "187": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "186",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 60
          }
        },
        "188": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "184",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "189": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "188",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "190": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "188",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "190",
            "p1": "189"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "192": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "193": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "189",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "distance": "111"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "195": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "184",
            "1": "185",
            "2": "186",
            "3": "187",
            "4": "188",
            "5": "189",
            "6": "190",
            "7": "191",
            "8": "192",
            "9": "193",
            "10": "194",
            "preimage0": "183",
            "map0image0": "184",
            "depth": "75"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "196": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "185",
            "map": "195"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "197": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "187",
            "map": "195"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 66
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "69"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "199": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "distance": "198"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "200": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "189",
            "distance": "198"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "201": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "198"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "202": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "192",
            "p1": "201"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "193",
            "p1": "200"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "204": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 707
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "205": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "183",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "206": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "206",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "208": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "207",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "209": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "208",
            "distance": "204"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "210": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "208",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "211": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "210",
            "p1": "209"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "212": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "207",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "213": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "212",
            "distance": "204"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "214": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "212",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "215": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "214",
            "p1": "213"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "216": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "208",
            "p1": "212"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "217": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "216",
            "distance": "204"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "216",
            "distance": "114"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "219": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "206",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "220": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "219"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 55
          }
        },
        "221": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "220",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 61
          }
        },
        "222": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "206",
            "1": "219",
            "2": "220",
            "3": "221",
            "4": "207",
            "5": "212",
            "6": "208",
            "7": "216",
            "8": "214",
            "9": "210",
            "10": "218",
            "preimage0": "205",
            "map0image0": "206",
            "depth": "76"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "223": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "219",
            "map": "222"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "224": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "221",
            "map": "222"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 67
          }
        },
        "225": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "226": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "225",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "228": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "227",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "229": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "227",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "230": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "228",
            "p1": "229"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "231": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "226",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "232": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "231"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 56
          }
        },
        "233": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "232",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 62
          }
        },
        "234": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "225",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "235": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "234",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "235",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "239": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "237",
            "p1": "238"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "240": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "235",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "241": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "240"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "navy",
            "layerOrder": 57
          }
        },
        "242": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "241",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 63
          }
        },
        "243": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "234",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "244": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "243",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "244",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "247": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "248": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "246",
            "p1": "247"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "249": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "244",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "250": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "249"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 58
          }
        },
        "251": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "250",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 64
          }
        },
        "252": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "243",
            "distance": "15"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "252",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "254": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "253",
            "distance": "37"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "255": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "42"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "256": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "42"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "257": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "255",
            "p1": "256"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "258": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "253",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "259": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "258"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 59
          }
        },
        "260": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "259",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 65
          }
        },
        "261": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "230",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "262": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "229",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "263": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "117"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "264": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "226",
            "1": "231",
            "2": "232",
            "3": "233",
            "4": "227",
            "5": "229",
            "6": "228",
            "7": "230",
            "8": "234",
            "9": "261",
            "10": "262",
            "11": "263",
            "preimage0": "225",
            "map0image0": "226",
            "depth": "77"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "265": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "231",
            "map": "264"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "266": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "233",
            "map": "264"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 68
          }
        },
        "267": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 755
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "268": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "229",
            "distance": "267"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "269": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "230",
            "distance": "267"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "270": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "267"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "271": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "262",
            "p1": "268"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "272": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "263",
            "p1": "270"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "273": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "274": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "275": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "239",
            "distance": "126"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "276": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "235",
            "1": "240",
            "2": "241",
            "3": "242",
            "4": "236",
            "5": "238",
            "6": "237",
            "7": "239",
            "8": "243",
            "9": "273",
            "10": "274",
            "11": "275",
            "preimage0": "234",
            "map0image0": "235",
            "depth": "78"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "277": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "240",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "242",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 69
          }
        },
        "279": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 803
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "280": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "279"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "281": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "279"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "282": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "239",
            "distance": "279"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "283": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "274",
            "p1": "281"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "284": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "273",
            "p1": "280"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "285": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "286": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "287": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "248",
            "distance": "179"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "288": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "244",
            "1": "249",
            "2": "250",
            "3": "251",
            "4": "245",
            "5": "247",
            "6": "246",
            "7": "248",
            "8": "252",
            "9": "285",
            "10": "286",
            "11": "287",
            "preimage0": "243",
            "map0image0": "244",
            "depth": "79"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "289": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "249",
            "map": "288"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "290": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "251",
            "map": "288"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 70
          }
        },
        "291": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 780,
              "y": 851
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "292": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "distance": "291"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "293": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "248",
            "distance": "291"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "294": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "291"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "295": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "285",
            "p1": "292"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "296": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "286",
            "p1": "294"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "297": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "257",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "298": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "299": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "255",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "300": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "253",
            "1": "258",
            "2": "259",
            "3": "260",
            "4": "254",
            "5": "256",
            "6": "255",
            "7": "257",
            "8": "297",
            "9": "298",
            "10": "299",
            "preimage0": "252",
            "map0image0": "253",
            "depth": "80"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "301": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "258",
            "map": "300"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "302": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "260",
            "map": "300"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 71
          }
        },
        "303": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "42",
            "1": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 783,
              "y": 893
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "304": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "257",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "305": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "306": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "255",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "307": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "305",
            "p1": "298"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "308": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "299",
            "p1": "306"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "309": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 32,
              "y": -1
            }
          },
          "textMFS": "<T'Dividing Two Integers Explorer: (-) Dividend (+) Divisor'>",
          "style": {
            "font-size": 22
          }
        },
        "310": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 40,
              "y": 624
            }
          },
          "textMFS": "<VL<T'Use the first model to explain why the quotient of a negative integer over a'><T'positive integer is negative.'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "text-decoration": "none"
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": -14,
          "left": 19,
          "bottom": 731,
          "right": 1047
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "navy"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 20,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 14
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5.633411664174321",
          "latentVisibility": true,
          "label": "quotient",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 127
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5 cm",
          "latentVisibility": true,
          "label": "rad",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 150
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "latentVisibility": true,
          "label": "horz shift",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 802,
              "y": 53
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-2.721701712088382",
          "latentVisibility": true,
          "label": "divisor",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(round(@0))",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "7": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "5",
            "1": "1"
          },
          "geom": {
            "loc": {
              "x": 374,
              "y": 62
            }
          },
          "label": "New Quotient",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Quotient"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -6,
              "upperParamBound": -2,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -6,
              "upperParamBound": -2,
              "discrete": false
            }
          ]
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 255
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*4",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 132
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.5 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 313
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 336
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 359
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 382
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 820,
              "y": 405
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 353,
              "y": 227
            }
          },
          "label": "G",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "16",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "17",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "18",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "distance": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "G'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -21,
              "labelOffsetY": -7
            },
            "radius": 2
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "20",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "21",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "23": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "21",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "24": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "23"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 15
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 41
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.1 cm",
          "latentVisibility": true,
          "label": "shift rad",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 91
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "22",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "22",
            "distance": "26"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "29": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "3",
            "2": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)*@1*2+2*abs(@0)*(@2-2*@1)/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "22",
            "distance": "26"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "36": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "32"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "31"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -2,
              "y": 184
            }
          },
          "label": "O",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -7
            },
            "radius": 2
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "40",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "41"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 18
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "distance": "9"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "40",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "O''",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 2
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 65
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.1 cm",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "50": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "48",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1026,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "48",
            "distance": "51"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "O'''",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 2
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "2",
            "2": "9",
            "3": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 243
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0*(abs(@1))+(2*(abs(@1)-1)*(@2-2*@0))/2+2*@3",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "50",
            "distance": "53"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "55": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "50",
            "p0": "48",
            "p1": "52"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "56": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "54",
            "p0": "48",
            "p1": "52"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "57": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "55",
            "distance": "53"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "57",
            "p1": "55"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "3",
            "1": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 282
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2*@0+2*(@1-@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "60": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "55",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "61": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 40,
              "y": 0
            }
          },
          "textMFS": "<T'Dividing Two Integers Explorer: (+) Dividend (-) Divisor'>",
          "style": {
            "font-size": 22
          }
        },
        "62": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 45,
              "y": 336
            }
          },
          "textMFS": "<VL<T'Neither model makes sense.  View this as the oppositive of a negative divided by a negative.'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "63": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 895,
              "y": 31
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "64": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "63"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 56,
              "y": 191
            }
          },
          "textMFS": "<VL<SW2<T'Partitive:'>><T'It doesn\\'t make sense to'><H<T'divide into '><?1xC0001<H<T'\u20133'>>><T' groups.'>><F1FxxFFFFFFFFx20x4x>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "66": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "57",
            "1": "58",
            "2": "60",
            "preimage0": "55",
            "map0image0": "60",
            "depth": "65"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "67": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "58",
            "map": "66"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2",
            "1": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 110
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "69": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "63",
            "1": "68"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 437,
              "y": 171
            }
          },
          "textMFS": "<VL<SW2<T'Quotative:'>><H<T'There are no groups of '><?1xC0001<H<T'\u20133'>>><T' in '><?1xC0002<H<T'18'>>><T'.'>><T'Unless you can consider borrowing'><T'groups.'><F1FxxFFFFFFFFx20x2x>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 212
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 802,
              "y": 190
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "71",
            "1": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "71",
            "1": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 806,
              "y": 272
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "74": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "24",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 16
          }
        },
        "75": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "23",
            "1": "24",
            "2": "74",
            "3": "22",
            "preimage0": "21",
            "map0image0": "22",
            "depth": "65"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "76": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "74",
            "map": "75"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 17
          }
        },
        "77": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "23",
            "map": "75"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "78": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "42",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 24
          }
        },
        "79": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "68",
            "1": "63"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 435,
              "y": 130
            }
          },
          "textMFS": "<H<T'Can you divide '><?1xC0001<H<T'18'>>><T' into groups of '><?1xC0002<H<T'\u20133'>>><T'?'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "80": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "68",
            "1": "63",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 546,
              "y": 39
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'18'>>><?1xC0002<H<T'\u20133'>>>><T' =  '><?1xC0003<H<T'\u20136'>>>><0><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "text-decoration": "none"
          }
        },
        "81": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "68",
            "1": "63",
            "2": "2"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 184,
              "y": 45
            }
          },
          "textMFS": "<VL<H</<?1xC0001<H<T'18'>>><?1xC0002<H<T'\u20133'>>>><T' =  '><?1xC0003<H<T'\u20136'>>>><0><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "text-decoration": "none"
          }
        },
        "82": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 703,
              "y": 628
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "83": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "82",
            "1": "14"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 516
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<six",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "83"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 396
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<six)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "85": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "84"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 590
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "47",
            "distance": "85"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "88": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "86",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "89": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "88"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 23
          }
        },
        "90": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "89",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 29
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "19",
            "distance": "85"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "92": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "91",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "93": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "92"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 4
          }
        },
        "94": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "93",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 9
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "91",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "distance": "26"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "distance": "26"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "97",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "98",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "100": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "99",
            "p1": "98"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "101": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "102": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "101",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "103": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "102"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "102",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "102",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "104",
            "p1": "99"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "107": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "82",
            "1": "13"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 494
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "108": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "109": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 547
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "distance": "109"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "111": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "110",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "112": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "110",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "113": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "112"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 22
          }
        },
        "114": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "113",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 28
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "18",
            "distance": "109"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "116": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "115",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "117": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "116"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 3
          }
        },
        "118": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "117",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 8
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "26"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "26"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "122": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "121",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "123": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "122",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "124": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "123",
            "p1": "122"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "126": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "127": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "122",
            "p1": "126"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "126",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "129": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "126",
            "p1": "128"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "130": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "128",
            "p1": "123"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "131": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "82",
            "1": "12"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 472
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "132": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "131"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "133": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "132"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 504
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45",
            "distance": "133"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "135": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "134",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "136": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "134",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "137": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "136"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 21
          }
        },
        "138": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "137",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 27
          }
        },
        "139": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "17",
            "distance": "133"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "140": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "139",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "141": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "140"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 2
          }
        },
        "142": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "141",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 7
          }
        },
        "143": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "139",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "143",
            "distance": "26"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "143",
            "distance": "26"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "146",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "148": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "147",
            "p1": "146"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "149": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "143",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "150": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "149",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "151": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "146",
            "p1": "150"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "152": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "150",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "153": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "150",
            "p1": "152"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "154": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "152",
            "p1": "147"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "155": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "82",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 450
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "156": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "155"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 330
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "157": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "156"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 461
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "158": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44",
            "distance": "157"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "159": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "158",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "160": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "158",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "161": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "160"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 20
          }
        },
        "162": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "161",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 26
          }
        },
        "163": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "16",
            "distance": "157"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "164": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "163",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "165": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "164"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 1
          }
        },
        "166": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "165",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 6
          }
        },
        "167": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "163",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "168": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "167",
            "distance": "26"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "169": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "167",
            "distance": "26"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "170": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "169",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "171": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "170",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "172": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "171",
            "p1": "170"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "173": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "167",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "174": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "173",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "175": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "170",
            "p1": "174"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "176": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "174",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "177": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "174",
            "p1": "176"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "178": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "176",
            "p1": "171"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "82",
            "1": "10"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 820,
              "y": 428
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "180": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "179"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 308
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "181": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "180"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 926,
              "y": 418
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "182": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "3",
            "3": "4",
            "4": "5",
            "5": "6",
            "6": "65",
            "7": "68",
            "8": "71",
            "9": "70",
            "10": "72",
            "11": "8",
            "12": "73",
            "13": "9",
            "14": "10",
            "15": "11",
            "16": "12",
            "17": "13",
            "18": "14",
            "19": "179",
            "20": "155",
            "21": "131",
            "22": "107",
            "23": "83",
            "24": "180",
            "25": "156",
            "26": "132",
            "27": "108",
            "28": "84",
            "29": "181",
            "30": "157",
            "31": "133",
            "32": "109",
            "33": "85",
            "34": "25",
            "35": "26",
            "36": "29",
            "37": "49",
            "38": "51",
            "39": "53",
            "40": "59"
          },
          "geom": {
            "loc": {
              "x": 1283,
              "y": 75
            }
          },
          "label": "Show Measurements",
          "style": {
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true
        },
        "183": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "184": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "183",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "185": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "183",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "186": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "185"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 19
          }
        },
        "187": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "186",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 25
          }
        },
        "188": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "40",
            "1": "183",
            "2": "158",
            "3": "134",
            "4": "110",
            "5": "86",
            "6": "41",
            "7": "185",
            "8": "160",
            "9": "136",
            "10": "112",
            "11": "88",
            "12": "42",
            "13": "186",
            "14": "161",
            "15": "137",
            "16": "113",
            "17": "89",
            "18": "78",
            "19": "187",
            "20": "162",
            "21": "138",
            "22": "114",
            "23": "90",
            "preimage0": "39",
            "preimage1": "43",
            "preimage2": "44",
            "preimage3": "45",
            "preimage4": "46",
            "preimage5": "47",
            "map0image0": "40",
            "map0image1": "183",
            "map0image2": "158",
            "map0image3": "134",
            "map0image4": "110",
            "map0image5": "86",
            "depth": "6"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "189": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "88",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "190": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "112",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "191": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "136",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "192": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "160",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "193": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "185",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "194": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "41",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "195": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "90",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 35
          }
        },
        "196": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "114",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 34
          }
        },
        "197": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "138",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 33
          }
        },
        "198": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "162",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 32
          }
        },
        "199": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "187",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 31
          }
        },
        "200": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "78",
            "map": "188"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 30
          }
        },
        "201": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "distance": "181"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "202": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "201",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "203": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "202"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 0
          }
        },
        "204": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "203",
            "blue": "73",
            "green": "8",
            "red": "72"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 5
          }
        },
        "205": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "201",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "206": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "201",
            "1": "163",
            "2": "139",
            "3": "115",
            "4": "91",
            "5": "202",
            "6": "164",
            "7": "140",
            "8": "116",
            "9": "92",
            "10": "203",
            "11": "165",
            "12": "141",
            "13": "117",
            "14": "93",
            "15": "204",
            "16": "166",
            "17": "142",
            "18": "118",
            "19": "94",
            "20": "205",
            "21": "167",
            "22": "143",
            "23": "119",
            "24": "95",
            "preimage0": "15",
            "preimage1": "16",
            "preimage2": "17",
            "preimage3": "18",
            "preimage4": "19",
            "map0image0": "201",
            "map0image1": "163",
            "map0image2": "139",
            "map0image3": "115",
            "map0image4": "91",
            "depth": "65"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "207": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "204",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 10
          }
        },
        "208": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "92",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "209": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "116",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "210": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "140",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "211": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "164",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "212": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "202",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "213": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "94",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 14
          }
        },
        "214": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "118",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "215": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "142",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "216": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "166",
            "map": "206"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 11
          }
        },
        "217": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "26"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "218": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "26"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "218",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "220": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "219",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "221": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "220",
            "p1": "219"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "205",
            "distance": "26"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "223": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "222",
            "p0": "22",
            "p1": "30"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "224": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "219",
            "p1": "223"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "225": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "223",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "226": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "223",
            "p1": "225"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "227": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "225",
            "p1": "220"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "228": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 252,
              "y": 651
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "229": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "228",
            "distance": "109"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "230": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "68",
            "1": "63"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 113,
              "y": 392
            }
          },
          "textMFS": "<VL<H<T'                                          '></<?1xC0001<H<T'18'>>><?1xC0002<H<T'\u20133'>>>><T'  = '></<H<T'-'><(<H<T'-'><?1xC0001<H<T'18'>>>>>><?1xC0002<H<T'\u20133'>>>><T' = - '><(</<H<T'-'><?1xC0001<H<T'18'>>>><?1xC0002<H<T'\u20133'>>>>>><0><H<?1xC0001<H<T'18'>>><T' can be written as -(-'><?1xC0001<H<T'18'>>><T') so we can view this quotient as the opposite'>><T'of a negative divided by a negative. A (-) divided by a (-)  gives a'><T'positive quotient therefore a (+) divided by a (-) is negative.'><F110xxFFFFFFFFx20x30x>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green"
          }
        },
        "231": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 358,
              "y": 117
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            },
            "radius": 2
          }
        },
        "232": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 672,
              "y": 117
            }
          },
          "label": "T",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            },
            "radius": 2
          }
        },
        "233": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 672,
              "y": 255
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "234": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 45,
              "y": 117
            }
          },
          "label": "U",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            },
            "radius": 2
          }
        },
        "235": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 45,
              "y": 255
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 412,
              "y": 117
            }
          },
          "label": "B[1]",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -5,
              "labelOffsetY": -24
            },
            "radius": 2
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 788,
              "y": 117
            }
          },
          "label": "C[1]",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            },
            "radius": 2
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 315
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "239": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 44,
              "y": 117
            }
          },
          "label": "D[1]",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            },
            "radius": 2
          }
        },
        "240": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 315
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "241": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "237",
            "p1": "238"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "242": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "239",
            "p1": "240"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "243": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "239",
            "p1": "237"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "244": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "238",
            "p1": "240"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "245": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "244"
          },
          "value": 0.5099601593625498,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "246": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "236",
            "p1": "245"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "247": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "68",
            "1": "63"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 57,
              "y": 129
            }
          },
          "textMFS": "<H<T'Can you divide '><?1xC0001<H<T'18'>>><T' into '><?1xC0002<H<T'\u20133'>>><T' groups?'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none"
          }
        },
        "248": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 648,
              "y": 2
            }
          },
          "label": "Previous Page",
          "style": {
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "3"
        }
      }
    }
  ]
};