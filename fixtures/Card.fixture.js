import React from 'react';
import Card from '../src/Card';
import CardBanner from '../src/CardBanner';
import CardContent from '../src/CardContent';
import CardButton from '../src/CardButton';

const FullCard = () => (
  <Card>
    <CardBanner />
    <CardContent>Content</CardContent>
    <CardButton>Button</CardButton>
  </Card>
);

FullCard.displayName = 'Card';

export default [
  {
    component: Card
  },
  {
    component: FullCard,
    props: {
      onClick: () => console.log('Click')
    }
  },
  {
    component: CardContent,
    props: {
      children: 'Content'
    }
  },
  {
    component: CardBanner
  },
  {
    component: CardBanner,
    props: {
      title: 'Title'
    }
  },
  {
    component: CardButton
  },
  {
    component: CardButton,
    props: {
      children: 'Button'
    }
  }
];
