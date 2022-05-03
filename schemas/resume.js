export default {
    name: 'resume',
    title: 'Resume',
    type: 'object',
    fields: [
      {
        name: 'image',
        title: 'Image of Your Resume/CV',
        type: 'image',
      },
      {
        name: 'resume',
        title: 'Resume File (Use only if PDF you must also upload the image, Ignore if you only have a image)',
        type: 'file',
      },
    ],
  }