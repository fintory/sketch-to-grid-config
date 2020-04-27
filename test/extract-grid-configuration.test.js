import { describe, it } from 'mocha'
import path from 'path'
import { expect } from 'chai'
import extractGridConfiguration from '../src/extract-grid-configuration'

describe('extractGridConfiguration', () => {
  describe('single artboard', () => {
    it('should extract the right grid configuration', () => {
      const configuration = extractGridConfiguration({
        file: path.join(__dirname, 'stubs', 'single-artboard.sketch'),
      })

      expect(configuration).to.not.be.an('array')
      expect(configuration).to.deep.equal({
        _class: 'layoutGrid',
        isEnabled: true,
        columnWidth: 60,
        drawHorizontal: false,
        drawHorizontalLines: false,
        drawVertical: true,
        gutterHeight: 12,
        gutterWidth: 20,
        guttersOutside: true,
        horizontalOffset: 160,
        numberOfColumns: 12,
        rowHeightMultiplication: 5,
        totalWidth: 960,
      })
    })
  })
})
