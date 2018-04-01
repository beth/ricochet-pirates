import COLORS from './config/colors';
import TOKEN_DESIGNS from './config/tokenDesigns';

class Glyph {
  constructor(id, color, design) {
    this.id = id;
    this.color = color;
    this.design = design;
  }
}

const generateGlyphs = () => {
  const glyphs = [];
  let counter = 0;
  COLORS.forEach((color) => {
    TOKEN_DESIGNS.forEach((design) => {
      glyphs.push(new Glyph(counter, color, design));
      counter += 1;
    });
  });
  glyphs.push(new Glyph(counter, 'ALL', 'WAVES'));
  return glyphs;
};

const glyphs = generateGlyphs();

export {
  Glyph,
  glyphs,
};
