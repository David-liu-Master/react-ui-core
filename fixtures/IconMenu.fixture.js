import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';

import IconMenu from '../src/IconMenu';

export default [
  {
    component: IconMenu,
    props: {
      items: [
        {
          label: 'star',
          Icon: StarIcon,
          onClick: () => console.log('star')
        },
        {
          label: 'delete',
          Icon: DeleteIcon,
          onClick: () => console.log('delete')
        },
        {
          label: 'home',
          Icon: HomeIcon,
          onClick: () => console.log('home')
        }
      ]
    }
  }
];
