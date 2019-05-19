import TabbedCodeEditor from '../src/TabbedCodeEditor';

export default [
  {
    component: TabbedCodeEditor,
    props: {
      onChange: (label, value) => console.log(label, value),
      editors: [
        {
          label: 'Auto.java',
          defaultValue: 'Test'
        },
        {
          label: 'Haus.java',
          value: 'Haus'
        }
      ]
    }
  }
];
