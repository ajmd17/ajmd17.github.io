var PORTFOLIO_DATA = {
  articles: [],
  projects: [
    {
      title: 'Hyperion Game Engine',
      featured: true,
      stat: '550+ stars on GitHub',
      description:
          'A full-featured, open-source game engine in C++ that I\'ve been building since 2016, focused on high-fidelity rendering that doesn\'t need high-end hardware.',
      bullets: [
        '<b>Glimmer:</b> real-time global illumination and reflections without RT hardware, using software tracing and precomputed radiance transfer so sun and sky changes relight instantly',
        '<b>DirectX 12, Vulkan and WebGPU</b> backends; the engine also runs in the browser through WebAssembly',
        'Editor for Windows and macOS with multiplayer play-in-editor, terrain and world-building tools, and an offline lightmapper',
        'Server-authoritative networking with reflection-driven replication and client-side prediction',
        'Write games in C# or C++; reflection and code generation provide serialization, editor inspectors, replication and script bindings'
      ],
      tags: ['C++', 'C#', 'DirectX 12', 'Vulkan', 'WebGPU'],
      img: [
        {
          href: 'hyp-glimmer-terrain.jpg',
          description: 'Terrain, procedural sky and vegetation lit by Glimmer, Hyperion\'s real-time global illumination.'
        },
        {
          href: 'hyp-glimmer-emissives.jpg',
          description: 'Glimmer bouncing light from emissive objects around the Sponza courtyard, with no ray tracing hardware.'
        },
        {
          href: 'hyp-editor.png',
          description: 'The Hyperion editor with the Sponza Atrium scene.'
        },
        {
          href: 'hyp-multiplayer-editor.jpg',
          description: 'Multiplayer play-in-editor: the editor running as a client connected to a server.'
        }
      ],
      videos: [
        // {
        //   href: 'hyp-ddgi.mp4',
        //   description:
        //       'This video shows the dynamic diffuse global illumination (DDGI) technique as implemented by myself in my game engine, Hyperion.<br><br>DDGI is a modern global illumination technique which uses hardware ray tracing to compute indirect diffuse lighting.<br><br>Scene: Sponza Atrium'
        // },
        // {
        //   href: 'hyp-particles.mp4',
        //   description:
        //       'This video shows the GPU particle system in Hyperion. Particles are simulated on the GPU using compute shaders.<br><br>Scene: Sponza Atrium'
        // }
      ],
      links: [
        {name: 'Website', href: 'https://hyperionengine.dev'},
        {name: 'Play the sample game in your browser', href: 'https://hyperionengine.dev/GlideSample'},
        {name: 'GitHub', href: 'https://github.com/HyperionGameTech/HyperionEngine'}
      ]
    },
    {
      title: 'Strata: Programming Language',
      titleLink: false,
      featured: true,
      tags: ['C', 'LLVM'],
      description:
          'A statically typed language for game engines, with a compiler written in C11 on top of LLVM. SIMD vector types, optionals, owned boxes and <code>rc&lt;T&gt;</code>, destructors, <code>defer</code>, and C interop built for binding engine APIs',
      code: `struct Particle
{
    float4 pos;
    Particle? next;   // optional: may be empty
};

^Particle head = Particle { .pos = float4(1.0) };   // owned, freed at scope end
Particle? cur = head;
while (cur?)
{
    cur = cur.next;
}`,
      links: [
        {name: 'Strata (GitHub)', href: 'https://github.com/StrataLanguage/stratac'}
      ]
    },
    {
      title: 'rna: Rendering Research Sandbox',
      featured: true,
      tags: ['Rust', 'Vulkan', 'Lua'],
      description:
          'Where I prototype rendering techniques and implement papers as well as experiment with new ideas. A Rust and Vulkan renderer driven by hot-reloaded Lua scripts.',
      bullets: [
        '<b>Diffuse GI:</b> PRT probes, surfels, light propagation volumes, radiance cascades, SDF GI',
        '<b>Reflections:</b> SDF tracing, voxel cone tracing, and "bricks", a sparse acceleration structure for software ray tracing'
      ],
      img: [
        {
          href: 'rna-bricks.jpg',
          description: 'Reflection techniques compared in rna: image-based lighting, naive ray tracing, SDF tracing, and bricks.'
        }
      ],
      links: [
        {name: 'Read: Bricks', href: 'blog/p/bricks-experimental-acceleration-structure.html'}
      ]
    },
    {
      title: 'Arbor: Procedural Foliage, Trees, Rocks, etc. Generator',
      featured: true,
      tags: ['Rust', 'OpenGL', 'WebAssembly'],
      description:
          'A procedural generator for trees, shrubs, vines, ground cover and rocks, aiming for SpeedTree-quality models of 7k-20k triangles. It exports wind data as a glTF extension, and includes a PBR viewer with live parameter editing that also runs in the browser.',
      img: [
        {
          href: 'arbor.jpg',
          description: 'The Arbor viewer, editing a fir tree with live parameters, image-based lighting and wind.'
        }
      ],
      links: [
        {name: 'Try it in your browser', href: 'https://ajmd.dev/arbor/'},
        {name: 'GitHub', href: 'https://github.com/ajmd17/arbor'}
      ]
    },
    /*{
      title: 'BidSquid Online Marketplace',
      tags: ['Node.js', 'TypeScript', 'React', 'MongoDB'],
      description: 'Online marketplace to connect buyers and sellers of
    agricultural goods. Includes a backend system for managing inventory and a
    procurement system. Read more:
    https://entrevestor.com/home/entry/hachey-traded-wall-street-for-agtech',
      img: ['bidsquid_1.jpg', 'bidsquid_2.jpg', 'bidsquid_3.jpg'],
      links: [{
        name: 'Visit Site',
        main: true,
        href: 'https://web.archive.org/web/20180316132231/https://bidsquid.com/'
      }]
    }, {
      title: 'Apex3D Game Engine',
      tags: ['Game Engine', 'C++', 'OpenGL'],
      description: 'OpenGL game engine written in C++. One of my earlier game
    engines.', img: ['scout_trooper.PNG'], links: [{ name: 'GitHub', href:
    'http://github.com/ajmd17/apex-engine'
      }]
    },{
      title: 'TangOS',
      description: 'A small operating system written in C because why not?',

      img: ['tangos.png'],
      links: [{
          name: 'GitHub',
          href: 'https://github.com/ajmd17/TangOS'
      }]

    }, {
        title: 'Get Real!',
        tags: ['Node.js', 'JavaScript'],
        description: 'A website with a blog, audio player, events and merch for
    my band. All content is written in an extended form of markdown using a
    custom system.', img: ['getreal_1.jpg'], links: [{ name: 'Visit Site', main:
    true, href:
    'https://web.archive.org/web/20210617060818/https://getreal.band/'
        }]
      }, {
        title: 'Lyric Video Editor',
        tags: ['Node.js', 'JavaScript'],
        description: 'A tool for building lyric videos, with a complex plugin
    system. I used this to make my own lyric videos.', img:
    ['lyric_video_editor.jpg'], links: [{ name: 'GitHub', main: true, href:
    'https://github.com/ajmd17/lyric-video-editor'
        }]
      }, {
        title: 'Celtic Colours app',
        tags: ['React Native'],
        description: 'Provides scheduling and event details for the Celtic
    Colours festival in Cape Breton. Contracted to work on this with
    Novastream.', links: [{ name: 'GitHub', main: true, href:
    'https://github.com/ajamiesonfraser/celticcoloursapp/tree/andrew'
        }]
      },*/
    /*{
title: 'auto-clockify',
tags: ['Ruby'],
small: true,
description: 'A tool for automatically clocking worked hours based on git
branches', links: [{ name: 'GitHub', href:
'https://github.com/ajmd17/auto-clockify'
}]
}, {
title: 'CoinTrends',
tags: ['Node.js', 'JavaScript'],
small: true,
description: 'Cryptocurrency price analysis toolkit with an extensive plugin
system', links: [{ name: 'GitHub', href: 'https://github.com/ajmd17/cointrends'
}]
}, {
title: 'Vennio Project Manager',
tags: ['JavaScript'],
small: true,
description: 'A different take on project management - Focus on the visual
components of a project.', links: [{ name: 'Visit Site', main: true, href:
'https://ajmd17.github.io/vennio'
}, {
  name: 'GitHub',
  href: 'http://github.com/ajmd17/vennio'
}]
},*/ {
      title: 'HypScript',
      tags: ['C++'],
      description:
          'Hyperion\'s original scripting language, written from scratch in C++, with its own compiler, bytecode format, and garbage-collected virtual machine.',
      links: [{name: 'GitHub', href: 'https://github.com/notomorrow/hypscript'}]
    },
    {
      title: 'Helios: WebGL Renderer',
      description:
          'A WebGL renderer written in TypeScript and Rust (WebAssembly), with a scene graph, PBR, post-processing, and a 3D Gaussian Splatting implementation.',
      tags: ['TypeScript', 'WebGL', 'Rust', 'WebAssembly'],
      img: ['helios_1.png'],
      links: [{name: 'GitHub', href: 'https://github.com/ajmd17/helios'}]
    },
    {
      title: 'Beacon: Open Source AI Coding Agent',
      tags: ['TypeScript', 'Machine Learning'],
      videos: [{
        href: 'beacon-clip.webm',
        description:
            'Beacon running in the editor: an agentic chat for multi-step coding tasks, plus inline completions.',
      }],
      description: 'An AI coding agent that works with any OpenAI-compatible API, including locally run models. Provides a full agent for multi-step tasks, plus inline completions for fill-in-the-middle models such as Qwen 3.',
      links: [
        {name: 'GitHub', href: 'https://github.com/ajmd17/BeaconAI'}
      ]
    },
    {
      title: 'BlockML: Component Language',
      tags: ['JavaScript'],
      description:
          'A React-style web framework with a declarative syntax inspired by JSON and QML.',
      img: ['blockml_1.jpg'],
      links: [
        {name: 'GitHub', href: 'https://github.com/ajmd17/blockml'}, {
          name: 'GitHub (blockml-component)',
          href: 'https://github.com/ajmd17/blockml-component'
        }
      ]
    }
  ],
  jobs: [
    {
      name: 'Digital Extremes',
      title: 'Engine Programmer',
      startDate: 'May 2025',
      endDate: 'Present',
      description: `
        - Rendering and engine features and fixes for Warframe in Digital Extremes' proprietary C++ / Vulkan engine
        - Focused on the Android and iOS platforms
      `.trim(),
      links:
          [{name: 'Digital Extremes', href: 'https://www.digitalextremes.com/'}]
    },
    {
      name: 'Free Range Games',
      title: 'Engine Programmer',
      startDate: 'March 2024',
      endDate: 'April 2025',
      description: `
        - Built Unreal Engine 5 editor tools to speed up game development
        - Led development on multiple projects
        - Rendering work and game performance optimization
        - Tracked down and fixed crashes and out-of-memory issues
      `.trim(),
      links:
          [{name: 'Free Range Games', href: 'https://www.freerangegames.com/'}]
    },
    {
      name: 'Chido',
      title: 'CTO / Co-Founder / Lead Developer',
      startDate: 'January 2023',
      endDate: 'January 2024',
      description: `
        - Built a cloud streaming platform for Unreal Engine 5 using WebRTC
        - Designed and built Unreal Engine plugins to improve artist workflow
        - Built a WebGL rendering engine with 3D Gaussian Splatting support
        - Used machine learning to automate 3D model creation from scanned rooms
        - Integrated RAG into Chido's AI assistant
      `.trim(),
      videos: [
        {
          href: 'chido1.webm',
          description:
              'This video showcases Chido\'s 3D home walkthrough experience from an iPhone, which allows users to walk through homes before they are built. The experience was built using Unreal Engine 5.'
        },
        {
          href: 'chido2.webm',
          description:
              'This video showcases Chido\'s AI assistant, which allows users to ask questions about the homes they are viewing. When the user asks a question the AI does not know the answer to, it will prompt the user to forward the question to the real estate agent in charge of the listing.'
        }
      ],
      links: [{
        name: 'Chido (Archived)',
        href: 'https://web.archive.org/web/20230629175009/https://chidoapp.com/'
      }]
    },
    {
      name: 'CD Projekt Red',
      title: 'Engine Programmer',
      startDate: 'April 2022',
      endDate: 'April 2023',
      description: `
        - Rendering work on The Witcher 3 next-gen update (shipped December 2022), including ray tracing, in DirectX 12
        - Implemented The Witcher 3's photo mode
        - Optimized game performance on PlayStation 5
        - Contributed to multiplayer on Project Sirius in Unreal Engine
      `.trim(),
      links: [{name: 'CD Projekt Red', href: 'https://www.cdprojekt.com/en/'}]
    },
    {
      name: 'Carbide (formerly Securicy)',
      title: 'Team Lead, Software Developer',
      startDate: 'May 2019',
      endDate: 'February 2022',
      description: `
        - Developed and maintained the company's Ruby on Rails web app
        - Led development of several projects and features
        - Team lead for integrations
      `.trim(),
      links: [{name: 'Carbide', href: 'https://carbidesecure.com/'}]
    },
    {
      name: 'Marcato (Acq. Leap Event Technology)',
      title: 'Software Developer',
      startDate: 'June 2017',
      endDate: 'March 2019',
      description: `
        - Developed and maintained a Ruby on Rails web app used by the organizers of festivals such as Burning Man and Coachella
      `.trim(),
      links: [{
        name: 'Marcato (Archived)',
        href:
            'https://web.archive.org/web/20190324144345/https://marcatofestival.com/'
      }]
    },
    {
      name: 'Bidsquid',
      title: 'CTO / Co-Founder / Lead Developer',
      startDate: 'January 2016',
      endDate: 'May 2017',
      description: `
        - Built an online marketplace connecting buyers and sellers of agricultural goods
      `.trim(),
      links: [{
        name: 'Bidsquid (Archived)',
        href: 'https://web.archive.org/web/20190122031746/https://bidsquid.com/'
      }]
    }
  ],
  skills: [
    'Engine Architecture', 'Real-time Rendering', 'Global Illumination', 'Ray Tracing',
    'GPU Performance', 'Console & Mobile', 'Compilers & Language Design',
    'C++', 'C', 'C#', 'Rust', 'HLSL / GLSL',
    'DirectX 12', 'Vulkan', 'WebGPU', 'Unreal Engine'
  ]
}
