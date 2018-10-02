import MarkdownRenderer from '../src/MarkdownRenderer';

export default [
  {
    component: MarkdownRenderer,
    props: {
      source:
        '# Test \n **bold** \n * list \n * list \n \n```java\nclass Auto {\n}\n```'
    }
  }
];
