import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
// import { BLOCKS } from '@contentful/rich-text-types'
import { date } from '@/plugins/filter'

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

const documentToHtml = (doc) => {
  return documentToHtmlString(doc)
}

const client = createClient(config)

const parseEntry = (entry, option = { type: 'post' }) => {
  let renderdContent = ''
  if (option.type === 'list') {
    renderdContent = documentToPlainTextString(entry.fields.content)
  } else {
    renderdContent = documentToHtml(entry.fields.content)
  }
  return {
    id: entry.fields.id,
    title: entry.fields.title,
    description: entry.fields.description,
    content: renderdContent,
    tags: entry.fields.tags,
    createdAt: date(entry.sys.createdAt),
    updatedAt: date(entry.sys.updatedAt)
  }
}

const parseEntries = (entries, option = { type: 'post' }) => {
  const parsedEntries = []
  let entry
  for (entry of entries) {
    parsedEntries.push(parseEntry(entry, option))
  }
  return parsedEntries
}

export const getEntries = async (option = { type: 'post' }) => {
  const entries = await client.getEntries()
  return parseEntries(entries.items, option)
}

export const getEntry = async (id, option = { type: 'post' }) => {
  const entries = await client.getEntries()
  let entry
  for (entry of entries.items) {
    if (entry.fields.id === id) {
      return parseEntry(entry, option)
    }
  }
  return null
}
