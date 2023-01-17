window.addEventListener('DOMContentLoaded', async function () {
    // get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');
    // load the 3D engine
    var engine = new BABYLON.Engine(canvas, true);
    // createScene function that creates and return the scene
    var createScene = async function () {
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        var camera = new BABYLON.FlyCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        // target the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        // attach the camera to the canvas
        camera.attachControl(canvas, false);
        // create a basic light, aiming 0,1,0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        // create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation 
        // var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
        // // move the sphere upward 1/2 of its height
        // sphere.position.y = 1;
        // create a built-in "ground" shape;
        var ground = BABYLON.Mesh.CreateGround('ground1', 50, 50, 2, scene);
        const box = BABYLON.MeshBuilder.CreateBox("box", {width:1, height:5});
        box.position.y = 5;

        // Add XR support
        const xr = scene.createDefaultXRExperienceAsync({
            uiOptions:{
                //sessionMode: 'immersive-vr'
                sessionMode: 'immersive-ar'
            }
        });

        // const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
        // var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Click Me");
        // button1.width = "150px"
        // button1.height = "40px";
        // button1.color = "white";
        // button1.cornerRadius = 20;
        // button1.background = "green";
        // button1.onPointerUpObservable.add(function() {
        //     alert("you did it!");
        // });
        // advancedTexture.addControl(button1);    
        
        // return the created scene
        return scene;
    }

    // call the createScene function
    var scene = await createScene();

    // run the render loop
    engine.runRenderLoop(function () {
        scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function () {
        engine.resize();
    });
});