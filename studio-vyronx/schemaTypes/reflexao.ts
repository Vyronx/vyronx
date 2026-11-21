import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reflexao',
  title: 'Reflexões',
  type: 'document',
  fields: [
    defineField({
      name: 'dataHora',
      title: 'Data e Hora',
      type: 'string',
      description: 'Exemplo: 24/10/2026 - 14:30',
    }),
    defineField({
      name: 'corTag',
      title: 'Cor da Tag',
      type: 'string',
      options: {
        list: [
          {title: 'Roxo (Padrão)', value: 'purple'},
          {title: 'Azul', value: 'blue'},
          {title: 'Vermelho', value: 'red'},
          {title: 'Verde', value: 'emerald'},
        ],
      },
    }),
    defineField({
      name: 'texto',
      title: 'Texto da Reflexão',
      type: 'text',
    }),
  ],
})
