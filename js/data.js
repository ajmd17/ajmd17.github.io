var PORTFOLIO_DATA = {
  articles: [],
  projects: [{
    title: 'Hyperion Game Engine',
    description: 'Powerful multi-threaded 3D game engine written in C++17. Uses Vulkan. Includes 4 global illumination techniques (DDGI, Light probes, HBIL, voxel cone tracing), ray tracing support, screen space reflections, PBR, temporal AA, HBAO, GPU compute occlusion culling, GPU particles, and more. Check out the Github page for a larger list of features.',

    img: ['hyp-4.png', 'hyp-2.jpeg'],
    links: [{
        name: 'GitHub',
        href: 'http://github.com/krait-games/hyperion-engine'
    }]
  },
  {
    title: 'BidSquid Online Marketplace',
    tags: ['Node.js', 'TypeScript', 'React', 'MongoDB'],
    description: 'Online marketplace to connect buyers and sellers of agricultural goods. Includes a backend system for managing inventory and a procurement system. Read more: https://entrevestor.com/home/entry/hachey-traded-wall-street-for-agtech',
    img: ['bidsquid_1.jpg', 'bidsquid_2.jpg', 'bidsquid_3.jpg'],
    links: [{
      name: 'Visit Site',
      main: true,
      href: 'https://bidsquid.com'
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
        href: 'https://getreal.band'
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
    }, {
      title: 'BlockML - Component Language',
      tags: ['JavaScript'],
      description: 'Makes writing HTML feel more consistent with the way we write JavaScript and CSS.',
      img: ['blockml_1.jpg'],
      links: [{
        name: 'GitHub',
        href: 'https://github.com/ajmd17/blockml'
      }, {
        name: 'GitHub (blockml-component)',
        href: 'https://github.com/ajmd17/blockml-component'
      }]
    }, {
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
    }, {
      title: 'Ace Programming Language',
      tags: ['C++'],
      small: true,
      description: 'Progrmaming language written from scratch in C++. Includes bytecode language and virtual machine with garbage collection.',
      links: [{
        name: 'GitHub',
        href: 'http://github.com/ajmd17/ace-lang'
      }]
    }]
}
