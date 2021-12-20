/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import AddCard from '../screens/addCards/AddCard';
import BankIssuedCard from '../screens/addCards/BankIssuedCard';
import PurchaseMembership from '../screens/addCards/PurchaseMemberShip';
import MyCards from '../screens/addCards/MyCards';
import ViewCards from '../screens/addCards/ViewCards';
import AddTrip from '../screens/addTripScreens/AddTrip';
import LoginScreen from '../screens/auth/LoginScreen';
import EditProfile from '../screens/bottomTabScreens/profile/EditProfile';
import MyMembership from '../screens/myMembership/MyMembership';
import Faqs from '../screens/terms/faqs';
import TermsAndCondition from '../screens/terms/TermsAndCondition';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import MyAccessCode from '../screens/bottomTabScreens/profile/MyAccessCode';
import Notification from '../screens/notification/Notification';
import BookingSummary from '../screens/bottomTabScreens/myBookings/BookingSummary';
import PurchaseMembershipFlatList from '../screens/addCards/PurchaseMembershipFlatList';
import MembershipId from '../screens/addCards/MembershipId';
import OtpResend from '../screens/auth/OtpResend';
import Payment from '../screens/payment/Payment';
import SpaPayment from '../screens/payment/SpaPayment';
import QRView from '../screens/qrScreen/qrView';
import AddNewCard from '../screens/auth/cardOnboard/AddNewCard';
import UpcomingTrips from '../screens/addTripScreens/UpcomingTrips';
import MyBookings from '../screens/bottomTabScreens/myBookings/MyBookings';
import UpcomingBooking from '../screens/bottomTabScreens/myBookings/UpcomingBooking';
import CompleteBooking from '../screens/bottomTabScreens/myBookings/CompleteBooking';
import CancelledBooking from '../screens/bottomTabScreens/myBookings/CancelledBooking';
import PendingBooking from '../screens/bottomTabScreens/myBookings/PendingBooking';
import Lounge from '../screens/discover/Lounge';
import LoungeDetails from '../screens/discover/LoungeDetails';
import Spa from '../screens/discover/Spa';
import SpaDetails from '../screens/discover/SpaDetails';
import SpaSummary from '../screens/bookingSummary/SpaSummary';
import SpaQR from '../screens/qrScreen/SpaQR';
import MandA from '../screens/discover/MandA';
import MandADetails from '../screens/discover/MandADetails';
import MandAForm from '../screens/discover/MandAForm';
import MandAPayment from '../screens/payment/MandAPayment';
import MandABookingSummary from '../screens/bookingSummary/MandABookingSummary';
import SleepingPods from '../screens/discover/SleepingPods';
import SleepingPodsForm from '../screens/discover/SleepingPodsForm';
import SleepingPodsDetails from '../screens/discover/SleepingPodsDetails';
import SleepingPodsPayment from '../screens/payment/SleepingPodsPayment';
import SleepingPodsBookingSummary from '../screens/bookingSummary/SleepingPodsBookingSummary';
import TH from '../screens/discover/TH';
import THForm from '../screens/discover/THForm';
import THDetails from '../screens/discover/THDetails';
import THPayment from '../screens/payment/THPayment';
import THBookingSummary from '../screens/bookingSummary/THBookingSummary';
import AirportTransportForm from '../screens/discover/AirportTransportForm';
import AirportTransportPayment from '../screens/payment/AirportTransportPayment';
import AirportBookingSummary from '../screens/bookingSummary/AirportBookingSummary';
import FandB from '../screens/discover/FandB';
import FandBPayment from '../screens/payment/FandBPayment';
import FandBOrderDetails from '../screens/bookingSummary/FandBOrderDetails';
import DiscoverMain from '../screens/discover/discoverTopTab/DiscoverMain';
import DiscoverTopTab from './topTabs/DiscoverTopTab';
import PasswordTest from '../screens/discover/passwordtest';
import PaymentSuccessful from '../screens/payment/PaymentSuccessful';
import NoInternet from '../screens/errors/NoInternet';
import Error from '../screens/errors/Error';
import WriteReview from '../screens/writeReview/WriteReview';
import HomeWithout from '../screens/bottomTabScreens/withoutLogin/HomeWithout';
import HomeAdditional from '../screens/bottomTabScreens/home/HomeAdditional';
import OnBoarding from '../screens/onboarding/OnBoarding';
import BottomTabBarNavigatorone from './topTabs/Bottomtabbarnavigatorwithout';
import FandBDetails from '../screens/discover/FandBDetails';


