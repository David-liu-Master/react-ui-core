import ConfirmDialog from '../src/ConfirmDialog';

export default [
  {
    component: ConfirmDialog,
    props: {
      open: true,
      title: 'Test',
      content: 'Content',
      onCancel: () => console.log('cancel'),
      onConfirm: () => console.log('confirm')
    }
  }
];
