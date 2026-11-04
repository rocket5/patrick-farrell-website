import {defineArrayMember, defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Please add a title.'),
    }),
    defineField({
      name: 'bookAuthor',
      title: 'Book author',
      type: 'string',
      description: "Who wrote the book? Leave this blank if the post isn't about a book.",
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      description: 'Add as many as you like. The first one is the main picture for the post.',
      options: {layout: 'grid'},
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true, storeOriginalFilename: false},
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      validation: (rule) => rule.required().error('Please add some text.'),
      of: [
        defineArrayMember({
          type: 'block',
          // Paragraphs only: the website decides how everything looks.
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'Web address',
                    type: 'url',
                    validation: (rule) =>
                      rule.required().uri({scheme: ['http', 'https', 'mailto']}),
                  }),
                ],
              }),
            ],
          },
        }),
      ],
    }),

    // Filled in automatically, so the editor never has to think about them.
    defineField({
      name: 'publishedAt',
      title: 'Date',
      type: 'datetime',
      hidden: true,
      initialValue: () => new Date().toISOString(),
    }),
    // Set on first publish by actions/publishWithSlug.ts. It stays the same if the
    // title is edited later, so links to a post keep working.
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      hidden: true,
      options: {source: 'title', maxLength: 96},
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'bookAuthor', media: 'photos.0'},
  },
})
