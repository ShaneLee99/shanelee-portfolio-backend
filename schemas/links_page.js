export default {
    name: 'linkspage',
    title: 'Links',
    type: 'document',
    fields: [
      {
        name: 'buttontitle',
        title: 'Button Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Links Page Image (USE SVG)',
        type: 'image',
      },
      {
        name: 'href',
        title: 'Where does the button goto?',
        type: 'url',
      }

      
    ],
  }