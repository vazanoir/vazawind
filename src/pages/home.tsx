import React from 'react';
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
        <p>Button1</p>
        <p>Button2</p>
      </NavigationButtons>
    </Page>
  );
};

export default Home;
