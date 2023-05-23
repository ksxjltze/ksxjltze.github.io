---
layout: project
title: "Iconoclasm: Fall of the False God"
permalink: "projects/iconoclasm/"
start-date: 2022-09-01
end-date: 2023-03-01
school-project: True
school: DigiPen Institute of Technology Singapore
module: Software Engineering Project 4-5
---

Copy pasted from LinkedIn (for now):<br>
3D action game heavily inspired by Nier Automata.
Developing custom 3D Engine (EngineEngine).

Role: Serialization and VFX
Implemented JSON serialization to allow game scenes to be saved to disk. Runtime reflection support was integrated using external libraries (entt) to ease the development of serialization systems, allowing code to query for the members and types of components. A registration framework allows developers to easily register and reflect types and members for serialization in code. Prefabs allow designers to easily create templates for game objects and reuse them within scenes, greatly reducing time spent designing game objects and allowing them to be dynamically spawned in through runtime scripts.

Resource management and compilation systems were developed for the implementation of an asset importing pipeline, allowing users of the engine to easily use external files such as 3D meshes (.fbx, .obj) and textures (.dds, .png, etc.) to design game scenes. Assets are compiled into a custom binary format to speed up loading times and decouple serialization code from specific file formats

Particle systems are implemented as a component that can be attached to game objects, using the transform to place the emitter within the scene. OpenGL instancing is used to greatly improve the performance of particle rendering, allowing designers to freely create particle systems without worry of significant FPS drops. The particle system component is heavily inspired by Unity's modular particle system design, splitting features into easily understood modules that can be customized to the designer's liking.

Simple post processing shaders allow designers to easily tweak the brightness and contrast of the final rendered image, with additional special effects such Fog to improve the visuals of the scene.