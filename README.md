# cracked-pepper
Threejs Pepper's Ghost illusion effect renderer

## Wait... what is a Pepper's Ghost?
Pepper's Ghost is an incredibly old optical illusion used to cause objects to appear where they are not. In this case we can make it look like there is a world floating inside a reflective, but transparent prism. Heres a link to this being done with a CD case and an iPhone.
[enjoy youtube time](https://www.youtube.com/watch?v=9t0cOYvOy4M)

## What is Cracked Pepper then?
Well, there are plenty of videos online that let you capitalize on this illusion, but there isn't a super easy way other than borrowing the [Three.js example's code](http://threejs.org/examples/webgl_effects_peppersghost.html), which for my taste did not offer enough. I want to make this easy to use so people can take their games and experiences into reality. Sappy mission aside, these holograms are cool and some people freak out if you can give them a way to interact with them.

## How it works
Currently it works similarly to the plugin used in the Three.js example.

Require the library
```javascript
var CrackedPepper = require('cracked-pepper');
```

Pass it a THREE.WebGLRenderer instance on create
```javascript
var pepperEffect = new CrackedPepper(new THREE.WebGLRenderer());
```

Pass in the scene you want to project and have it render
```javascript
pepperEffect.render(scene);
```

Set the size properly
```javascript
pepperEffect.setSize(width, height);
```

Set the distance that the cameras are from the center of your scene
```javascript
pepperEffect.viewDistance = 100
```

## [Check out these sweet examples](./examples)

## WARNING
This module is built to work with require, it does not support being included directly to an html page. If you want to work this way you must clone the repo or use `npm install`.
Then you must cd into the directory and run `npm run build-upm`. The browser safe module will appear at build/CrackedPepper.js. From there you may access the effect through the `CrackedPepper` variable.
