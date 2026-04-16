export type ProjectCategory = 'all' | 'chrome-extension' | 'mobile-app' | 'web'

export type Filter = {
  label: string
  value: ProjectCategory
}

export type Work = {
  id: string
  name: string
  link: string
  image: string
}

export type Project = {
  id: string
  name: string
  description: string
  link: string
  icon: string
  category: ProjectCategory
}

export const PROJECTS: Project[] = [
  {
    id: 'project1',
    name: 'Find & Download All Images',
    description: 'Chrome extension to find and download all images on a page',
    link: 'https://chromewebstore.google.com/detail/find-download-all-images/emdnadimomlohagcjghdcjlnckgapenl',
    icon: '/project-icons/find-all-images.png',
    category: 'chrome-extension',
  },
  {
    id: 'project2',
    name: 'Dark Mode Websites',
    description: 'Inspiring dark mode designs and dark theme websites',
    link: 'https://darkmodewebsites.com/',
    icon: '/project-icons/darkmodewebsites.png',
    category: 'web',
  },
  {
    id: 'project3',
    name: 'NPM Stats',
    description: 'Discover npm download stats and trends',
    link: 'https://npmstats.com/',
    icon: '/project-icons/npmstats.png',
    category: 'web',
  },
  {
    id: 'project4',
    name: 'Tably HN',
    description: 'Chrome extension to read Hacker News stories in a new tab',
    link: 'https://chromewebstore.google.com/detail/tably-hn-hacker-news-in-n/ikpjmodfakappocabodafjbacmpmokhc',
    icon: '/project-icons/tablyhn.png',
    category: 'chrome-extension',
  },
  {
    id: 'project5',
    name: 'Git Profile Stats',
    description: 'Find GitHub profiles, repositories and contributions',
    link: 'https://chromewebstore.google.com/detail/git-profile-stats/chjcmnadhdibjkjdkhndiamelfgpfpop',
    icon: '/project-icons/git-profile-stats.png',
    category: 'chrome-extension',
  },
  {
    id: 'project6',
    name: 'Find All Links',
    description: 'Chrome extension to find all links on a page',
    link: 'https://chromewebstore.google.com/detail/find-all-links/oeapomeegplhghjhnookfkcocjdjldgj',
    icon: '/project-icons/find-all-links.png',
    category: 'chrome-extension',
  },
  {
    id: 'project7',
    name: 'Missing Alt Text Finder',
    description: 'Chrome extension to find missing alt text in images',
    link: 'https://chromewebstore.google.com/detail/missing-alt-text-finder/mdppmligdebmalfkinjffjbfkkbmlnfh',
    icon: '/project-icons/missing-alt-text-finder.png',
    category: 'chrome-extension',
  },
  {
    id: 'project8',
    name: 'Random Tab Tools',
    description: "A collection of tools for your Chrome's new tab",
    link: 'https://chromewebstore.google.com/detail/random-tab-tools/glkamfbamjfanobcbjipjbniopgjdaka',
    icon: '/project-icons/randomtools.png',
    category: 'chrome-extension',
  },
  {
    id: 'project9',
    name: 'Favicon Finder',
    description: 'Chrome extension to find the favicon of a website',
    link: 'https://chromewebstore.google.com/detail/website-favicon-finder/nonjoddnbmbkgfehkmflcngjiaoodfeb',
    icon: '/project-icons/favicon-finder.png',
    category: 'chrome-extension',
  },
  {
    id: 'project10',
    name: 'Chrome Extension Icon Generator',
    description: 'Chrome extension to generate icons for Chrome extensions',
    link: 'https://chromewebstore.google.com/detail/chrome-extension-icon-gen/eadmgocnkkgbjpfkdobhafjehofghhid',
    icon: '/project-icons/chrome-extension-icon-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project11',
    name: 'Lorem Ipsum Generator',
    description: 'Chrome extension to generate Lorem Ipsum text',
    link: 'https://chromewebstore.google.com/detail/lorem-ipsum-generator/fibljlbdjgdpebomnhkpnmechaljiami',
    icon: '/project-icons/lorem-ipsum-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project12',
    name: 'Placeholder Image Generator',
    description: 'Chrome extension to generate placeholder images',
    link: 'https://chromewebstore.google.com/detail/placeholder-image-generat/clnejppckedfnjoldjggejillkenpgoa',
    icon: '/project-icons/placeholder-image-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project13',
    name: 'Random Number Generator',
    description: 'Chrome extension to generate random numbers',
    link: 'https://chromewebstore.google.com/detail/random-number-generator/afipiiibhlckijhbiamfkjfiehnpiohi',
    icon: '/project-icons/random-number-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project14',
    name: 'Word Counter',
    description: 'Chrome extension that counts the number of words in a text',
    link: 'https://chromewebstore.google.com/detail/word-counter/afiflbpgpfgdfjpnecjfbfnldplpgdhi',
    icon: '/project-icons/word-counter.png',
    category: 'chrome-extension',
  },
  {
    id: 'project15',
    name: 'Random Name Generator',
    description: 'Generate random names with Faker.js',
    link: 'https://chromewebstore.google.com/detail/random-name-generator/mfpemipjbjojmanhcmampjhpfkbieaog',
    icon: '/project-icons/random-name-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project16',
    name: 'Dark World Clock',
    description: 'World clock extension that displays multiple time zones on your new tab page',
    link: 'https://chromewebstore.google.com/detail/dark-world-clock/ohdlggppbphkobemhhckpdohfoohnbkc',
    icon: '/project-icons/dark-world-clock.png',
    category: 'chrome-extension',
  },
  {
    id: 'project17',
    name: 'Popular Quotes Tab',
    description: 'Chrome extension to display popular quotes in a new tab',
    link: 'https://chromewebstore.google.com/detail/popular-quotes-tab/nmnlhfhbadbhldcpeagfpomgkdpdgggn',
    icon: '/project-icons/popular-quotes-tab.png',
    category: 'chrome-extension',
  },
  {
    id: 'project18',
    name: 'Chrome Extension Boilerplate',
    description: 'Get default Chrome extensions boilerplate',
    link: 'https://chromewebstore.google.com/detail/chrome-extension-boilerpl/laegiejplfiapmggopjdaedjipaphpee',
    icon: '/project-icons/chrome-extension-boilerplate.png',
    category: 'chrome-extension',
  },
  {
    id: 'project19',
    name: 'HTML Tags',
    description: 'Chrome extension to display HTML tags in side panel',
    link: 'https://chromewebstore.google.com/detail/html-tags/cbmmgohaogejgcenpbeegckeocbcpall',
    icon: '/project-icons/html-tags.png',
    category: 'chrome-extension',
  },
  {
    id: 'project20',
    name: 'Random Joke Generator',
    description: 'Chrome extension to generate random jokes',
    link: 'https://chromewebstore.google.com/detail/random-joke-generator/oiipnjehhmaclpdbehinimimemofahmb',
    icon: '/project-icons/random-joke-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project21',
    name: 'Fake User Generator',
    description: 'Chrome extension to generate fake user data',
    link: 'https://chromewebstore.google.com/detail/fake-user-generator/kbipkcaacmnhffgfnpfpfoglaicgddgb',
    icon: '/project-icons/fake-user-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project22',
    name: 'Text to Speech Converter',
    description: 'Chrome extension to convert text to speech',
    link: 'https://chromewebstore.google.com/detail/lchoocfgkliplhjepokebdjgnlaidioo',
    icon: '/project-icons/text-to-speech-converter.png',
    category: 'chrome-extension',
  },
  {
    id: 'project23',
    name: 'Tier List Ranking: Rank It All',
    description: 'IOS app to rank tier lists',
    link: 'https://apps.apple.com/tr/app/tier-list-ranking-rank-it-all/id6742033182',
    icon: '/project-icons/tier-list-ranking.png',
    category: 'mobile-app',
  },
  {
    id: 'project24',
    name: 'Password Generator: Pixel Mode',
    description: 'IOS app to generate random passwords',
    link: 'https://apps.apple.com/tr/app/password-generator-pixel-mode/id6742506293',
    icon: '/project-icons/password-generator-app.png',
    category: 'mobile-app',
  },
  {
    id: 'project25',
    name: 'Random Activity Generator',
    description: 'Chrome extension to generate random activities',
    link: 'https://chromewebstore.google.com/detail/hjogoidgldojhpfgmibepjggfhnohank',
    icon: '/project-icons/random-activity-generator.png',
    category: 'chrome-extension',
  },
  {
    id: 'project26',
    name: 'Clipboard Manager',
    description: 'Chrome extension to manage your clipboard history',
    link: 'https://chromewebstore.google.com/detail/mfagmihebmfegdepoieihfkigkdjnohg',
    icon: '/project-icons/clipboard-manager.png',
    category: 'chrome-extension',
  },
  {
    id: 'project27',
    name: 'Github Profile Finder',
    description: 'Find Github profiles, repositories and contributions',
    link: 'https://github-profile-finder-tool.netlify.app',
    icon: '/project-icons/github-profile-finder.png',
    category: 'web',
  },
  {
    id: 'project28',
    name: 'Text Case Converter',
    description: 'Quickly convert any text between 8 popular case formats',
    link: 'https://chromewebstore.google.com/detail/kmlekcpiceblpjpidbpihglfkdlgafna',
    icon: '/project-icons/text-case-converter.png',
    category: 'chrome-extension',
  },
  {
    id: 'project29',
    name: 'Text Reverser',
    description: 'Chrome extension to reverse any text you want',
    link: 'https://chromewebstore.google.com/detail/lfdfjdallnieialdelhkhhdhkihmeeig',
    icon: '/project-icons/text-reverser.png',
    category: 'chrome-extension',
  },
  {
    id: 'project30',
    name: 'Tab Renamer',
    description: 'Rename your browser tabs easily',
    link: 'https://chromewebstore.google.com/detail/bebdilpnbnlgpmcpcnhfnpclfelomkdc',
    icon: '/project-icons/tab-renamer.png',
    category: 'chrome-extension',
  },
  {
    id: 'project31',
    name: 'Rock Paper Scissors',
    description: 'Play rock paper scissors game',
    link: 'https://online-rock-paper-scissors-game.netlify.app',
    icon: '/project-icons/rock-paper-scissors.png',
    category: 'web',
  },
  {
    id: 'project32',
    name: 'Notes App',
    description: 'A notes app to save your notes with Next.js + Zustand',
    link: 'https://minimal-notesapp.netlify.app',
    icon: '/project-icons/notes.png',
    category: 'web',
  },
  {
    id: 'project33',
    name: 'Randomly Tools',
    description: 'A collection of tools for your browser',
    link: 'https://randomly.tools',
    icon: '/project-icons/randomly-tools.png',
    category: 'web',
  },
  {
    id: 'project34',
    name: 'Cat Facts Generator',
    description: 'Random cat facts generator using Next.js + Cat Facts API',
    link: 'https://random-facts-about-cats.netlify.app',
    icon: '/project-icons/cat-facts-generator.png',
    category: 'web',
  },
  {
    id: 'project35',
    name: 'Random Recipe Generator',
    description: 'Discover random recipes from around the world',
    link: 'https://random-recipes-generator.netlify.app',
    icon: '/project-icons/random-recipe-generator.png',
    category: 'web',
  },
  {
    id: 'project36',
    name: 'Rick and Morty Characters',
    description: 'Explore Rick and Morty characters and their details',
    link: 'https://chars-rick-and-morty.netlify.app',
    icon: '/project-icons/rick-and-morty-chars.png',
    category: 'web',
  },
  {
    id: 'project37',
    name: 'Heads or Tails',
    description: 'Play heads or tails game',
    link: 'https://play-heads-or-tails.netlify.app',
    icon: '/project-icons/heads-or-tails.png',
    category: 'web',
  },
  {
    id: 'project38',
    name: 'Guess My Number',
    description: 'Play guess my number game with different levels',
    link: 'https://play-guess-number-game.netlify.app',
    icon: '/project-icons/guess-number.png',
    category: 'web',
  },
  {
    id: 'project39',
    name: 'Currency Converter',
    description: 'Convert between different currencies',
    link: 'https://currency-converter-with-react.netlify.app',
    icon: '/project-icons/currency-converter.png',
    category: 'web',
  },
  {
    id: 'project40',
    name: 'Country Guide',
    description: 'Country guide using Next.js + Rest Countries API',
    link: 'https://world-country-guide.netlify.app',
    icon: '/project-icons/country-guide.png',
    category: 'web',
  },
  {
    id: 'project41',
    name: 'Countdown Timer',
    description: 'Countdown timer to next year',
    link: 'https://countdown-next-year.netlify.app',
    icon: '/project-icons/countdown-timer.png',
    category: 'web',
  },
  {
    id: 'project42',
    name: 'Stopwatch Timer',
    description: 'Easy stopwatch timer to track your time',
    link: 'https://easy-stopwatch-timer.netlify.app',
    icon: '/project-icons/stopwatch-timer.png',
    category: 'web',
  },
  {
    id: 'project43',
    name: 'Public Holidays',
    description: 'Find public holidays using Next.js + Nager Date API + Flagcdn',
    link: 'https://find-public-holidays.netlify.app',
    icon: '/project-icons/public-holidays.png',
    category: 'web',
  },
  {
    id: 'project44',
    name: 'Random Color Generator',
    description: 'Generate random colors and learn color codes',
    link: 'https://random-bg-color-generator.netlify.app',
    icon: '/project-icons/random-color-generator.png',
    category: 'web',
  },
  {
    id: 'project45',
    name: 'Glassmorphism Generator',
    description: 'Generate glassmorphism effects and learn css code',
    link: 'https://glassmorphism-generator-tool.netlify.app',
    icon: '/project-icons/glassmorphism-generator.png',
    category: 'web',
  },
  {
    id: 'project46',
    name: 'Random Quote Generator',
    description: 'Daily random quote generator',
    link: 'https://daily-random-quotes.netlify.app',
    icon: '/project-icons/random-quote-generator.png',
    category: 'web',
  },
  {
    id: 'project47',
    name: 'Password Generator',
    description: 'Generate random passwords with different lengths and characters',
    link: 'https://online-password-generator-tool.netlify.app',
    icon: '/project-icons/password-generator.png',
    category: 'web',
  },
  {
    id: 'project48',
    name: 'Random Image Generator',
    description: 'Generate random picsum, dog, fox and user images',
    link: 'https://random-images-generator.netlify.app',
    icon: '/project-icons/random-image-generator.png',
    category: 'web',
  },
  {
    id: 'project49',
    name: 'Quiz Game',
    description: 'Simple quiz game with Next.js + Open Trivia DB',
    link: 'https://easy-quiz-game.netlify.app',
    icon: '/project-icons/quiz-game.png',
    category: 'web',
  },
  {
    id: 'project50',
    name: 'React Login',
    description: 'React Login with LocalStorage',
    link: 'https://react-login-with-localstorage.netlify.app',
    icon: '/project-icons/react-login-with-localstorage.png',
    category: 'web',
  },
  {
    id: 'project51',
    name: 'To Do List',
    description: 'Minimal to do list to manage your tasks with Next.js + Zustand',
    link: 'https://minimal-to-do-list.netlify.app',
    icon: '/project-icons/todo1.png',
    category: 'web',
  },
  {
    id: 'project52',
    name: 'Tailwind Forms',
    description: 'Login, Register, Contact form examples with Tailwind CSS',
    link: 'https://tailwind-form-examples.netlify.app',
    icon: '/project-icons/tailwind-form-examples.png',
    category: 'web',
  },
  {
    id: 'project53',
    name: 'JSON to Zod Schema',
    description: 'Convert JSON to Zod schema with Next.js + Monaco Editor',
    link: 'https://json-to-zod.netlify.app/',
    icon: '/project-icons/json-to-zod-schema.png',
    category: 'web',
  },
  {
    id: 'project54',
    name: 'Next.js + Sanity Blog',
    description: 'Blog starter template with Next.js + Sanity',
    link: 'https://github.com/burakcanince/nextjs-sanity-blog',
    icon: '/project-icons/sanity-blog.png',
    category: 'web',
  },
  {
    id: 'project55',
    name: 'Motion Animations',
    description: 'GSAP & Motion animation examples',
    link: 'https://gsap-and-motion-animations.netlify.app',
    icon: '/project-icons/animation-examples.png',
    category: 'web',
  },
  {
    id: 'project56',
    name: 'CSS Icons',
    description: 'Collection of CSS icons',
    link: 'https://css-icons.netlify.app',
    icon: '/project-icons/css-icons.png',
    category: 'web',
  },
  {
    id: 'project57',
    name: 'Pixel RPS: Rock Paper Scissors',
    description: 'Rock Paper Scissors game with pixel art style',
    link: 'https://apps.apple.com/tr/app/pixel-rps-rock-paper-scissors/id6758772768',
    icon: '/project-icons/pixel-rps.png',
    category: 'mobile-app',
  },
  {
    id: 'project58',
    name: 'Random Number Generator: RNG+',
    description: 'Generate random numbers with custom ranges',
    link: 'https://apps.apple.com/tr/app/random-number-generator-rng/id6760746286',
    icon: '/project-icons/rng.png',
    category: 'mobile-app',
  },
  {
    id: 'project60',
    name: 'Chess Clock:Timer for Chess',
    description: 'Chess timer app for tracking player time',
    link: 'https://apps.apple.com/tr/app/chess-clock-timer-for-chess/id6759971219',
    icon: '/project-icons/chess-clock.png',
    category: 'mobile-app',
  },
  {
    id: 'project61',
    name: 'Silent Coding',
    description: 'Mobile app about frontend development ⏳',
    link: '#',
    icon: '/project-icons/silentcoding.png',
    category: 'mobile-app',
  },
  {
    id: 'project62',
    name: 'Chrome Extensions',
    description: 'AI-powered Chrome extensions ⏳',
    link: '#',
    icon: '/project-icons/chrome-extensions.png',
    category: 'chrome-extension',
  }
]

