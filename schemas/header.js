export default {
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
      {
        name: 'header',
        type: 'string',
        title: 'Keep This as Header'
      },
      {
        name: 'headerlogo',
        type: 'image',
        title: 'Header Logo'
      },
      {
        name: 'headerlogoalt',
        type: 'string',
        title: 'Header Logo ALT, If theres no image, this will be used mainly.'
      },
      {
        name: 'directorys',
        title: 'List of Directorys',
        type: 'array',
        of: [{ type: 'headerdirectory' }],
      },
    ]
  }