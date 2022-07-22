import React from 'react';
import Button from '../components/Button';
import NavigationButtons from '../components/NavigationButtons';
import Page from '../components/Page';
import Title from '../components/Title';

const Home = () => {
  console.log('Home');

  return (
    <Page>
      <header>
        <Title>
          Home
        </Title>
      </header>

      <p>
        This is the home page.
      </p>

      <NavigationButtons>
        <Button>Button1</Button>
        <Button>Button2</Button>
      </NavigationButtons>
    </Page>
  );
};

export default Home;
