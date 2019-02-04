import ResponseField from '../src/ResponseField';

export default [
  {
    component: ResponseField,
    name: 'Multiple-Choice',
    props: {
      name: 'Multiple-Choice',
      type: 'choice',
      multiple: true,
      onChange: console.log,
      choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      value: {
        0: true
      }
    }
  },
  {
    component: ResponseField,
    name: 'Single-Choice',
    props: {
      name: 'Single-Choice',
      publicDescription: '**test** hallo',
      type: 'choice',
      required: true,
      hint: 'Give me a hint',
      onChange: console.log,
      choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      value: {
        0: true
      }
    }
  },
  {
    component: ResponseField,
    name: 'Text',
    props: {
      name: 'Text',
      type: 'text',
      onChange: console.log,
      input: {
        type: 'text',
        multiline: true,
        value: 'default value',
        rows: 5
      }
    }
  },
  {
    component: ResponseField,
    name: 'Select',
    props: {
      name: 'Select',
      type: 'select',
      options: ['Option1', 'Option2', 'Option3'],
      value: 'Option2',
      onChange: console.log
    }
  },
  {
    component: ResponseField,
    name: 'Matrix',
    props: {
      name: 'matrix',
      type: 'matrix',
      columns: ['Column1', 'Column2', 'Column3'],
      rows: ['Row1', 'Row2', 'Row3'],
      input: {
        type: 'single-choice'
      },
      onChange: console.log
    }
  },
  {
    component: ResponseField,
    name: 'Matrix - Multiple Choice',
    props: {
      name: 'matrix',
      type: 'matrix',
      columns: ['Column1', 'Column2', 'Column3'],
      rows: ['Row1', 'Row2', 'Row3'],
      input: {
        type: 'multiple-choice'
      },
      onChange: console.log
    }
  },
  {
    component: ResponseField,
    name: 'Matrix - Text',
    props: {
      name: 'matrix',
      type: 'matrix',
      columns: ['Column1', 'Column2', 'Column3'],
      rows: ['Row1', 'Row2', 'Row3'],
      input: {
        type: 'text'
      },
      value: {
        values: {
          1: {
            2: 'Test'
          }
        }
      },
      onChange: console.log
    }
  },
  {
    component: ResponseField,
    name: 'Matrix - Single-Choice',
    props: {
      name: 'matrix',
      type: 'matrix',
      columns: ['Column1', 'Column2', 'Column3'],
      rows: ['Row1', 'Row2', 'Row3'],
      input: {
        type: 'single-choice'
      },
      onChange: console.log
    }
  },
  {
    component: ResponseField,
    name: 'Matrix - Additional',
    props: {
      name: 'matrix',
      type: 'matrix',
      columns: ['Column1', 'Column2', 'Column3'],
      rows: ['Row1', 'Row2', 'Row3'],
      input: {
        type: 'single-choice'
      },
      value: {
        additionalRows: ['Additional Row']
      },
      allowAdditional: true,
      onChange: console.log
    }
  }
];
