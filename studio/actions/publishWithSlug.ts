import {useClient, useDocumentOperation, type DocumentActionComponent} from 'sanity'

const MAX_LENGTH = 96

export function slugify(title: string): string {
  return title
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, MAX_LENGTH)
    .replace(/^-+|-+$/g, '')
}

/**
 * Wraps the normal Publish button so that a post gets its web address the first
 * time it is published. The field is hidden, so the editor never has to create it.
 */
export function publishWithSlug(original: DocumentActionComponent): DocumentActionComponent {
  const PublishWithSlug: DocumentActionComponent = (props) => {
    const result = original(props)
    const {patch} = useDocumentOperation(props.id, props.type)
    const client = useClient({apiVersion: '2026-02-01'})

    if (!result) return null

    return {
      ...result,
      onHandle: async () => {
        const doc = props.draft ?? props.published
        const hasSlug = Boolean((doc?.slug as {current?: string} | undefined)?.current)
        const title = typeof doc?.title === 'string' ? doc.title : ''

        // With no title, carry on so that Publish shows its usual "add a title" message.
        if (!hasSlug && title) {
          const base = slugify(title) || 'post'
          const taken = await client.fetch<string[]>(
            `*[_type == "post" && !(_id in [$id, "drafts." + $id]) && slug.current match $pattern].slug.current`,
            {id: props.id, pattern: `${base}*`},
          )
          let current = base
          for (let n = 2; taken.includes(current); n++) current = `${base}-${n}`
          patch.execute([{set: {slug: {_type: 'slug', current}}}])
        }

        result.onHandle?.()
      },
    }
  }
  PublishWithSlug.action = 'publish'
  return PublishWithSlug
}
