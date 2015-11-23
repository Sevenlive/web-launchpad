var UIMapper = function UIMapper(config) {
  this.init(config);
};

UIMapper.COLOR_CODES = {
  'red': '#ff0000',
  'redFull': '#ff0000',
  'amber': '#0000ff',
  'amberFull': '#ff00ff',
  'yellow': '#0000ff',
  'yellowFull': '#0000ff',
  'green': '#00ff00',
  'greenFull': '#00ff00'
};

UIMapper.mapping = {
  104: [0,0],
  105: [0,1],
  106: [0,2],
  107: [0,3],
  108: [0,4],
  109: [0,5],
  110: [0,6],
  111: [0,7],
  0: [1,0],
  1: [1,1],
  2: [1,2],
  3: [1,3],
  4: [1,4],
  5: [1,5],
  6: [1,6],
  7: [1,7],
  16: [2,0],
  17: [2,1],
  18: [2,2],
  19: [2,3],
  20: [2,4],
  21: [2,5],
  22: [2,6],
  23: [2,7],
  32: [3,0],
  33: [3,1],
  34: [3,2],
  35: [3,3],
  36: [3,4],
  37: [3,5],
  38: [3,6],
  39: [3,7],
};

UIMapper.prototype = Object.create(EventEmitter.prototype);

Object.assign(UIMapper.prototype, {
  output: null,

  init: function init(config) {
    Object.assign(this, config);
    this._initElement();
  },

  _initElement: function _initElement() {
    this.element = document.getElementById('ui');
  },

  buttonOn: function buttonOn(key, color, full) {
    var position = UIMapper.mapping[key];
    var columnElement = this._findButton(position);
    var color = UIMapper.COLOR_CODES[color];

    columnElement.style.background = color;
  },

  buttonOff: function buttonOff(key) {
    var position = UIMapper.mapping[key];
    var columnElement = this._findButton(position);

    columnElement.style.background = 'none';
  },

  _findButton: function _findButton(position) {
    var row = position[0];
    var column = position[1];

    var rowElement = this.element.children[row];
    var columnElement = rowElement.children[column];

    return columnElement;
  }
});
