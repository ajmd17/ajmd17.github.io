var PORTFOLIO_DATA = {
  articles: [],
  projects: [{
    title: 'Hyperion Game Engine',
    featured: true,
    description: '3D game engine written in C++. Uses Vulkan to render.<br>Includes 4 global illumination techniques, ray tracing support, screen space reflections, PBR, temporal anti-aliasing, ambient occlusion, GPU-based occlusion culling, GPU particles, a scripting language, and more.<br><br>Check out the Github page for a larger list of features.',
    tags: ['C++', 'Vulkan', 'HypScript'],
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
    title: 'Helios Engine',
    description: 'A smaller, WebGL rendering engine written in TypeScript with some WebAssembly (Rust). Includes a simple scene graph, PBR, post-processing, a 3D Gaussian Splatting implementation and more.',
    tags: ['TypeScript', 'WebGL', 'Rust', 'WebAssembly'],
    img: ['helios_1.png'],
    links: [{
      name: 'GitHub',
      href: 'https://github.com/ajmd17/helios'
    }]
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
    },*/ {
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
    }, /*{
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
      small: true,
      description: 'Progrmaming language written from scratch in C++. Includes bytecode language and virtual machine with garbage collection.',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/notomorrow/hypscript'
      }]
  }],
  jobs: [
    {
      name: 'Free Range Games',
      title: 'Engine Programmer',
      startDate: 'March 2024',
      endDate: 'Present'
    },
    {
      name: 'Chido',
      title: 'CTO / Co-Founder / Lead Developer',
      startDate: 'April 2023',
      endDate: 'January 2024'
    },
    {
      name: 'CD Projekt Red',
      title: 'Engine Programmer',
      startDate: 'April 2022',
      endDate: 'April 2023'
    },
    {
      name: 'Carbide (formerly Securicy)',
      title: 'Team Lead, Software Developer',
      startDate: 'May 2019',
      endDate: 'Febuary 2022'
    },
    {
      name: 'Marcato (Acq. Leap Event Technology)',
      title: 'Software Developer',
      startDate: 'June 2017',
      endDate: 'March 2019'
    },
    {
      name: 'Bidsquid',
      title: 'CTO / Co-Founder / Lead Developer',
      startDate: 'January 2016',
      endDate: 'May 2017'
    }
  ],
  skills: [
    'GPU Programming',
    'Full-stack Web Development',
    'Machine learning',
    'WebGL',
    'OpenGL',
    'Vulkan',
    'Python',
    'C++',
    'Game engines',
    'JavaScript',
    'Ruby on Rails',
    'Node.js',
    'React.js',
    'TypeScript',
    'AWS',
    'C',
    'Git',
  ]
}
