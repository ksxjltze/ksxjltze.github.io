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

Iconoclasm is a 3D hack-n-slash action game.<br>
It was developed for the Software Engineering Project 4 and Software Engineering Project 5 modules at the DigiPen Institute of Technology Singapore.

## Software Engineering Project 4 (GAM300):
This module focuses on the development of the custom game engine, named EngineEngine, which is written from scratch in C++ with the help of third party libraries and APIs.
My role, as a programmer in a team of 10 students, was largely to build serialization systems and the asset pipeline, while playing an assisting role in the development of the graphics engine.

### Libraries:
- GLFW: Used for creating and managing windows, as well as for creating the OpenGL rendering context.
- EnTT: Provides a robust Entity Component System (ECS), for managing game entities and components.
- RapidJson: Used to simplify serialization of engine data into JSON files.
- Fmod: Audio Engine.
- dearImGUI: Used to build the engine's GUI.
- Mono: C# .NET Framework for gameplay scripting.

### Asset Pipeline
The game engine supports importing of various assets such as 3D models (.fbx, .obj), textures (.png, .dds) and audio files.
Assets that are loaded into the game engine are registered and compiled into a custom binary format.
This format allows the engine to quickly load and immediately use resources without further processing.

#### Asset Compiler
When an asset is imported into the engine, a resource descriptor is generated and the the asset is compiled using an external tool, the Asset Compiler.
The external tool is aware of the engine's internal resource formats, achieved using shared header files during code compilation. 
One advantage of the asset compiler being an executable separate from the engine is that it can easily be parallelized, with multiple processes compiling assets concurrently.

### Reflection
Runtime reflection, or code introspection, is an incredibly useful tool for manipulating and displaying component data in a modular fashion.
The EnTT library provides a lightweight runtime reflection system that is non-intrusive and macro-free, which is heavily used in the game engine's development.

### Serialization
TBC

### Material System

## Software Engineering Project 5 (GAM350):
This module, which takes place a trimester after Software Engineer Project 4, focuses on developing a video game using the custom game engine that was built in the previous module.
The gameplay of Iconoclasm: Fall of the False God, is largely developed by a team of 3 designers, with the rest of the programmer team providing technical support for the engine.

### Particle System
TBC