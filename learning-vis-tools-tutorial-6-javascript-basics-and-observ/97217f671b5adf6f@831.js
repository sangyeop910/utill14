// https://observablehq.com/@bytedanny22/learning-vis-tools-tutorial-6-javascript-basics-and-observ@831
import define1 from "./7764a40fe6b83ca1@427.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Learning Vis Tools Tutorial 6: Javascript basics and Observable

We have used Python with Jupyter notebook in the [previous tutorials](https://bit.ly/vis-t05-nb), Observable is similar, but in Javascript. It provides an interactive programming environment, which is running on your browser entirely (in contrast, Jupyter notebook requires connecting to a remote server).

Javascript is the programming language for running any code of a web page. Web pages are ubiquitously accessible with any devices, it is the best way to deliver our visualizations.

All the materials of this tutorial are hosted on [this GitHub repository](https://github.com/leoyuholo/learning-vis-tools/tree/master/tutorial06)
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Javascript and Observable Basics

There is a minor difference between Observable and Jupyter notebook we need to be aware of. Unlike Jupyter notebook running cell by cell in sequential order, Observable blurs the order of code execution. Instead, it is like a spreadsheet (i.e. MS Excel, Google Sheets, etc.), a value update in a cell will automatically update those cells depend on it.

Let's see an example!
`
)});
  main.variable(observer("radius")).define("radius", function(){return(
2
)});
  main.variable(observer("area")).define("area", ["radius"], function(radius){return(
Math.PI * Math.pow(radius, 2)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`If you wonder how this is being implemented, you can read more about ["How Observable Runs"](https://observablehq.com/@observablehq/how-observable-runs)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Expressions and Blocks

A cell with single statement is an *expression*, and a cell with multiple statements need to be encapsulated with \`{}\` curly braces, and it is a code *block*.

Unlike an expression, while declaring a variable inside a block, it is required to use one of the variable declaration keywords, \`var\`, \`let\` or \`const\`. For simplicity, we will stick with \`let\`.
`
)});
  main.variable(observer()).define(function()
{
  let length = 5
  return length * length
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### Variables and Data Types

- Number, e.g. 4462
- String, e.g. 'Data Visualization'
- Boolean, e.g. true, false
- Array, e.g. ['COMP4462', 'Data Visualization']
- Object, e.g. { code: 'COMP4462', name: 'Data Visualization' }
- \`undefined\` is the \`null\` of Javascript (while the keyword \`null\` also exists in Javascript, but is very rarely been seen or used)
- Functions are the first class citizens of Javascript, a function can be assigned to a variable and passing into another function as arguments, we will see more about functions in a later section
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Array`
)});
  main.variable(observer("visualChannels")).define("visualChannels", function(){return(
['position', 'length', 'angle', 'area', 'color', 'curvature']
)});
  main.variable(observer()).define(["visualChannels"], function(visualChannels){return(
visualChannels.length
)});
  main.variable(observer()).define(["visualChannels"], function(visualChannels){return(
'Most effective channel: ' + visualChannels[0]
)});
  main.variable(observer()).define(function()
{
  let rgb = [64, 224, 208]
  let [red, green, blue] = rgb
  
  return red
}
);
  main.variable(observer("moreVisualChannels")).define("moreVisualChannels", ["visualChannels"], function(visualChannels){return(
visualChannels.concat(['color hue', 'color saturation', 'color luminance'])
)});
  main.variable(observer()).define(["moreVisualChannels"], function(moreVisualChannels){return(
moreVisualChannels.sort()
)});
  main.variable(observer()).define(function(){return(
['red', 'green', 'blue'].concat(['cyan','magenta','yellow','black']).sort()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`See the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for more methods on array`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Object

In Observable, \`{}\` is also used for encapsulating a code block, the normal object declaration requires a pair of additional parentheses.
`
)});
  main.variable(observer("typesOfData")).define("typesOfData", function(){return(
{
  ordered: [1, 2, 3, 4, 5],
  categorical: ['strawberry', 'apple', 'orange']
}
)});
  main.variable(observer()).define(["typesOfData"], function(typesOfData){return(
typesOfData.categorical
)});
  main.variable(observer()).define(["typesOfData"], function(typesOfData){return(
typesOfData['categorical']
)});
  main.variable(observer()).define(["md"], function(md){return(
md`If the object declaration is in a block, parentheses are not required.`
)});
  main.variable(observer()).define(function()
{
  let typesOfData = {
    ordered: [1, 2, 3, 4, 5],
    categorical: ['strawberry', 'apple', 'orange']
  }
  
  typesOfData.categorical = ['strawberry', 'apple', 'orange', 'banana']
  
  return typesOfData.categorical
}
);
  main.variable(observer()).define(["typesOfData"], function(typesOfData){return(
typesOfData.ordered = [1, 10, 100, 1000]
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Logic flow and loop`
)});
  main.variable(observer()).define(["rgb2hex"], function(rgb2hex)
{
  let color = 'cyan'
  let hex = ''

  if (color === 'cyan') {
    hex = rgb2hex(0, 255, 255)
  } else if (color === 'magenta') {
    hex = rgb2hex(255, 0, 255)
  } else if (color === 'yellow') {
    hex = rgb2hex(255, 255, 0)
  } else {
    hex = rgb2hex(255, 255, 255)
  }
  
  return hex
}
);
  main.variable(observer()).define(["rgb2hex"], function(rgb2hex)
{
  let rgb = ['red', 'green', 'blue']
  let rgbValues = [[255, 0, 0], [0, 255, 0], [0, 0, 255]]
  let rgbHex = []
  
  for (let i = 0; i < rgb.length; i++) {
    let [r, g, b] = rgbValues[i]
    // append an item to the array
    rgbHex.push(rgb2hex(r, g, b))
  }
  
  return rgbHex
}
);
  main.variable(observer()).define(["rgb2hex"], function(rgb2hex)
{
  let color = ['cyan', 'magenta', 'yellow', 'black']
  let hex = []

  for (let i = 0; i < color.length; i++) {
    if (color[i] === 'cyan') {
      hex.push(rgb2hex(0, 255, 255)) 
    } else if (color[i] === 'magenta') {
      hex.push(rgb2hex(255, 0, 255))
    } else if (color[i] === 'yellow') {
      hex.push(rgb2hex(255, 255, 0))
    } else {
      hex.push(rgb2hex(255, 255, 255))
    }
  }
  
  return hex
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### Function

Functions can be declared in two ways, one with the keyword \`function\`, another is using arrow \`() => {}\`
`
)});
  main.variable(observer("int2hex")).define("int2hex", function(){return(
function int2hex (n) {
  return n >= 16 ? n.toString(16) : '0' + n.toString(16)
}
)});
  main.variable(observer()).define(["int2hex"], function(int2hex){return(
int2hex(255)
)});
  main.variable(observer("rgb2hex")).define("rgb2hex", ["int2hex"], function(int2hex){return(
(r = 0, g = 0, b = 0) => {
  return '#' + int2hex(r) + int2hex(g) + int2hex(b)
}
)});
  main.variable(observer()).define(["rgb2hex"], function(rgb2hex){return(
rgb2hex(64, 224, 208)
)});
  main.variable(observer("rgbColor2hex")).define("rgbColor2hex", ["rgb2hex"], function(rgb2hex){return(
function rgbColor2hex (color) {
  if (color === 'red') {
    return rgb2hex(255, 0, 0)
  } else if (color === 'green') {
    return rgb2hex(0, 255, 0)
  } else {
    return rgb2hex(0, 0, 255)
  }
}
)});
  main.variable(observer()).define(["rgbColor2hex"], function(rgbColor2hex){return(
rgbColor2hex('red')
)});
  main.variable(observer("cmykColor2hex2")).define("cmykColor2hex2", ["rgb2hex"], function(rgb2hex){return(
function cmykColor2hex2 (color) {
   if (color === 'cyan') {
     return rgb2hex(0, 255, 255) 
   } else if (color === 'magenta') {
     return rgb2hex(255, 0, 255)
   } else if (color === 'yellow') {
     return rgb2hex(255, 255, 0)
   } else {
      return rgb2hex(255, 255, 255)
   }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Callback

Callback is an important concept in Javascript. Function is a first class citizen in Javascript, a function can be passed into another function as argument. Many library APIs are built around this language feature.
`
)});
  main.variable(observer()).define(["rgbColor2hex"], function(rgbColor2hex){return(
['red', 'green', 'blue'].map(rgbColor2hex)
)});
  main.variable(observer()).define(["cmykColor2hex2"], function(cmykColor2hex2){return(
['cyan', 'magenta', 'yellow', 'black'].map(cmykColor2hex2)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Asynchronuous

Asynchronous is known as one of the barriers for picking up Javascript. For some blocking tasks, like retrieving a files from a remote server, or waiting for a mouse click, it is better to "work on something else" while waiting. Such an utilization problem is notorious in computer science as concurrency, in other languages, it is commonly referred as multi-threading, while in Javascript, it is called "asynchronuous".

The best way to understand asynchronuous in Javascript is to watch [Philip Roberts' presentation on JSConf](https://youtu.be/8aGhZQkoFbQ) and play with the [visualization](http://latentflip.com/loupe) he made to explain event loop in Javscript.

Simply put, Javascript uses callbacks to tell the time consuming tasks to "when you finish, call me back!" The time consuming function takes in a function in one of its arguments (usually the last one). When it is done, like retrieved the data from a remote server, it calls the callback function with the data it retrieved.

Let's see a mock example!
`
)});
  main.variable(observer("getDataFromServer")).define("getDataFromServer", ["rgbColor2hex"], function(rgbColor2hex){return(
function getDataFromServer (color, callback) {
  setTimeout(function () {
    callback(rgbColor2hex(color))
  }, 5000)
}
)});
  main.define("initial colorInHex", function(){return(
'Waiting for server...'
)});
  main.variable(observer("mutable colorInHex")).define("mutable colorInHex", ["Mutable", "initial colorInHex"], (M, _) => new M(_));
  main.variable(observer("colorInHex")).define("colorInHex", ["mutable colorInHex"], _ => _.generator);
  main.variable(observer()).define(["md"], function(md){return(
md`\`mutable\` is a keyword in Observable, here is the [notebook describes its details](https://observablehq.com/@observablehq/introduction-to-mutable-state).`
)});
  main.variable(observer()).define(["getDataFromServer","mutable colorInHex"], function(getDataFromServer,$0){return(
getDataFromServer('red', function (hex) {
  $0.value = `The hex code of "Red" is ${hex}. Run the cell below to try again!`
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`You may see other common patterns in Javascript for handling asynchronous, besides callback, [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is the most common one, [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) is recently introduced and becoming the norm for handling asynchronous in Javascript.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Datetime

Date and time are very common in data. Javascript has built-in functionality for handling date and time without importing any library.
`
)});
  main.variable(observer()).define(function(){return(
Date.now()
)});
  main.variable(observer()).define(function(){return(
new Date(Date.now())
)});
  main.variable(observer()).define(function()
{
  let now = new Date(Date.now())
  
  // A string encapsulated with backtick "`" is a template string, it will 
  // evaluate the expression inside the placeholder "${}"
  return `Year: ${now.getFullYear()} Month: ${now.getMonth() + 1} Day: ${now.getDate()}`
}
);
  main.variable(observer()).define(function(){return(
new Date(2019, 4, 3)
)});
  main.variable(observer()).define(function()
{
  let oldDate = new Date(2019, 4, 3)
  
  oldDate.setDate(oldDate.getDate() + 2)
  
  return oldDate
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
See the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for more methods on Date.

We will later look into the moment.js library, which provides a rich set of operations on date and time.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Vega-Lite

We have used Altair in the [previous tutorials](https://github.com/leoyuholo/learning-vis-tools/tree/master/tutorial05) about Python, Jupyter and Pandas. Now, we are going to use Vega-Lite, the library behind Altair. We will see that the visualization built by Vega-Lite is exactly the same visualization built by Altair.

Vega-Lite is a specification based visualization tool, it takes an input specification in visualization language (i.e. marks and channels) and convert it into a visualization.

Let's plot some graphs!
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Import required modules

Importing libraries in Observable is easy, we are going to use:

- vega-embed: an adapted version of Vega-Lite for environment like Jupyter notebooks and Observable notebooks
- [vega-lite-api](https://observablehq.com/@vega/vega-lite-api): a Javascript library wraps Vega-Lite into a nicer API, it is experimental and worth a try
- d3: the library behind Vega-Lite, we only use it for loading data this time, but we will learn about it in later tutorials
`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@5')
)});
  main.variable(observer("vegaEmbed")).define("vegaEmbed", ["require"], function(require){return(
require("vega-embed@6")
)});
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`### Load data

d3 makes loading data easy, it supports parsers for many formats, csv, xml, etc. See [documentation](https://github.com/d3/d3-fetch) for all the supported formats.

Since our dataset is already hosting on GitHub, we do not need to download it and upload to Observable. In fact, our browser still download it from GitHub, but that's not our concern.

The notebook ["Introduction to Data"](https://observablehq.com/@observablehq/introduction-to-data) gives more details about loading data into Observable notebooks.

**Credits**: Data source from [Kaggle Dataset "The Complete Pokemon Dataset" by Rounak Banik](https://www.kaggle.com/rounakbanik/pokemon) with scikit-learn t-sne implementation, see [the notebook of tutorial 4](https://bit.ly/vis-t04-nb).
`
)});
  main.variable(observer("pokemonBaseStats")).define("pokemonBaseStats", ["d3"], function(d3){return(
d3.csv('https://raw.githubusercontent.com/leoyuholo/learning-vis-tools/master/tutorial06/lab6/pokemon_tsne.csv')
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Plot

We will try to make the same plot we have in the [previous tutorial](http://bit.ly/vis-t04-nb). It is exactly the same we have made in the Jupyter notebook with Python, but in Javascript this time!
`
)});
  main.variable(observer()).define(["vl","pokemonBaseStats"], function(vl,pokemonBaseStats){return(
vl.markPoint()
  .title('Pokemon base stats t-sne')
  .width(500)
  .height(400)
  .data(pokemonBaseStats)
  .encode(
    vl.x().fieldQ('x'),
    vl.y().fieldQ('y'),
    vl.color().fieldN('is_legendary'),
    vl.tooltip(['name', 'hp', 'speed', 'attack', 'defense', 'sp_attack', 'sp_defense', 'is_legendary'])
  ).render()
)});
  main.variable(observer()).define(["vl","pokemonBaseStats"], function(vl,pokemonBaseStats){return(
vl.markPoint()
  .title('Pokemon base stats MDS')
  .width(500)
  .height(400)
  .data(pokemonBaseStats)
  .encode(
    vl.x().fieldQ('x'),
    vl.y().fieldQ('y'),
    vl.color().fieldN('is_legendary'),
    vl.tooltip(['name', 'hp', 'speed', 'attack', 'defense', 'sp_attack', 'sp_defense', 'is_legendary'])
  ).render()
)});
  main.variable(observer()).define(["vegaEmbed","pokemonBaseStats"], function(vegaEmbed,pokemonBaseStats){return(
vegaEmbed({
  data: { values: pokemonBaseStats },
  width: 500,
  height: 400,
  title: 'Pokemon base stats t-sne',
  mark: 'point',
  encoding: {
    x: { field: 'x' },
    y: { field: 'y' },
    color: { field: 'is_legendary' },
    tooltip: [
      { field: 'name' },
      { field: 'hp' },
      { field: 'speed' },
      { field: 'attack' },
      { field: 'defense' },
      { field: 'sp_attack' },
      { field: 'sp_defense' },
      { field: 'is_legendary' }
    ]
  }
})
)});
  main.variable(observer()).define(["vegaEmbed","pokemonBaseStats"], function(vegaEmbed,pokemonBaseStats){return(
vegaEmbed({
  data: { values: pokemonBaseStats },
  width: 500,
  height: 400,
  title: 'Pokemon base stats t-sne',
  mark: 'point',
  encoding: {
    x: { field: 'x' },
    y: { field: 'y' },
    color: { field: 'is_legendary' },
    tooltip: [
      { field: 'name' },
      { field: 'hp' },
      { field: 'speed' },
      { field: 'attack' },
      { field: 'defense' },
      { field: 'sp_attack' },
      { field: 'sp_defense' },
      { field: 'is_legendary' }
    ]
  }
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`More examples can be found in the [Vega Notebook Collection](https://observablehq.com/@vega).
`
)});
  return main;
}
