import { useColorMode } from "@xstyled/styled-components";

const useColorModeWrapper = () => {
  const [mode] = useColorMode();

  const handleColor = (light, dark) => (mode === "lightMode" ? light : dark);

  return handleColor;
};
export default useColorModeWrapper;