export const WORKS: Work[] = [
  {
    id: 'project1',
    name: 'Bloomingdales',
    link: 'https://bloomingdales.ae',
    image: '/works/bloomingdales.png'
  },
  {
    id: 'project2',
    name: 'Mamas & Papas',
    link: 'https://mamasandpapas.ae/',
    image: '/works/mamasandpapas.png'
  },
  {
    id: 'project3',
    name: 'Graff',
    link: 'https://graff.com',
    image: '/works/graff.png'
  },
  {
    id: 'project4',
    name: 'Gymshark',
    link: 'https://gymshark.ae/',
    image: '/works/gymshark.png'
  },
  {
    id: 'project5',
    name: 'Gap',
    link: 'https://gap.ae/',
    image: '/works/gap.png'
  },
  {
    id: 'project6',
    name: 'Faces',
    link: 'https://faces.ae/',
    image: '/works/faces.png'
  },
  {
    id: 'project7',
    name: 'YSL Beauty',
    link: 'https://yslbeauty.ae/',
    image: '/works/yslbeauty.png'
  },
  {
    id: 'project8',
    name: 'Makeup Forever',
    link: 'https://www.makeupforever.ae/',
    image: '/works/makeupforever.png'
  },
  {
    id: 'project9',
    name: 'The Deal Outlet',
    link: 'https://thedealoutlet.com',
    image: '/works/thedealoutlet.png'
  },
  {
    id: 'project10',
    name: 'Toshiba TV',
    link: 'https://toshiba-tv.com',
    image: '/works/toshibatv.png'
  },
  {
    id: 'project11',
    name: 'Vestel Visual Solutions',
    link: 'https://vestelvisualsolutions.com',
    image: '/works/vestelvisualsolutions.png'
  },
  {
    id: 'project12',
    name: 'JVC TV',
    link: 'https://jvctv.eu/eu',
    image: '/works/jvctv.png'
  },
  {
    id: 'project13',
    name: 'Farsan',
    link: 'https://www.far-san.com.tr/',
    image: '/works/farsan.png'
  },
  {
    id: 'project14',
    name: 'Spa Plastik',
    link: 'https://spaplastik.com',
    image: '/works/spaplastik.png'
  },
  {
    id: 'project15',
    name: 'Etki Liman',
    link: 'https://etkiliman.com.tr',
    image: '/works/etkiliman.png'
  }
]
