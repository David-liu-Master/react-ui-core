/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
          ? 'two'
          : n10 == 3 && n100 != 13
          ? 'few'
          : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    }
  },
  messages: {
    'openpatch.ui-core.assignment': 'Assignment',
    'openpatch.ui-core.cancel': 'Cancel',
    'openpatch.ui-core.confirm': 'Confirm',
    'openpatch.ui-core.max': 'Max',
    'openpatch.ui-core.mean': 'Mean',
    'openpatch.ui-core.median': 'Median',
    'openpatch.ui-core.min': 'Min',
    'openpatch.ui-core.n': 'N',
    'openpatch.ui-core.standardDeviation': 'SD',
    'openpatch.ui-core.unsupported': 'Unsupported',
    'openpatch.ui-core.variance': 'Var'
  }
};
