import { compose, path } from 'ramda'

export const selectMetadata = path(['site', 'siteMetadata'])

export const selectTitle = compose(path(['title']), selectMetadata)
export const selectDescription = compose(path(['description']), selectMetadata)
export const selectKeywords = compose(path(['keywords']), selectMetadata)
