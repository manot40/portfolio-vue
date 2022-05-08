# Portfolio Website

My personal site for portfolio. Made with ❤️ using Vue and Nuxt3

## Setup
Manage your site content using headless CMS such as Strapi. Content data type can be found in type.d.ts at project root folder. Setup your API server URL using .env variable e.g:
`NUXT_PUBLIC_API_URL=https://strapi.site/api`

But you also can using custom environment to serve static data content. Below are examples in .env.example (just rename it to .env)
```
// URL to profile picture
NUXT_PUBLIC_DATA_AVATAR_URL=https://path.to/image

// Portfolio data for serve
NUXT_PUBLIC_DATA_FULLNAME=John Doe
NUXT_PUBLIC_DATA_NICKNAME=John
NUXT_PUBLIC_DATA_GREETING=Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
NUXT_PUBLIC_DATA_ABOUT=Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
NUXT_PUBLIC_DATA_QUOTE_CONTENT=Lorem ipsum dolor sit amet, consectetur adipiscing elit.
NUXT_PUBLIC_DATA_QUOTE_AUTHOR=John Doe

// Below are data that will serve as JSON, ensure you're entered the correct format JSON as follow:
NUXT_PUBLIC_DATA_SKILLS=`[
  {"name": "JavaScript", "value": "90"},
  {"name": "TypeScript", "value": "69"}
]`
NUXT_PUBLIC_DATA_EXPERIENCES=`[
  {"title": "Experience Education", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "date": "Apr, 2017", "type": "education"},
  {"title": "Experience Job","description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","date": "August, 2017","type": "job"}
]`

// Social Media Links
NUXT_PUBLIC_DATA_SOCIAL_GITHUB=
NUXT_PUBLIC_DATA_SOCIAL_WHATSAPP=
NUXT_PUBLIC_DATA_SOCIAL_LINKEDIN=
NUXT_PUBLIC_DATA_SOCIAL_TWITTER=
```

Lastly, make sure to install the dependencies and you are ready to rock

```bash
# yarn
yarn install
yarn dev

# npm
npm install
npm run dev
```

This app are deployable to any static site hosting (Vercel, Netlify, CF Page, etc)