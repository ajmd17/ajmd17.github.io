var PORTFOLIO_DATA = {
  articles: [],
  projects: [{
    title: 'Hyperion Game Engine',
    featured: true,
    description: '3D game engine written in C++. Rendering primarily uses a Vulkan backend. Oodles of features, such as:<br>\
      &bull;&nbsp;Entity component system (ECS)<br>\
      &bull;&nbsp;Custom UI library, built from scratch<br>\
      &bull;&nbsp;4 global illumination techniques (Light field probes, spherical harmonics probes, dynamic diffuse global illumination (DDGI), voxel cone tracing<br>\
      &bull;&nbsp;Hardware ray tracing support + path tracing<br>\
      &bull;&nbsp;Post processing effects, such as screen space reflections, SSAO, temporal anti-aliasing<br>\
      &bull;&nbsp;Physically based shading / PBR material system<br>\
      &bull;&nbsp;GPU-based occlusion culling<br>\
      &bull;&nbsp;Advanced async job system for multi-threading<br>\
      &bull;&nbsp;.NET Core integration for C# scripting<br>\
      &bull;&nbsp;GPU particle simulation<br>\
      and a lot more, you should check it out on GitHub! https://github.com/notomorrow/hyperion-engine',
    tags: ['C++', 'C#', 'Vulkan'],
    img: [{
      href: 'hyp-rt.png',
      description: 'This image showcases the ray tracing implementation in Hyperion, used to compute real-time reflections using ray tracing hardware on modern graphics cards.<br><br>Scene: Pica Pica'
    }, {
      href: 'hyp-parallax.png',
      description: 'This image showcases the parallax occlusion mapping implementation in Hyperion.<br><br>Scene: Sponza Atrium'
    }, 'chapel.jpg'],
    videos: [{
      href: 'hyp-ddgi.mp4',
      description: 'This video shows the dynamic diffuse global illumination (DDGI) technique as implemented by myself in my game engine, Hyperion.<br><br>DDGI is a modern global illumination technique which uses hardware ray tracing to compute indirect diffuse lighting.<br><br>Scene: Sponza Atrium'
    }, {
      href: 'hyp-particles.mp4',
      description: 'This video shows the GPU particle system in Hyperion. Particles are simulated on the GPU using compute shaders.<br><br>Scene: Sponza Atrium'
    }],
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/notomorrow/hyperion-engine'
      }
    ]
  },
  {
    title: 'Beacon AI Coding Tool',
    featured: true,
    tags: ['TypeScript', 'Python', 'Machine Learning'],
    videos: [{
      href: 'beacon1.webm',
      description: 'This video showcases the Beacon AI coding tool, which provides code suggestions and completions in editor. The tool is designed to help developers write code faster by providing code suggestions and completions in editor.'
    }],
    description: `
      An alternative to GitHub Copilot I built to allow usage of locally ran language models. The tool is designed to help developers write code faster by providing code suggestions and completions in editor.<br>
      &bull;&nbsp;Built using TypeScript for the Visual Studio Code extension, and Python for the backend and interfacing with AI models.<br>
      &bull;&nbsp;Has the ability to swap out AI models, and supports multiple languages.<br>
    `.trim()
  },
  /*{
    title: 'BidSquid Online Marketplace',
    tags: ['Node.js', 'TypeScript', 'React', 'MongoDB'],
    description: 'Online marketplace to connect buyers and sellers of agricultural goods. Includes a backend system for managing inventory and a procurement system. Read more: https://entrevestor.com/home/entry/hachey-traded-wall-street-for-agtech',
    img: ['bidsquid_1.jpg', 'bidsquid_2.jpg', 'bidsquid_3.jpg'],
    links: [{
      name: 'Visit Site',
      main: true,
      href: 'https://web.archive.org/web/20180316132231/https://bidsquid.com/'
    }]
  }, {
    title: 'Apex3D Game Engine',
    tags: ['Game Engine', 'C++', 'OpenGL'],
    description: 'OpenGL game engine written in C++. One of my earlier game engines.',
    img: ['scout_trooper.PNG'],
    links: [{
      name: 'GitHub',
      href: 'http://github.com/ajmd17/apex-engine'
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
      description: 'A website with a blog, audio player, events and merch for my band. All content is written in an extended form of markdown using a custom system.',
      img: ['getreal_1.jpg'],
      links: [{
        name: 'Visit Site',
        main: true,
        href: 'https://web.archive.org/web/20210617060818/https://getreal.band/'
      }]
    }, {
      title: 'Lyric Video Editor',
      tags: ['Node.js', 'JavaScript'],
      description: 'A tool for building lyric videos, with a complex plugin system. I used this to make my own lyric videos.',
      img: ['lyric_video_editor.jpg'],
      links: [{
        name: 'GitHub',
        main: true,
        href: 'https://github.com/ajmd17/lyric-video-editor'
      }]
    }, {
      title: 'Celtic Colours app',
      tags: ['React Native'],
      description: 'Provides scheduling and event details for the Celtic Colours festival in Cape Breton. Contracted to work on this with Novastream.',
      links: [{
        name: 'GitHub',
        main: true,
        href: 'https://github.com/ajamiesonfraser/celticcoloursapp/tree/andrew'
      }]
    },*/  /*{
      title: 'auto-clockify',
      tags: ['Ruby'],
      small: true,
      description: 'A tool for automatically clocking worked hours based on git branches',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/ajmd17/auto-clockify'
      }]
    }, {
      title: 'CoinTrends',
      tags: ['Node.js', 'JavaScript'],
      small: true,
      description: 'Cryptocurrency price analysis toolkit with an extensive plugin system',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/ajmd17/cointrends'
      }]
    }, {
      title: 'Vennio Project Manager',
      tags: ['JavaScript'],
      small: true,
      description: 'A different take on project management - Focus on the visual components of a project.',
      links: [{
        name: 'Visit Site',
        main: true,
        href: 'https://ajmd17.github.io/vennio'
      }, {
        name: 'GitHub',
        href: 'http://github.com/ajmd17/vennio'
      }]
    },*/ {
      title: 'HypScript',
      tags: ['C++'],
      description: 'Progrmaming language written from scratch in C++. Includes bytecode language and virtual machine with garbage collection.',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/notomorrow/hypscript'
      }]
  },
  {
    title: 'Helios Engine',
    description: 'A smaller, WebGL rendering engine written in TypeScript with some WebAssembly (Rust). Includes a simple scene graph, PBR, post-processing, a 3D Gaussian Splatting implementation and more.',
    tags: ['TypeScript', 'WebGL', 'Rust', 'WebAssembly'],
    img: ['helios_1.png'],
    links: [{
      name: 'GitHub',
      href: 'https://github.com/ajmd17/helios'
    }]
  },{
    title: 'BlockML - Component Language',
    tags: ['JavaScript'],
    description: 'A web framework similar to React, with a syntax that is similar to JSON or QML.',
    img: ['blockml_1.jpg'],
    links: [{
      name: 'GitHub',
      href: 'https://github.com/ajmd17/blockml'
    }, {
      name: 'GitHub (blockml-component)',
      href: 'https://github.com/ajmd17/blockml-component'
    }]
  }],
  jobs: [
    {
      name: 'Free Range Games',
      title: 'Engine Programmer',
      startDate: 'March 2024',
      endDate: 'Present',
      description: `
        - Developed editor tools for Unreal Engine 5 to assist in game development
        - Led development of multiple projects 
        - Various tasks related to rendering
        - Optimization of game performance
        - Solved crashes and out of memory issues
      `.trim(),
      links: [
        {
          name: 'Free Range Games',
          href: 'https://www.freerangegames.com/'
        }
      ]
    },
    {
      name: 'Chido',
      title: 'CTO / Co-Founder / Lead Developer',
      startDate: 'January 2023',
      endDate: 'January 2024',
      description: `
        - Developed cloud streaming platform for Unreal Engine 5 w/ WebRTC
        - Designed and developed Unreal Engine plugins to improve artist workflow
        - Built a rendering engine using WebGL, supporting 3D Gaussian Splatting
        - Used machine learning to automate 3D model creation of scanned rooms
        - Integrated RAG into Chido's AI assistant

      `.trim(),
      videos: [{
        href: 'chido1.webm',
        description: 'This video showcases Chido\'s 3D home walkthrough experience from an iPhone, which allows users to walk through homes before they are built. The experience was built using Unreal Engine 5.'
      },
      {
        href: 'chido2.webm',
        description: 'This video showcases Chido\'s AI assistant, which allows users to ask questions about the homes they are viewing. When the user asks a question the AI does not know the answer to, it will prompt the user to forward the question to the real estate agent in charge of the listing.'
      }],
      links: [
        {
          name: 'Chido (Archived)',
          href: 'https://web.archive.org/web/20230629175009/https://chidoapp.com/'
        }
      ]
    },
    {
      name: 'CD Projekt Red',
      title: 'Engine Programmer',
      startDate: 'April 2022',
      endDate: 'April 2023',
      description: `
        - Rendering focused tasks for The Witcher 3 next gen, such as ray tracing, using DirectX 12
        - Implemented photomode into The Witcher 3
        - Optimizing game performance on Playstation 5
        - Assisted with multiplayer tasks on Project Sirius using Unreal Engine

      `.trim(),
      links: [
        {
          name: 'CD Projekt Red',
          href: 'https://www.cdprojekt.com/en/'
        }
      ]
    },
    {
      name: 'Carbide (formerly Securicy)',
      title: 'Team Lead, Software Developer',
      startDate: 'May 2019',
      endDate: 'Febuary 2022',
      description: `
        - Development and maintenance of Rails web app
        - Led development of several projects and features
        - Team lead of integrations

      `.trim(),
      links: [
        {
          name: 'Carbide',
          href: 'https://carbidesecure.com/'
        }
      ]
    },
    {
      name: 'Marcato (Acq. Leap Event Technology)',
      title: 'Software Developer',
      startDate: 'June 2017',
      endDate: 'March 2019',
      description: `
        - Developed and maintained Rails web app, used by organizers of music festival leaders such as Burning Man and Coachella
      `.trim(),
      links: [
        {
          name: 'Marcato (Archived)',
          href: 'https://web.archive.org/web/20190324144345/https://marcatofestival.com/'
        }
      ]
    },
    {
      name: 'Bidsquid',
      title: 'CTO / Co-Founder / Lead Developer',
      startDate: 'January 2016',
      endDate: 'May 2017',
      description: `
        * Developed an online marketplace to connect buyers and sellers of agricultural goods.
      `.trim(),
      links: [
        {
          name: 'Bidsquid (Archived)',
          href: 'https://web.archive.org/web/20190122031746/https://bidsquid.com/'
        }
      ]
    }
  ],
  skills: [
    'GPU programming',
    'Full-stack software development',
    'Machine learning',
    'Game engines',
    'C++',
    'C#',
    'JavaScript',
    'Python',
    'Ruby on Rails',
    'Node.js',
    'React.js',
    'TypeScript',
    'AWS',
    'C',
    'Git'
  ]
}
