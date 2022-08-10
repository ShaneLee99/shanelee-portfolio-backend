import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';


export default {
    name: 'linkspage',
    title: 'Links',
    type: 'document',
    orderings: [orderRankOrdering],
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
      },
      orderRankField({ type: 'linkspage'}),

      
    ],
  }