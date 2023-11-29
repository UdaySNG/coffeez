import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Header
        bigTitle="Coffeez"
        smallTitle="Coffee that will make you smile"
        buttonText="order now"
      />
      <Section headerTitle="Our Stories">
        <Card text="Working while enjoying!" image="pc-coffee.jpg" />
        <Card text="Just a delicious cup of coffee" image="lone-coffee.jpg" />
        <Card text="Every person has a story" image="story-coffee.jpg" />
        <Card text="Made organic just for you" image="coffee-malen.jpg" />
      </Section>
    </>
  );
};

export default HomePage;
