import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {publishWithSlug} from './actions/publishWithSlug'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Patrick Farrell Blog',
  projectId: 'a9spmcts',
  dataset: 'production',

  // One list of posts and nothing else. The editor is not a technical user.
  plugins: [
    structureTool({
      title: 'Blog',
      structure: (S) =>
        S.documentTypeList('post')
          .title('Blog Posts')
          .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
    }),
  ],
  schema: {types: schemaTypes},

  document: {
    comments: {enabled: false},
    actions: (prev, {schemaType}) =>
      schemaType === 'post'
        ? prev
            // A duplicate would share the original's web address.
            .filter((action) => action.action !== 'duplicate')
            .map((action) => (action.action === 'publish' ? publishWithSlug(action) : action))
        : prev,
  },
  tasks: {enabled: false},
  releases: {enabled: false},
  scheduledDrafts: {enabled: false},
  announcements: {enabled: false},
})
