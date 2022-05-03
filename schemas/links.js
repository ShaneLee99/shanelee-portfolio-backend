export default {
    name: 'links',
    title: 'Links',
    type: 'object',
    fields: [
      {
        name: 'buttontitle',
        title: 'Button Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Account banner image (USE SVG)',
        type: 'image',
      },
      {
        name: 'href',
        title: 'Where does the button goto?',
        type: 'string',
      }

      
    ],
  }