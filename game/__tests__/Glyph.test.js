import { expect } from 'chai';
import { Glyph, glyphs } from '../Glyph';
import COLORS from '../config/colors';
import DESIGNS from '../config/tokenDesigns';

describe('Glyph', () => {
  describe('Glyph Class', () => {
    let glyph;
    beforeEach(() => {
      glyph = new Glyph(1, 'RED', 'TREASURE');
    });

    it('should have an id', () => {
      expect(glyph.id).to.equal(1);
    });

    it('should have a color', () => {
      expect(glyph.color).to.equal('RED');
    });

    it('should have a design', () => {
      expect(glyph.design).to.equal('TREASURE');
    });
  });

  describe('Glyph Generation', () => {
    it('should have one glyph for every color/design combination, plus one for all', () => {
      expect(glyphs).to.have.lengthOf((COLORS.length * DESIGNS.length) + 1);
    });

    it('should have generate glyphs that are instance of Glyph', () => {
      expect(glyphs[0]).to.be.an.instanceOf(Glyph);
    });

    it('should have generate glyphs with a color and design from config/color and config/design', () => {
      expect(glyphs[0].color).to.be.oneOf(COLORS);
      expect(glyphs[0].design).to.be.oneOf(DESIGNS);
    });
  });
});

