import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galeria',
  title: 'Galeria Visual',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem',
      title: 'Imagem ou Arte',
      type: 'image',
      options: {
        hotspot: true, // Permite escolher o foco da imagem cortada no painel
      },
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria da Arte',
      type: 'string',
      options: {
        list: [
          {title: 'Arte', value: 'Arte'},
          {title: 'Foto', value: 'Foto'},
          {title: 'Sketch', value: 'Sketch'},
        ],
      },
    }),
    defineField({
      name: 'legenda',
      title: 'Legenda / Descrição',
      type: 'text',
    }),
  ],
})
