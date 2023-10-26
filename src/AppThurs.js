import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <View className="App">
      <Card>
      <Heading level={1}>Christian Spirit Week!</Heading>
      <h3>{user.username}</h3>
        <Image src={logo} width={240} className="App-logo" alt="logo" />
        <img src="https://akns-images.eonline.com/eol_images/Entire_Site/20090625/400.jackson.mugshot.062509.jpg" width="401"/>
        <img src="https://forgifs.com/gallery/d/247857-2/Dog-balances-rubber-ducky.gif" width="360"/>
        <img src="https://2.bp.blogspot.com/-_JjwaHFMJiQ/TmfXsA3tApI/AAAAAAAAFzU/GWgYifml2pk/s1600/funny_dog_gif+3.gif" width="401"/>

      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
