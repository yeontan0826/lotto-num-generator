import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screen/homeScreen';
import { HistoryListScreen } from '../screen/historyListScreen';
import { TabIcon } from '../components/tabIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const getIconName = () => {
              if (route.name === 'HistoryListScreen') {
                return 'time';
              }
              return 'home';
            };
            const iconName = getIconName();
            return <TabIcon iconName={iconName} iconColor={color} />;
          },
        };
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="HistoryListScreen" component={HistoryListScreen} />
    </Tab.Navigator>
  );
};
