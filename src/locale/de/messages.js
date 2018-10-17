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
    'openpatch.ui-core.assignment': 'Aufgabe',
    'openpatch.ui-core.cancel': 'Abbrechen',
    'openpatch.ui-core.confirm': 'OK',
    'openpatch.ui-core.email': 'E-Mail',
    'openpatch.ui-core.login': 'Login',
    'openpatch.ui-core.max': 'Max',
    'openpatch.ui-core.mean': 'Mittelwerk',
    'openpatch.ui-core.median': 'Median',
    'openpatch.ui-core.min': 'Min',
    'openpatch.ui-core.n': 'N',
    'openpatch.ui-core.password': 'Passwort',
    'openpatch.ui-core.register': 'Registrieren',
    'openpatch.ui-core.repeatPassword': 'Passwort Wiederholen',
    'openpatch.ui-core.standardDeviation': 'SD',
    'openpatch.ui-core.unsupported': 'Nicht unterst\xFCtzt',
    'openpatch.ui-core.username': 'Benutzername',
    'openpatch.ui-core.variance': 'Varianz'
  }
};
