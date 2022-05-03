export default {
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'desc',
        title: 'Short Description',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100,
        },
      },
      {
        name: 'image',
        title: 'Profile Picture',
        type: 'image',
      },
      {
        name: 'banner',
        title: 'Profile Banner',
        type: 'image',
      },
      {
        name: 'aboutme',
        title: 'Section: About Me',
        type: 'aboutme',
      },
      {
        name: 'resume',
        title: 'Section: Resume',
        type: 'resume',
      },
      {
        name: 'contactme',
        title: 'Your formspree link (https://formspree.io/)',
        type: 'url',
      },
      {
        name: 'links',
        title: 'Sub Section: Links',
        type: 'array',
        of: [
          {
            type: 'links'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }