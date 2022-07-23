import React from 'react';
import Button from '../components/Button';
import NavigationButtons from '../components/NavigationButtons';
import Page from '../components/Page';
import Title from '../components/Title';

const Home = () => {
  console.log('Home');

  return (
    <Page>
      <Title>Vazawind</Title>

      <p className="mt-8">
        This is the home page.
      </p>

      <NavigationButtons>
        <Button />
        <Button>Next</Button>
      </NavigationButtons>
    </Page>
  );
};

export default Home;
