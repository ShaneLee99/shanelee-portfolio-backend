export default {
    name: 'aboutme',
    title: 'About Me',
    type: 'object',
    fields: [
      {
        name: 'desc',
        title: 'Long Description',
        type: 'richText',
      },
      {
        name: 'hiring',
        title: 'Hiring Info',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'software',
        title: 'Software You Use',
        type: 'array',
        of: [{ type: 'software' }],
      },
      
    ],
  }