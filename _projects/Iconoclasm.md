---
layout: project
title: "Iconoclasm: Fall of the False God"
permalink: "projects/iconoclasm/"
game-engine: "EngineEngine"
start-date: 2022-09-01
end-date: 2023-03-01
school-project: True
school: DigiPen Institute of Technology Singapore
module: Software Engineering Project 5-6
description: 3D hack-n-slash action game.
---

Iconoclasm is a 3D hack-n-slash action game.<br>
It was developed for the Software Engineering Project 5 and Software Engineering Project 6 modules at the DigiPen Institute of Technology Singapore.

<img src="/images/iconoclasm-logo.jpeg" width="100%" height="100%">

## Software Engineering Project 5 (CSD3400/GAM300):
This module focuses on the development of the custom game engine, named EngineEngine, which is written from scratch in C++ with the help of third party libraries and APIs.
My role, as a programmer in a team of 10 students, was largely to build serialization systems and the asset pipeline, while playing an assisting role in the development of the graphics engine.

### Engine Showcase
<iframe width="100%" height="450" src="https://www.youtube.com/embed/90ZM4lTItI8" title="GodKillers - EngineEngine Showcase" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Libraries:
- GLFW: Used for creating and managing windows, as well as for creating the OpenGL rendering context.
- EnTT: Provides a robust Entity Component System (ECS), for managing game entities and components.
- RapidJson: Used to simplify serialization of engine data into JSON files.
- Fmod: Audio Engine.
- dearImGUI: Used to build the engine's GUI.
- Mono: C# .NET Framework for gameplay scripting.

## Technology
The below technical features were developed by myself, with contributions and suggestions from other teammates.
Heavy use of the C++ Standard Template Library (STL) was used to speed up development.

### Asset Pipeline
The game engine supports importing of various assets such as 3D models (.fbx, .obj), textures (.png, .dds) and audio files.
Assets that are loaded into the game engine are registered and compiled into a custom binary format.
This format allows the engine to quickly load and immediately use resources without further processing.

#### Loading Thread
When the engine is started, all files in the assets directory are processed on a separate thread.
This makes it easy to create a loading screen, using synchronization to concurrently update graphics and process files.

#### Asset Compiler
When an asset is imported into the engine, a resource descriptor is generated and the the asset is compiled using an external tool, the Asset Compiler.
The external tool is aware of the engine's internal resource formats, achieved using shared header files during code compilation. 
One advantage of the asset compiler being an executable separate from the engine is that it can easily be parallelized, with multiple processes compiling assets concurrently.

#### Resource Descriptor
Every asset file has an associated descriptor which is generated during engine startup. The descriptor contains important information pertaining to how the asset should be compiled, processed, and used during runtime. The descriptor is stored as a plaintext file in a custom format for rapid prototyping and easy modification.

#### Descriptor Example
<img src="/images/iconoclasm/iconoclasm-descriptor.png">
<br><br>
Regular 3D mesh files, animations, and skinned meshes can all share the same file extension (.fbx). Thus, the descriptor is important for the engine to differentiate between the types. Additionally, customizable parameters such as whether to flip normals, normalize vertices, etc. are also stored in the descriptor as key-value pairs and can be updated through the engine's editor.<br><br>
In hindsight, such information could have been represented using an internal shared format or base class for each type of model and parameters directly provided to the asset compiler during process invocation.

### Reflection
Runtime reflection, or code introspection, is an incredibly useful tool for manipulating and displaying component data in a modular fashion.
The EnTT library provides a lightweight runtime reflection system that is non-intrusive and macro-free, which is heavily used in the game engine's development.

### Serialization
Scene files and entity prefabs/archetypes are stored as JSON files on the disk. Storing data in JSON allows ease of modification of entity attributes and components, enabling rapid prototyping as well as convenient merging and copying of entity data. The rapidjson library works incredibly well for this purpose, with the majority of the serialization system built around its use.

### Material System
TBC

## Software Engineering Project 6 (CSD3450/GAM350):
This module, which takes place a trimester after Software Engineer Project 4, focuses on developing a video game using the custom game engine that was built in the previous module.
The gameplay of Iconoclasm: Fall of the False God, is largely developed by a team of 3 designers, with the rest of the programmer team providing technical support for the engine.

<img src="/images/iconoclasm/iconoclasm-title.png" width="100%" height="100%">

### Gameplay Showcase
<iframe width="100%" height="450" src="https://www.youtube.com/embed/BCFzNFtZF_E" title="Iconoclasm GameplayVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Particle System
TBC