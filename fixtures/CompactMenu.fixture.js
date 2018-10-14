import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';

import CompactMenu from '../src/CompactMenu';

export default [
  {
    component: CompactMenu,
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