const Stack = createStackNavigator();

export default function StackNavigator() {


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                keyboardHidesTabBar: true,
            }}
        >
            
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
            <Stack.Screen name="Homeone" component={BottomTabBarNavigatorone} />
            <Stack.Screen name="DiscoverMain" component={DiscoverMain} />
            <Stack.Screen name="DiscoverTopTab" component={DiscoverTopTab} />
            <Stack.Screen name="OtpResend" component={OtpResend} />
            <Stack.Screen name="MyAccessCode" component={MyAccessCode} />
            <Stack.Screen name="Faqs" component={Faqs} />
            <Stack.Screen name="MembershipId" component={MembershipId} />
            <Stack.Screen name="PurchaseMembershipFlatList" component={PurchaseMembershipFlatList} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="qrView" component={QRView} />
            <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="AddNewCard" component={AddNewCard} />
            <Stack.Screen name="ViewCards" component={ViewCards} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="SpaPayment" component={SpaPayment} />
            <Stack.Screen name="MyCards" component={MyCards} />
            <Stack.Screen name="BankIssuedCard" component={BankIssuedCard} />
            <Stack.Screen name="PurchaseMembership" component={PurchaseMembership} />
            <Stack.Screen name="MyMembership" component={MyMembership} />
            <Stack.Screen name="AddTrip" component={AddTrip} />
            <Stack.Screen name="BookingSummary" component={BookingSummary} />
            <Stack.Screen name="UpcomingTrips" component={UpcomingTrips} />
            <Stack.Screen name="MyBookings" component={MyBookings} />
            <Stack.Screen name="UpcomingBooking" component={UpcomingBooking} />
            <Stack.Screen name="CompleteBooking" component={CompleteBooking} />
            <Stack.Screen name="CancelledBooking" component={CancelledBooking} />
            <Stack.Screen name="PendingBooking" component={PendingBooking} />
            <Stack.Screen name="Lounge" component={Lounge} />
            <Stack.Screen name="LoungeDetails" component={LoungeDetails} />
            <Stack.Screen name="Spa" component={Spa} />
            <Stack.Screen name="SpaDetails" component={SpaDetails} />
            <Stack.Screen name="SpaSummary" component={SpaSummary} />
            <Stack.Screen name="SpaQR" component={SpaQR} />
            <Stack.Screen name="MandA" component={MandA} />
            <Stack.Screen name="MandADetails" component={MandADetails} />
            <Stack.Screen name="MandAForm" component={MandAForm} />
            <Stack.Screen name="MandAPayment" component={MandAPayment} />
            <Stack.Screen name="MandABookingSummary" component={MandABookingSummary} />
            <Stack.Screen name="SleepingPods" component={THPayment} />
            <Stack.Screen name="SleepingPodsForm" component={SleepingPodsForm} />
            <Stack.Screen name="SleepingPodsDetails" component={SleepingPodsDetails} />
            <Stack.Screen name="SleepingPodsPayment" component={SleepingPodsPayment} />
            <Stack.Screen name="SleepingPodsBookingSummary" component={SleepingPodsBookingSummary} />
            <Stack.Screen name="TH" component={TH} />
            <Stack.Screen name="THForm" component={THForm} />
            <Stack.Screen name="THDetails" component={THDetails} />
            <Stack.Screen name="THPayment" component={THPayment} />
            <Stack.Screen name="THBookingSummary" component={THBookingSummary} />
            <Stack.Screen name="AirportTransportForm" component={AirportTransportForm} />
            <Stack.Screen name="AirportTransportPayment" component={AirportTransportPayment} />
            <Stack.Screen name="AirportBookingSummary" component={AirportBookingSummary} />
            <Stack.Screen name="FandB" component={FandB} />
            <Stack.Screen name="FandBDetails" component={FandBDetails}/>
            <Stack.Screen name="PasswordTest" component={PasswordTest}/>
            <Stack.Screen name="FandBPayment" component={FandBPayment} />
            <Stack.Screen name="FandBOrderDetails" component={FandBOrderDetails} />
            <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />
            <Stack.Screen name="NoInternet" component={NoInternet} />
            <Stack.Screen name="Error" component={Error} />
            <Stack.Screen name="WriteReview" component={WriteReview} />
            <Stack.Screen name="HomeWithout" component={HomeWithout} />
            <Stack.Screen name="HomeAdditional" component={HomeAdditional} />
            





        </Stack.Navigator>
    );
}
