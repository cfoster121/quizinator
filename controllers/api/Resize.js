const sharp = require('sharp');
const uuid = require('uuid');
const path = require('path');

class Resize {
  constructor(folder, id) {
    this.folder = folder;
    this.id = id;
  }
  async save(buffer) {
    const filename = Resize.filename(this.id);
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);
    
    return filename;
  }
  static filename(id) {
    return `${id}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Resize;