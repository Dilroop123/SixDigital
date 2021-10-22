import React from 'react';
import normalize from 'react-native-normalize';
import {useSelector, useDispatch} from 'react-redux';
import color from '../../style/color';
import * as HomeAction from '../../store/actions/HomeAction';
import ProffesionalServices from './components/ProffesionalServices';
import MyProjects from './components/MyProjects';
import Advertisement from './components/Advertisement';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import {SCREEN_HEIGHT} from '../../style/fontSize';
import {getUserDetail} from '../../components/getUserDetail';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const homeData = useSelector(state => state.home.HomeData);

  const [userId, setUserId] = React.useState(null);
  const [loader, setLoader] = React.useState(false);

  // const {userid} = getUserDetail();
  async function getUserId() {
    setUserId(await getUserDetail());
  }

  React.useEffect(() => {
    getUserId();
  }, []);

  React.useEffect(() => {
    //  setLoader(true);  check in voozoo
    if (userId) {
      dispatch(HomeAction.fetchHomeData(userId));
    }

    setLoader(false);
  }, [userId, dispatch]);

  return (
    <View style={styles.container}>
      <MyProjects
        headerComponent={
          <ProffesionalServices
            ProffesionalServicesData={homeData?.services}
            footerComponent={
              <Header
                leftLabel="My Projects"
                rightLabel="See all"
                style={{marginBottom: SCREEN_HEIGHT * 0.02}}
              />
            }
            onPress={service =>
              navigation.navigate('PopularServiceDescription', {
                service,
              })
            }
          />
        }
        footerComponent={
          <Advertisement
            advertisementData={homeData?.offers}
            onPressMyOfferSeeAll={advertisementData =>
              navigation.navigate('MyOffers', {advertisementData})
            }
          />
        }
        onPress={product =>
          navigation.navigate('MyProjectDetail', {
            product,
          })
        }
        myProjectsData={homeData?.projects}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    padding: normalize(15),
  },
});
