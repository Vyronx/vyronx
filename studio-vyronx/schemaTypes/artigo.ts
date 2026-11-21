import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artigo',
  title: 'Artigos e Trabalhos',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'motivacao',
      title: 'A Motivação',
      type: 'text',
      description: 'Escreva aquele texto introdutório do card.',
    }),
    defineField({
      name: 'tipoArquivo',
      title: 'Tipo de Arquivo',
      type: 'string',
      options: {
        list: [
          {title: 'PDF', value: 'pdf'},
          {title: 'Word (DOCX)', value: 'docx'},
          {title: 'Texto (TXT)', value: 'txt'},
        ],
      },
    }),
    defineField({
      name: 'arquivo',
      title: 'Arquivo do Trabalho',
      type: 'file',
    }),
    defineField({
      name: 'conteudoExpandido',
      title: 'Conteúdo Expandido (Tópicos do Ler Mais)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Adicione os parágrafos que vão aparecer quando o usuário clicar em "Ler mais".',
    }),
  ],
})
