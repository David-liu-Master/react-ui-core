import TabbedCodeEditor from '../src/TabbedCodeEditor';

export default [
  {
    component: TabbedCodeEditor,
    props: {
      editors: [
        {
          label: 'Auto.java',
          defaultValue: 'Test'
        },
        {
          label: 'Haus.java',
          defaultValue: 'Haus'
        }
      ]
    }
  }
];
