/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1];
      if (ord) return 'other';
      return n == 1 && v0 ? 'one' : 'other';
    }
  },
  messages: {
    'Next Page': 'N\xE4chste Seite',
    'Previous Page': 'Vorherige Seite',
    'Rows per page:': 'Zeilen pro Seite',
    'openpatch.ui-core.assignment': 'Aufgabe',
    'openpatch.ui-core.cancel': 'Abbrechen',
    'openpatch.ui-core.confirm': 'OK',
    'openpatch.ui-core.max': 'Max',
    'openpatch.ui-core.mean': 'Mittelwerk',
    'openpatch.ui-core.median': 'Median',
    'openpatch.ui-core.min': 'Min',
    'openpatch.ui-core.n': 'N',
    'openpatch.ui-core.standardDeviation': 'SD',
    'openpatch.ui-core.unsupported': 'Nicht unterst\xFCtzt',
    'openpatch.ui-core.variance': 'Varianz',
    '{from}-{to} of {count}': function(a) {
      return [a('from'), '-', a('to'), ' bis ', a('count')];
    }
  }
};
