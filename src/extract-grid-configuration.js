import AdmZip from 'adm-zip'

export default function extractGridConfiguration({ file }) {
  /**
   * Create a new zip file instance
   */
  const zip = new AdmZip(file)

  /**
   * Get all page entries and it's raw data
   */
  const pageEntries = zip
    .getEntries()
    .filter(e => e.entryName.indexOf('pages') === 0)
  const pageEntriesData = pageEntries.map(e => e.getData().toString())

  /**
   * Parse the pages json data and get it's layers
   */
  const pagesJson = pageEntriesData.map(data => JSON.parse(data))
  const pagesLayers = pagesJson.map(page => page.layers)[0]

  /**
   * Filter for only artboard, because layer don't include an (necessary) layout
   */
  const onlyArtboardPages = pagesLayers.filter(
    page => page._class === 'artboard'
  )
  const layouts = onlyArtboardPages.map(artboard => artboard.layout)

  /**
   * And finally extract the configuration
   */
  const configuration = layouts.length > 1 ? layouts : layouts[0]

  return configuration
}
