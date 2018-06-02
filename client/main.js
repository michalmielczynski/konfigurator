import { Template } from 'meteor/templating';
import './main.html';

Template.konfigurator.onCreated(function helloOnCreated() {
    const app = new PIXI.Application({
        width: window.innerWidth,         // default: 800
        height: window.innerHeight,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
    }
    );

    app.renderer.backgroundColor = 0x061639;
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // create a new Sprite from an image path
    const bunny = PIXI.Sprite.fromImage('images/bunny.png');

    // center the sprite's anchor point
    bunny.anchor.set(0.5);

    // move the sprite to the center of the screen
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    bunny.scale.set(0.2, 0.2);

    app.stage.addChild(bunny);

    // Listen for animate update
    app.ticker.add(function (delta) {
        // let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent transformation
        bunny.rotation += 0.01 * delta;

        // let's walk the bunny around :)
        bunny.x = (bunny.x + delta) % app.screen.width;
    });

    document.body.appendChild(app.view);
});
