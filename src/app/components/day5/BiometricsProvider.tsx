import {
  Children,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

type BiometricsProvider = {
  isUnlocked: boolean;
  authenticate: () => Promise<void>;
};
const BiometricsContext = createContext<BiometricsProvider>({
  isUnlocked: false,
  authenticate: async () => {},
});

const BiometricsProvider = ({ children }: PropsWithChildren) => {
  const [isUnlocked, setIsUnloked] = useState(false);
  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    console.log("Does the device have biometric hardware?", hasHardware);

    if (!hasHardware) {
      Alert.alert("Not supported");
      //    setUnloked(true)  // As per business requrement
      return;
    }
    if (hasHardware) {
      // Proceed with biometric authentication
      const res = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to continue",
        fallbackLabel: "Enter PIN",
      });
      console.log(res);
      if (res.success) {
        setIsUnloked(true);
      }
    } else {
      console.warn("Device does not have biometric hardware.");
    }
  };
  return (
    <BiometricsContext.Provider value={{ isUnlocked, authenticate }}>
      {children}
    </BiometricsContext.Provider>
  );
};

export default BiometricsProvider;

export const useBiometrics = () => useContext(BiometricsContext);
