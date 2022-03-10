import { Formik } from 'formik';
import * as Yup from 'yup';
import Colors from '../constants/color/Colors'

import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../stores/authSlice';

import InputLogin from '../components/atoms/login/InputLogin';
import DismissKey from '../components/atoms/login/DismissKey';
import ErrorInput from '../components/atoms/login/ErrorInput';
import BtnLogin from '../components/atoms/login/BtnLogin';


const LoginScreen = () => {
  const { isLoggedIn, email, password } = useSelector(state => state.userAuth);
  const dispatch = useDispatch();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DismissKey>
        <View style={styles.container_screen}>

          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: '95%',
            borderRadius: 10,
            padding: 20,
            marginBottom: 100,

          }}>
            <View>
              <Text style={{ fontSize: 40, color: Colors.PrimaryText }}>Welcome {'\n'}Back </Text>
            </View>
            <View>
              <Image source={require('../assets/images/logo.png')} style={{ width: 95, height: 100 }} />
            </View>
          </View>

          <Formik
            validationSchema={SignInSchema}
            initialValues={{
              isLoggedIn: isLoggedIn,
              email: email,
              password: password
            }}
            onSubmit={values => dispatch(setSignIn(values))}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.container_form}>

                <View style={styles.container_item}>
                  <InputLogin
                    nameIcon="email-outline"
                    handleInput={handleChange('email')}
                    handleOnBlur={handleBlur('email')}
                    valueInput={values.email}
                    placeHolderInput="E-mail" />

                  {errors.email && touched.email ? <ErrorInput>{errors.email}</ErrorInput> : null}
                </View>

                <View style={styles.container_item}>

                  <InputLogin
                    nameIcon="lock-outline"
                    handleInput={handleChange('password')}
                    handleOnBlur={handleBlur('password')}
                    valueInput={values.password}
                    placeHolderInput="Password" />

                  {errors.password && touched.password ? <ErrorInput>{errors.password}</ErrorInput> : null}
                </View>

                <BtnLogin onHandleBtn={handleSubmit} />

              </View>
            )}
          </Formik>
        </View>
      </DismissKey>
    </SafeAreaView >
  )
}

export default LoginScreen


const styles = StyleSheet.create({
  container_screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PrimaryBackGround,
    paddingTop: 20
  },
  container_logo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height: 200,
  },
  container_form: {
    width: '95%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  container_item: {
    marginBottom: 20
  }

});