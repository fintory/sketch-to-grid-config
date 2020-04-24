import path from 'path'
import {expect} from 'chai'
import extractGridConfiguration from '../src/extract-grid-configuration'

describe('extractGridConfiguration', function () {
  describe('single artboard', function () {
    it('should extract the right grid configuration', function () {
      const configuration = extractGridConfiguration({ file: path.join(__dirname, 'sketch-files', 'single-artboard.sketch') })

      expect(configuration).to.not.be.an('array')
      expect(configuration).to.deep.equal({
        "_class":"layoutGrid",
        "isEnabled":true,
        "columnWidth":60,
        "drawHorizontal":false,
        "drawHorizontalLines":false,
        "drawVertical":true,
        "gutterHeight":12,
        "gutterWidth":20,
        "guttersOutside":true,
        "horizontalOffset":160,
        "numberOfColumns":12,
        "rowHeightMultiplication":5,
        "totalWidth":960
      })
    })
  })
})
